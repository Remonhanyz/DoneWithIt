import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

const ListingsScreen = ({navigation}) => {
	const [listings, setListings] = useState([]);
	const loadListings = async () => {
		const response = listingsApi.getListings();
		setListings(response.data);
	};

	useEffect(() => {
		loadListings()
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({item}) => (
					<Card
						title={item.title}
						subTitle={"$ " + item.price}
						image={item.image}
						onPress={() =>
							navigation.navigate(routes.LISTING_DETAILS, item)
						}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default ListingsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		height: "100%",
		padding: 20
	}
});
