import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: "100",
		image: require("../assets/jacket.jpg")
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: "1000",
		image: require("../assets/couch.jpg")
	}
];
const ListingScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({item}) => (
					<Card title={item.title} subTitle={"$ " + item.price} image={item.image} />
				)}
			/>
		</SafeAreaView>
	);
};

export default ListingScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		height: "100%",
		padding: 20
	}
});
