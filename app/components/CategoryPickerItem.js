import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({onPress, item}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Icon
					backgroundColor={item.backgroundColor}
					name={item.icon}
					size={80}
				/>
				<AppText style={styles.label}>{item.label}</AppText>
			</TouchableOpacity>
		</View>
	);
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 15,
		alignItems: "center",
		width: "33%"
	},
	label: {
		marginTop: 5,
		textAlign: "center"
	}
});
