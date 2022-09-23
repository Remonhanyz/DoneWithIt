import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from '../components/AppText'
import AppButton from "../components/AppButton";
const ListingsScreen = ({navigation}) => {
	const [ listings, setListings ] = useState([]);
	const [ error, setError ] = useState(false);
	
	const loadListings = async () => {
		const response = await listingsApi.getListings;
		if(!response.ok) {
			return setError(true)
		}
		setListings(await response.data);
	};

	useEffect(() => {
		loadListings()
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{error && (
				<>
					<AppText>Couldn't retrieve the listings.</AppText>
					<AppButton title="Try again" onPress={loadListings} />
				</>
			)}
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({item}) => (
					<Card
						title={item.title}
						subTitle={"$ " + item.price}
						imageUrl={item.images[0].url}
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
