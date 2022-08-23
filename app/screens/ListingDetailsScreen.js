import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({route}) => {
	const listing = route.params;
	return (
		<View>
			<Image source={listing.image} style={styles.image} />
			<View style={styles.detailContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.subTitle}>$ {listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/mosh.jpg")}
						title="Mosh Hamedani"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300
	},
	detailContainer: {
		padding: 20
	},
	title: {
		marginBottom: 7,
		fontSize: 24,
		// fontWeight: 00
		fontWeight: "bold"
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20
	},
	userContainer: {
		marginVertical: 40
	}
});
