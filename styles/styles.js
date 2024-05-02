import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#BF40BF',
    padding: 10,
    border: "1px solid black",
    borderRadius: 5,
    
  },
  layoutButton: {
    backgroundColor: '#fffff',
    padding: 10,
    border: "1px solid black",
    borderRadius: 5,
    alignItems: 'center'
  },
  layoutButtonText: {
    color: '#000000',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 19,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fcf0e4"
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"#fcf0e4",
    paddingVertical: 30
  },
  animation: {
    height: 210,
    aspectRatio: 1
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
    color: "black",
  },
  preferencesButton: {
    backgroundColor: '#BF40BF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    marginTop:20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsContainer: {
    alignItems: 'center',
  },
});

export default styles;
  