import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";

const ListItem = ({title, subTitle, image, onPress, rightSwipeActions , IconComponent}) => {
	return (
		<GestureHandlerRootView>
			<Swipeable
				renderRightActions={rightSwipeActions}
				leftThreshold={10000}
			>
				<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
					<View style={styles.container}>
						{IconComponent}
						{image && <Image source={image} style={styles.image} />}
						<View style={styles.detailsContainer}>
							<AppText style={styles.title}>{title}</AppText>
							{subTitle &&<AppText style={styles.subTitle}>{subTitle}</AppText>}
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	title: {
		fontWeight: "bold"
	},
	subTitle: {
		color: colors.medium
	},
	detailsContainer: {
		justifyContent: 'center',
		marginLeft: 10
	}
});
