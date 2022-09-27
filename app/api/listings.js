// import { getListings } from "../../backend/store/listings";
import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListing = (listing, onUploadProgress) => {
	const data = new FormData();
	data.append("title", listing.title);
	data.append("price", listing.price);
	data.append("categoryId", listing.category.value);
	data.append("description", listing.description);

	listing.images.forEach((image, index) =>
		data.append("images", {
			name: "image" + index,
			type: "image/jpeg",
			uri: image
		})
	);
	if (listing.location)
		data.append("location", JSON.stringify(listing.location));
	// console.log('klkkl')
	return apiClient.post(endpoint, data, {
		onUploadProgress: (progress) => {
			// console.log("done 12");
			console.log(progress.loaded / progress.total);
			onUploadProgress(progress.loaded / progress.total);
		}
	});
};

export default {
	addListing,
	getListings
};
