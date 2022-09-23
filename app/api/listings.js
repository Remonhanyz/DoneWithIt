// import { getListings } from "../../backend/store/listings";
import apiClient from "./client";

const endpoint = "/listings";

const getListings = apiClient.get(endpoint);
// getListings.then(console.log(getListings));
// console.log(getListings);

export default {
    getListings
}