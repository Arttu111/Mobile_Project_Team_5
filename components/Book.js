import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import PreferenceList from "./PreferenceList";
import RecBook from "./RecBook";
import Loading from "./Loading";
import { SafeAreaView,ScrollView } from 'react-native';

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

    const renderLayout = () => {
        switch (viewLayout)
        {
            default:
            case 1:
                return(<View style={styles.bookItem}>
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
                </View>);
            case 2:
                return(<View style={styles.bookItem}>
                    <TouchableOpacity onPress={handlePress}>
                        <View style={styles.bookItemContainer}>
                            <View style={styles.bookItemImage}>
                                <Image source={{ uri: cover_img }} style={styles.image} resizeMode="cover" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>);
            case 3:
                return(<SafeAreaView style={{ flex: 1, marginTop: 30, backgroundColor: "#fcf0e4" }}>
                    <ScrollView>
                        <TouchableOpacity onPress={handlePress} style={{width: '50%', height: '25%', marginBottom: 20, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10,}}>
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
                    </ScrollView>
                </SafeAreaView>);
            case 4:
                return(<View>
                    <TouchableOpacity onPress={handlePress} style={{width: '100%'}}>
                        <View style={{marginRight: '100%', width: '100%', height: 1000}}>
                            <Image source={{ uri: cover_img }} style={styles.image} resizeMode="cover" />
                        </View>
                    </TouchableOpacity>
                </View>);
        }
    }
  
  return (
    <View>
        {renderLayout()}
    </View>
  );
};

export default Book;
