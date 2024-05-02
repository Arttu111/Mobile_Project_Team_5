import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

const FullscreenCover = ({ route }) => {
	const {cover_img, title} = route.params.bookCover;
	return (
		<Image source={{ uri: cover_img }} style={{ width: '100%', height: '100%' }} />
	);
}

export default FullscreenCover;