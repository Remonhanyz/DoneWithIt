import React, {useState} from "react";
import {ImageBackground, StyleSheet, View, Text, Image} from "react-native";
import {
	useDimensions,
	useDeviceOrientation
} from "@react-native-community/hooks";
import {SafeAreaView} from "react-native-safe-area-context";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
	return (
		<ImageBackground
			blurRadius={10}
			source={require("../assets/background.jpg")}
			resizeMode="cover"
			style={styles.bgImage}
		>
			<SafeAreaView style={styles.bgImage}>
				<Image
					source={require("../assets/logo-red.png")}
					style={styles.logo}
				/>
				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
				<View style={styles.bottomForm}>
					<View style={styles.buttonsContainer}>
						<AppButton title="Login" onPress={() => {}} />
						<AppButton
							title="Register"
							onPress={() => {}}
							bgColor="secondary"
						/>
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start"
	},
	logo: {
		width: 100,
		height: 100,
		marginTop: 50
	},
	bottomForm: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end"
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: "column",
		height: 170,
		padding: 20
	},
	tagLine: {
		fontSize: 20,
		fontWeight: "600",
		paddingVertical: 20
	}
});
export default WelcomeScreen;
