// import {useState} from "react";
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	Platform,
// 	StatusBar,
// 	// TouchableOpacity,
// 	Pressable,
// 	Image,
// 	Button,
// 	Alert
// 	// Dimensions
// } from "react-native";
// import {
// 	useDimensions,
// 	useDeviceOrientation
// } from "@react-native-community/hooks";
// import {
// 	TouchableNativeFeedback,
// 	TouchableHighlight,
// 	TouchableOpacity,
// 	TouchableWithoutFeedback
// } from "react-native-gesture-handler";
// import {SafeAreaView} from "react-native-safe-area-context";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ImageScreen from "./app/screens/ImageScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import {NavigationContainer} from '@react-navigation/native'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from "./app/navigation/AppNavigator";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-Permissions";

export default function App() {
	const requestPermission = async () => {
		// const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
		const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
		if (!result.granted) {
			alert('You need to enable permission to access the library.')
		}
	}
	useEffect(() => {
		requestPermission()
	}, [])
	// const handlePress = () => console.log("text clicked");
	// const [width, setWidth] = useState(0);
	// const [height, setHeight] = useState(0);
	// const {landscape} = useDeviceOrientation();

	// Image.getSize("https://picsum.photos/id/237/200/300", (w, h) => {
	// 	setWidth(w);
	// 	setHeight(h);
	// });
	return (
		<NavigationContainer theme={navigationTheme}>
			{/* <AuthNavigator /> */}
			<AppNavigator />
		</NavigationContainer>
		// <WelcomeScreen />
		// <MyAccountScreen />
		// <ListingDetailsScreen />
		// <ListingsScreen />
		// <ImageScreen />
		// <MessagesScreen />

		// <SafeAreaView style={[styles.container]}>
		// 	<Text numberOfLines={1} onPress={() => handlePress()}>
		// 		Open up App.js toooo start working on your appppp!
		// 	</Text>
		// 	{/* <Image source={require("./assets/icon.png")} /> */}
		// 	<TouchableNativeFeedback
		// 		// unstable_pressDelay={1000}
		// 		// android_ripple={{ color: 'red'}}
		// 		activeOpacity={0.4}
		// 		// delayPressIn={1000}
		// 		useNativeAnimations={true}
		// 		onPress={() => {
		// 			console.log("image tabbed");
		// 		}}
		// 	>
		// 		<Text style={{height: landscape ? "30%" : "50%"}}>
		// 			rereerrerwwerwr
		// 		</Text>
		// 		<Image
		// 			// blurRadius={5}
		// 			resizeMod="cover"
		// 			fadeDuration={500}
		// 			// loadingIndicatorSource={}
		// 			source={{
		// 				uri: "https://picsum.photos/id/237/200/300",
		// 				width: width,
		// 				height: height
		// 			}}
		// 		/>
		// 	</TouchableNativeFeedback>
		// 	<Button
		// 		title="click me"
		// 		onPress={() => {
		// 			Alert.alert("hi", "red", [
		// 				{text: "yes", onPress: () => {}},
		// 				{text: "no"}
		// 			]);
		// 		}}
		// 	/>
		// </SafeAreaView>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "brown",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		paddingLeft: Platform.OS === "android" ? StatusBar.currentHeight : 0
// 	}
// });
