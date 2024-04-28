import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const RecBook = ({ cover_img, title, author, edition_count, first_publish_year, id, publisher, subject, available_online, bookURL, }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    //pass details to bookdetails
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
    <TouchableOpacity onPress={handlePress} style={styles.recBookItem}>
      <View style={styles.recBookItemImage}>
        <Image source={{ uri: cover_img }} style={styles.recImage} resizeMode="cover" />
      </View>
      <View style={styles.recBookItemInfo}>
        <Text style={styles.recTitleText}>{title}</Text>
        <Text style={styles.recAuthorText}>Author: {Array.isArray(author) ? author.join(", ") : 'No author information available'}</Text>
        <Text>Total Editions: {edition_count}</Text>
        <Text>First Publish Year: {first_publish_year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecBook;
