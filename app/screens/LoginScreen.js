import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import AppTextInput from "../components/AppTextInput";

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/logo-red.png")}
				style={styles.logo}
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCompleteType="email"
				autoCorrect={false}
				textContentType="emailAddress"
				keyboardType="email-address"
				placeholder="Email"
				icon="email"
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				autoCompleteType="password"
				secureTextEntry={true}
				textContentType="password"
				keyboardType="password"
				placeholder="Password"
				icon="lock"
			/>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginVertical: 20
		// marginBottom: 20
	}
});
