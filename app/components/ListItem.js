import {Image, StyleSheet, TouchableHighlight, View} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ListItem = ({
	title,
	subTitle,
	image,
	onPress,
	rightSwipeActions,
	IconComponent
}) => {
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
							<AppText style={styles.title} numberOfLines={1}>
								{title}
							</AppText>
							{subTitle && (
								<AppText style={styles.subTitle} numberOfLines={2}>
									{subTitle}
								</AppText>
							)}
						</View>
						<MaterialCommunityIcons
							name="chevron-right"
							size={25}
							color={colors.medium}
						/>
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
		backgroundColor: colors.white,
		alignItems: 'center'
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
		justifyContent: "center",
		marginLeft: 10,
		flex: 1,

	}
});
