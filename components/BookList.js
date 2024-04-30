import React from 'react';
import { useGlobalContext } from '../context';
import Book from "./Book";
import styles from '../styles/styles';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Loading from "./Loading";

const BookList = () => {

  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "https://via.placeholder.com/150",
    }
  });

  const changeLayout = () => {
      if (viewLayout == totalViewLayouts)
      {
          viewLayout = 1;
      }
      else
      {
          viewLayout = viewLayout + 1;
      }
  }

  if (loading) return <Loading />;

  return (
      <View>
          <TouchableOpacity onPress={handleSubmit} style={styles.layoutButton}>
              <Text style={styles.layoutButtonText}>Change Layout</Text>
              <Text>{viewLayout}</Text>
          </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.booklistContent}>
          <View >
            <View >
              <Text>{resultTitle}</Text>
            </View>
            <View style={styles.booklistContent}>
              {booksWithCovers.slice(0, 50).map((item, index) => (
                <Book key={index} {...item} />

              ))}
            </View>
          </View>
        </ScrollView>
      </View>
  );
};

export default BookList;
