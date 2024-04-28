import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGlobalContext } from '../context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//display this component in the settings screen too to allow users to change their preferences
//change in preference state should trigger a re-render of the recommendation book list

const Preferences = () => {
    const navigation = useNavigation();
    const { FIXED_SUBJECTS} = useGlobalContext();
    const { globalsubjects, setGlobalSubjects } = useGlobalContext();
    const [selectedSubjects, setSelectedSubjectsLocal] = useState([]); 

    //fetch user preferences from local storage
    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const preferences = await AsyncStorage.getItem('userPreferences');
                if (preferences) {
                    setSelectedSubjectsLocal(JSON.parse(preferences));
                    setGlobalSubjects(JSON.parse(preferences));
                    console.log('Preferences fetched:', JSON.parse(preferences));
            }
            } catch (error) {
                console.log('Error fetching preferences:', error);
            }
        };

        fetchPreferences();
    }, []);

    //toggle function to add or remove preferences in the preferences screen
    const toggleSubjectSelection = (subject) => {
        setSelectedSubjectsLocal(prevSelectedSubjects => {
            let updatedsubjects;
            if (prevSelectedSubjects.includes(subject)) {
                console.log(prevSelectedSubjects.filter(item => item !== subject), 'removed preference -> ', subject);
                updatedsubjects = prevSelectedSubjects.filter(item => item !== subject);
            } else {
                console.log("added preference",[...prevSelectedSubjects, subject]);
                updatedsubjects = [...prevSelectedSubjects, subject];
            }
            return updatedsubjects;
        });
    };

    const handleConfirm = async () => {
        try {
            await AsyncStorage.setItem('userPreferences', JSON.stringify(selectedSubjects));
            setGlobalSubjects(selectedSubjects);
            console.log('Preferences confirmed');
            navigation.navigate('Home');
        } catch (error) {
            console.log('Error saving preferences:', error);
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Select Your Preferences:</Text>
            {FIXED_SUBJECTS.map((subject, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => toggleSubjectSelection(subject)}
                    style={{
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        backgroundColor: selectedSubjects.includes(subject) ? 'lightblue' : 'transparent',
                        borderRadius: 5,
                        marginTop: 5,
                    }}>
                    <Text>{subject}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={handleConfirm} style={{ backgroundColor: 'blue', borderRadius: 5, padding: 10, marginTop: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Confirm Preferences</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Preferences;
