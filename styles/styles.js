import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#BF40BF',
    padding: 10,
    border: "1px solid black",
    borderRadius: 5,
    
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fcf0e4"
  },
  booklistContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor:"#fcf0e4"
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
    fontSize: 20,
    color: "black"
  },
  booklist: {
    flex: 1,
  },

  homeText:{
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: 20,
  
  },
  summaryText:{
    paddingTop:18,
  fontSize:20,
  fontWeight:"bold",
  },
  recBookItem: {
    width: '30%',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  recBookItemImage: {
    marginRight: 10,
    width: '100%', 
    height: 150,
  },
  recImage: {
    flex: 1,
    borderRadius: 5,
  },
  recBookItemInfo: {
    flex: 1,
  },
  recTitleText: {
    fontWeight: 'bold',
    fontSize: 16, 
    color: "black"
  },
  recAuthorText: {
    fontSize: 14, 
    color: "#666" 
  },
  authorText: {
    fontSize: 14,
    color: "black"
  },
});

export default styles;
  