import React from 'react';
import { useGlobalContext } from '../context';
import RecBook from './RecBook';
import styles from '../styles/styles';
import { View, Text, ScrollView } from 'react-native';
import Loading from "./Loading";

const PreferencesList = () => {
  const { recBooks, recLoading, recTitle } = useGlobalContext();
  
  // add cover image URLs and format book IDs
  const recBooksWithCovers = recBooks.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "https://via.placeholder.com/150",
    }
  });

  if (recLoading) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.booklistContent}>
      <View>
        <Text>{recTitle}</Text>
        <View style={styles.booklistContent}>
          {recBooksWithCovers.map((item, index) => (
            <RecBook key={index} {...item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PreferencesList;
