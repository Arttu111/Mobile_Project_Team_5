import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [books, setBooks] = useState([]);
    const [resultTitle, setResultTitle] = useState("");
    const [loading, setLoading] = useState(true);

    // fetch books
    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            // construct query parameters
            let query = "";
            if (searchTerm || category || author) {
                query += `q=${encodeURIComponent(searchTerm)}`
                    + (category ? `+subject:${encodeURIComponent(category)}` : '')
                    + (author ? `+author:${encodeURIComponent(author)}` : '');
            }
        
            const response = await fetch(`${URL}${query}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((singleBook) => ({
                    id: singleBook.key,
                    author: singleBook.author_name,
                    cover_id: singleBook.cover_i,
                    edition_count: singleBook.edition_count,
                    first_publish_year: singleBook.first_publish_year,
                    title: singleBook.title,
                    available_online: singleBook.ebook_count_i > 0 ? true : false,
                    bookURL: `https://openlibrary.org${singleBook.key}`,
                    description: singleBook.description,
                    publisher: singleBook.publisher,
                    subject: singleBook.subject,
                    // add more info here if needed
                }));

                setBooks(newBooks);
                setResultTitle(newBooks.length > 1 ? "" : "No Search Result Found");
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm, category, author]);

    // effect hook to fetch books when searchTerm changes
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, category, author, fetchBooks]);

    // return the context provider
    return (
        <AppContext.Provider value={{
            loading,
            books,
            setSearchTerm,
            setCategory,
            setAuthor,
            resultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
