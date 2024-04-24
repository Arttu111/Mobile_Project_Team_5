import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

//display editions of the book in horizontal scroll view if api allows for it and books of the same author or subject
//display description of the book if available in the api

//maybe a way to add specific books to a list of favorites
//maybe a way to follow an author
// ask user at the beginning of the app for preferences

const BookDetails = ({ route }) => {
    const { title, author, edition_count, first_publish_year, cover_img,
         publisher, subject, available_online, bookURL } = route.params.bookDetails;

    const handleOpenLibraryLink = () => {
        if (bookURL) {
            Linking.openURL(bookURL);
        }
    }

    const [showAllPublishers, setShowAllPublishers] = useState(false);
    const [showAllSubjects, setShowAllSubjects] = useState(false);

    const truncatedPublishers = publisher ? publisher.slice(0, 5) : [];
    const truncatedSubjects = subject ? subject.slice(0, 5) : [];

    const renderPublishers = () => {
        if (!publisher) {
            return "No Publisher Information Available";
        } else if (Array.isArray(publisher)) {
            const publishersToShow = showAllPublishers ? publisher : truncatedPublishers;
            return publishersToShow.join(', ');
        } else if (typeof publisher === 'string') {
            return publisher; 
        } else {
            return "Unknown Publisher Information";
        }
    };
    
    const renderSubjects = () => {
        if (!subject) {
            return "No Subject Information Available";
        } else if (Array.isArray(subject)) {
            const subjectsToShow = showAllSubjects ? subject : truncatedSubjects;
            return subjectsToShow.join(', ');
        } else if (typeof subject === 'string') {
            return subject;
        } else {
            return "Unknown Subject Information";
        }
    };

    return (
        <ScrollView>
            <View>
                <Image source={{ uri: cover_img }} style={{ width: 200, height: 300 }} />
                <Text>Title: {title}</Text>
                <Text>Author: {Array.isArray(author) ? author.join(", ") : 'No author information available'}</Text>
                <Text>Total Editions: {edition_count}</Text>
                <Text>First Publish Year: {first_publish_year}</Text>
                {available_online && (
                    <TouchableOpacity onPress={handleOpenLibraryLink}>
                        <Text style={{ color: 'blue', fontWeight: "bold" }}>Available Online - View on Open Library</Text>
                    </TouchableOpacity>
                )}
                <Text>Publisher: {renderPublishers()}
                    {publisher && publisher.length > 5 && !showAllPublishers &&
                        <Text style={{ color: 'grey', fontWeight: 'bold' }} onPress={() => setShowAllPublishers(true)}> ...show more</Text>
                    }
                    {showAllPublishers &&
                        <Text style={{ color: 'grey', fontWeight: 'bold' }} onPress={() => setShowAllPublishers(false)}> ...show less</Text>
                    }
                </Text>
                <Text>Subject: {renderSubjects()}
                    {subject && subject.length > 5 && !showAllSubjects &&
                        <Text style={{ color: 'grey', fontWeight: 'bold' }} onPress={() => setShowAllSubjects(true)}> ...show more</Text>
                    }
                    {showAllSubjects &&
                        <Text style={{ color: 'grey', fontWeight: 'bold' }} onPress={() => setShowAllSubjects(false)}> ...show less</Text>
                    }
                </Text>
            </View>
        </ScrollView>
    );
};

export default BookDetails;
