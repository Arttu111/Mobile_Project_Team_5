import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Book = ({ cover_img, title, author, edition_count, first_publish_year, id,
   publisher, subject, available_online, bookURL }) => {

  const navigation = useNavigation();

  //navigate to and pass details to bookdetails component
  const handlePress = () => {
    navigation.navigate('Details', {
        bookDetails: {
            cover_img,
            title,
            author,
            edition_count,
            first_publish_year,
            id,
            publisher,
            subject,
            available_online,
            bookURL,
        }
    });
};
  
  return (
    <View style={styles.bookItem}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.bookItemContainer}>
          <View style={styles.bookItemImage}>
            <Image source={{ uri: cover_img }} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.bookItemInfo}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.authorText}>Author: {Array.isArray(author) ? author.join(", ") : 'No author information available'}</Text>
            <Text>Total Editions: {edition_count}</Text>
            <Text>First Publish Year: {first_publish_year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Book;
