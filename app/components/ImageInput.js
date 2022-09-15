import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from "react-native";
import React, { useEffect } from "react";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({imageUri, onChangeImage}) => {
	const handlePress = async () => {
		if (!imageUri) selectImage();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{text: "Yes", onPress: () => onChangeImage(null)},
				{text: "No"}
			]);
	};
	const requestPermission = async () => {
		const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!result.granted) {
			alert("You need to enable permission to access the library.");
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5
			});
			console.log('resulr', result['uri'])
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.log("Error reading an image", error);
		}
	};
	useEffect(() => {
		requestPermission();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.medium}
					/>
				)}
				{imageUri["uri"]}
				{imageUri && (
					<Image
						source={{uri: `${imageUri["uri"]}`}}
						style={styles.image}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ImageInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		width: 100,
		overflow: "hidden"
	},
	image: {
		width: "100%",
		height: "100%"
	}
});
