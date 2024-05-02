import React, { useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../context';
import styles from '../styles/styles';

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchText = useRef('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    const tempSearchTerm = searchText.current.trim();
    if (tempSearchTerm === '') {
      setSearchTerm(""); // set placeholder search term.
    } else {
      setSearchTerm(tempSearchTerm);
    }
    // navigate to BookList
    navigation.navigate('BookList', {name: tempSearchTerm});

    console.log(tempSearchTerm);
  };

  return (
    <View>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, marginTop: 20,fontWeight:"bold",fontSize:20, }}
          placeholder="search ..."
          onChangeText={(text) => searchText.current = text}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.searchButton}>
          <Text style={{ fontWeight:"bold" , color:"white", fontSize:20}}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search;