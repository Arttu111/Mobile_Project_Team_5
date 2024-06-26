import React, { useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?";
//add more subjects to the array if needed
const FIXED_SUBJECTS = ["Fantasy", "Science fiction", "History", "Psychology", "Science", "Business"]

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [books, setBooks] = useState([]);
    const [recBooks, setRecBooks] = useState([]);
    const [resultTitle, setResultTitle] = useState("");
    const [recTitle, setRecTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [recLoading, setRecLoading] = useState(true);
    const [globalsubjects, setGlobalSubjects] = useState(null);

    // fetch and set initial state for globalsubjects
    useEffect(() => {
        const fetchInitialGlobalsubjects = async () => {
            try {
                const preferences = await AsyncStorage.getItem('userPreferences');
                setGlobalSubjects(preferences ? JSON.parse(preferences) : null);
            } catch (error) {
                console.log('Error fetching initial global subjects:', error);
            }
        };

        fetchInitialGlobalsubjects();
    }, []);

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

    const fetchSubjectBooks = useCallback(async () => {
        setRecLoading(true);
        try {
            let allBooks = [];
            let query = "";
            if (globalsubjects) {
                console.log("Global subjects:", globalsubjects);
                const subjectsCount = globalsubjects.length;
                const booksPerSubject = Math.ceil(60 / subjectsCount); // Calculate the approximate number of books per subject
    
                for (const subject of globalsubjects) {
                    query = `q=${encodeURIComponent(subject)}`;
                    const response = await fetch(`${URL}${query}`);
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }
                    const { docs } = data;
                    if (docs) {
                        const slicedDocs = docs.slice(0, booksPerSubject);
                        const newBooks = slicedDocs.map((singleBook) => ({
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
    
                        shuffleArray(newBooks);
                        allBooks.push(...newBooks);
                        // update state with the new books
                        setRecBooks((prevBooks) => [...prevBooks, ...newBooks]);
                        // Log the amount of books fetched for each subject
                        console.log(`Fetched ${slicedDocs.length} books for ${subject}`);
                    }
                }
            }
            shuffleArray(allBooks);
            setRecBooks(allBooks);
            setRecLoading(false);
            setRecTitle("");
        } catch (error) {
            console.log("Error fetching recommended books:", error);
            setRecTitle("Failed to load recommended books");
            setRecLoading(false);
        }
    }, [globalsubjects]);
    
    // shuffle recommendations
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    

    // effect hook to fetch books when searchTerm changes
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, category, author, fetchBooks]);
    // effect hook to fetch recommended books when globalsubjects changes
    useEffect(() => {
        fetchSubjectBooks();
    }, [globalsubjects, fetchSubjectBooks]);

    // return the context provider
    return (
        <AppContext.Provider value={{
            loading,
            recLoading,
            setRecLoading,
            books,
            recBooks,
            setRecBooks,
            setSearchTerm,
            setCategory,
            setAuthor,
            resultTitle,
            recTitle,
            setRecTitle,
            FIXED_SUBJECTS,
            globalsubjects,
            setGlobalSubjects,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };