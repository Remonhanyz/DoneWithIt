import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import colors from "../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons'
const ImageScreen = () => {
	return (
		<SafeAreaView style={styles.bg}>
			<View style={styles.topBar}>
				<MaterialCommunityIcons
					style={styles.closeIcon}
					name="close"
					color="white"
					size={25}
				/>
				<MaterialCommunityIcons
					style={styles.deleteIcon}
					name="trash-can-outline"
					color="white"
					size={25}
				/>
			</View>
			<View style={styles.body}>
				<Image
					resizeMode="contain"
					source={require("../assets/chair.jpg")}
					style={styles.image}
				/>
			</View>
			<View style={styles.section}></View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	bg: {
		flex: 1,
		backgroundColor: colors.black,
		paddingTop: 20
		// paddingLeft: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	topBar: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	body: {
		flex: 12,
		justifyContent: "space-around"
	},
	closeIcon: {
		marginLeft: 30,
		alignItems: "center"
	},
	deleteIcon: {
		marginRight: 30
	},
	image: {
		width: "100%",
		height: "100%"
	},
	section: {
		flex: 1
	}
});

export default ImageScreen;
