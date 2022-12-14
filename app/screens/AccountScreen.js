import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary
		}
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary
		},
		targetScreen: routes.MESSAGES
	}
];

const AccountScreen = ({navigation}) => {
	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Mosh Hamedani"
					subTitle="programmingwithmosh@gmail.com"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({item}) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									size={50}
									backgroundColor={item.icon.backgroundColor}
									iconColor="white"
								/>
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					title="Log Out"
					IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
				/>
			</View>
		</View>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		marginVertical: 20
	},
	screen: {
		backgroundColor: colors.light,
		flex: 1
	}
});
