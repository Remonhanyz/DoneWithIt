import {StyleSheet, Text, View, FlatList} from "react-native";
import React, {useState} from "react";
import {} from "react-native-gesture-handler";
import ListItem from "../components/ListItem";
import {SafeAreaView} from "react-native-safe-area-context";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg")
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/mosh.jpg")
	}
];
export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		const newMessages = messages.filter((m) => m.id !== message.id);
		setMessages(newMessages);
	};

	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<FlatList
					data={messages}
					keyExtractor={(message) => message.id.toString()}
					renderItem={({item}) => (
						<ListItem
							title={item.title}
							subTitle={item.description}
							image={item.image}
							onPress={() => {}}
							rightSwipeActions={() => (
								<ListItemDeleteAction
									onPress={() => handleDelete(item)}
								/>
							)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
					refreshing={refreshing}
					onRefresh={() => {
						setMessages([
							{
								id: 2,
								title: "T2",
								description: "D2",
								image: require("../assets/mosh.jpg")
							}
						]);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
