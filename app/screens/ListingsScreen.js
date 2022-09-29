import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingsScreen = ({navigation}) => {
	const getListingsApi = useApi(listingsApi.getListings);

	useEffect(() => {
		getListingsApi.request();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{getListingsApi.error && (
				<View style={{height: "100%"}}>
					<AppText>Couldn't retrieve the listings.</AppText>
					<AppButton title="Try again" onPress={getListingsApi.request} />
				</View>
			)}
			<ActivityIndicator visible={getListingsApi.loading} />
			<FlatList
				data={getListingsApi.data}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({item}) => (
					<Card
						title={item.title}
						subTitle={"$ " + item.price}
						imageUrl={item.images[0].url}
						onPress={() =>
							navigation.navigate(routes.LISTING_DETAILS, item)
						}
						thumnailUrl={item.images[0].thumnailUrl}
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
