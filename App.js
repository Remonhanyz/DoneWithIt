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
import WelocomeScreen from "./components/WelocomeScreen";

export default function App() {
	// const handlePress = () => console.log("text clicked");
	// const [width, setWidth] = useState(0);
	// const [height, setHeight] = useState(0);
	// const {landscape} = useDeviceOrientation();

	// Image.getSize("https://picsum.photos/id/237/200/300", (w, h) => {
	// 	setWidth(w);
	// 	setHeight(h);
	// });
	return (
			<WelocomeScreen />

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
		// 		<Text>rereerrerwwerwr</Text>
		// 		<Text>rereerrerwwerwr</Text>
		// 		<Text>rereerrerwwerwr</Text>
		// 		<Text>rereerrerwwerwr</Text>
		// 		<Text>rereerrerwwerwr</Text>
		// 		<Text>rereerrerwwerwr</Text>
		// 		<Text>rereerrerwwerwr</Text>
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
