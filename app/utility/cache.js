import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "moment";
const prefix = "cache";

const store = async (key, value) => {
	const item = {
		value,
		timestamp: Date.now()
	};
	try {
		await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};
const isExpired = () => {
	const expiryInMinutes = 5;
	const now = dayjs();
	const storedTime = dayjs(item.timestamp);
	return now.diff(storedTime, "minute") > expiryInMinutes;
};
const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.parse(value);
		if (!item) return null;

		if (isExpired(item)) {
			await AsyncStorage.removeItem(prefix + key);
			return null;
		}
		return item.value;
	} catch (error) {
		console.log(error);
	}
};
export default {
	store,
	get
};
