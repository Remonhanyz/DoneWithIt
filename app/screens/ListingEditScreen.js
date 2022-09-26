import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "Furniture",
		value: 1
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "Cars",
		value: 2
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "Cameras",
		value: 3
	},
	{
		backgroundColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4
	},
	{
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5
	},
	{
		backgroundColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6
	},
	{
		backgroundColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7
	},
	{
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8
	},
	{
		backgroundColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9
	}
];

function ListingEditScreen() {
	const location = useLocation();
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing) => {
		setUploadVisible(true);
		console.log("done 1");
		const result = await listingsApi.addListing(
			{ ...listing, location }
			,
			(progress) => {
				console.log("done 2");

				// setTimeout(() =>, 100)
				setProgress(progress)
				console.log("done 3");
			}
		);
		console.log("done 4");
		setUploadVisible(false);
		console.log("done 5");

		if (!result.ok) {
			return alert("couldn't save the listing.");
		}
		console.log("done 6");

		alert("Success");
	};
	return (
		<SafeAreaView style={styles.container}>
			<UploadScreen progress={progress} visible={uploadVisible} />
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: []
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />
				<FormField maxLength={255} name="title" placeholder="Title" />
				<FormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<Picker
					items={categories}
					name="category"
					placeholder="Category"
					numOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					width="50%"
				/>
				<FormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</Form>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
});
export default ListingEditScreen;
