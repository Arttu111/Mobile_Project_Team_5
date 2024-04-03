import React, { useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../context';

const Search = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    const tempSearchTerm = searchText.current.trim();
    if (tempSearchTerm === '') {
      setSearchTerm("Lord of the rings");
      setResultTitle("Search ...");
    } else {
      setSearchTerm(tempSearchTerm);
    }
    // navigate to BookList
    navigation.navigate('BookList');

    console.log(tempSearchTerm);
  };

  return (
    <View>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
          placeholder="search ..."
          onChangeText={(text) => searchText.current = text}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search;