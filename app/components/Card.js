import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";
import {Image} from "react-native-expo-image-cache";

const Card = ({title, subTitle, imageUrl, onPress, thumnailUrl}) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.8}>
			<View style={styles.card}>
				<Image
					uri={imageUrl}
					tint="light"
					preview={{uri: thumnailUrl}}
					style={styles.image}
				/>
				<View style={styles.detailContainer}>
					<AppText style={styles.title} numberOfLines={1}>
						{title}
					</AppText>
					<AppText style={styles.subTitle} numberOfLines={1}>
						{subTitle}
					</AppText>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden"
	},
	image: {
		width: "100%",
		height: 200
	},
	detailContainer: {
		padding: 20
	},
	title: {
		marginBottom: 7
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold"
	}
});
