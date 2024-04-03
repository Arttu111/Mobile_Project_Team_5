import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: 'gray',
    padding: 6,
    border: "1px solid black",
    borderRadius: 5,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  booklistContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '100%',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  bookItemImage: {
    marginRight: 10,
    width: 100,
    height: 150,
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
  bookItemInfo: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: "black"
  },
  booklist: {
    flex: 1,
  },
});

  export default styles;
  