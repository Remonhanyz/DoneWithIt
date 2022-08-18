import React, {useState} from "react";
import {ImageBackground, StyleSheet, View, Text, Image} from "react-native";
import {
	useDimensions,
	useDeviceOrientation
} from "@react-native-community/hooks";
import {SafeAreaView} from "react-native-safe-area-context";

const WelocomeScreen = () => {
	return (
		<View style={styles.container}>
			{/* <Text>sfdsfsddsdfsfsdfsdfsdfsdfsdfsdf</Text>
        <Text>sfdsfsddsdfsfsdfsdfsdfsdfsdfsdf</Text>
    <Text>sfdsfsddsdfsfsdfsdfsdfsdfsdfsdf</Text> */}
			<ImageBackground
				source={require("../assets/background.jpg")}
				resizeMode="cover"
				style={styles.bgImage}
			>
				<SafeAreaView style={styles.bgImage}>
					<Image
						source={require("../assets/logo-red.png")}
						style={styles.logo}
					/>
					<Text>Sell What You Don't Need</Text>
					<View style={styles.bottomForm}>
						<View style={styles.red}></View>
					</View>
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	bgImage: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	logo: {
		width: 130,
		height: 130,
		marginTop: 50
	},
	bottomForm: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		justifyContent: "flex-end",
		width: 200
	},
	red: {
		backgroundColor: "red",
		width: 200
	}
});
export default WelocomeScreen;
