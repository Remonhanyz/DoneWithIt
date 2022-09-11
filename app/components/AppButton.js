import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	TouchableHighlight
} from "react-native";
import React, {Component} from "react";
import colors from "../config/colors";

const AppButton = ({
	title,
	onPress,
	borderRadius= 25,
	bgColor = "primary",
	textColor = "white"
}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[
				styles.button,
				{backgroundColor: colors[bgColor], borderRadius: borderRadius}
			]}
			onPress={onPress}
		>
			<Text style={[styles.text, {color: colors[textColor]}]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
		marginBottom: 12
	},
	text: {
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold"
	}
});
export default AppButton;