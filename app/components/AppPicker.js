import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Modal,
	FlatList
} from "react-native";
import React, {useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import {SafeAreaView} from "react-native-safe-area-context";
import AppButton from "./AppButton";

const AppPicker = ({
	icon,
	numOfColumns = 1,
	placeholder,
	onSelectItem,
	selectedItem,
	items,
	PickerItemComponent = PickerItem,
	width = "100%"
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, {width: width}]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal
				visible={modalVisible}
				animationType="slide"
				onRequestClose={() => setModalVisible(false)}
				presentationStyle="pageSheet"
			>
				<SafeAreaView>
					<AppButton
						title="Close"
						borderRadius={0}
						onPress={() => setModalVisible(false)}
						style={styles.close}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numOfColumns}
						renderItem={({item}) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</SafeAreaView>
			</Modal>
		</>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10
	},
	icon: {
		marginRight: 10
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1
	},
	text: {
		flex: 1
	},
	close: {
		backgroundColor: defaultStyles.colors.danger
	}
});
