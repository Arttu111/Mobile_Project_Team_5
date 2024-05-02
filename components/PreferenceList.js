import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import RecBook from './RecBook';
import styles from '../styles/styles';
import { View, Text, ScrollView } from 'react-native';
import Loading from "./Loading";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreferencesList = () => {
  const { recBooks, recLoading, recTitle, globalsubjects, setRecTitle } = useGlobalContext();
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    if(recBooks.length > 0) {
      setFetchLoading(false);
    }
    else {
      setFetchLoading(true);
    }
  }, [recBooks]);

  useEffect(() => {
    const preferences = AsyncStorage.getItem('userPreferences');
    if (globalsubjects===null || globalsubjects.length === 0 && recBooks.length === 0 && preferences===null || preferences.length === 0) {
      setRecTitle("Select preferences to get recommendations");
      setFetchLoading(false);
    }
  }, [globalsubjects]);

  // add cover image URLs and format book IDs
  const recBooksWithCovers = recBooks.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "https://via.placeholder.com/150",
    }
  });

  if (fetchLoading) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.booklistContent}>
      <View>
        <Text>{recTitle}</Text>
        <View style={styles.booklistContent}>
          {recBooksWithCovers.map((book, index) => (
            <RecBook key={`${book.id}-${index}`} {...book} />
          ))}
        </View>
        {recLoading && <Loading />}
      </View>
    </ScrollView>
  );
};

export default PreferencesList;
