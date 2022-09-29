import {Modal, StyleSheet, Text, View} from "react-native";
import React from "react";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import AnimatedLottieView from "lottie-react-native";

const UploadScreen = ({progress = 0, visible = false, onDone}) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
				) : (
					<AnimatedLottieView
						autoPlay
						loop={false}
						source={require("../assets/animations/done.json")}
						style={styles.animation}
						onAnimationFinish={onDone}
					/>
				)}
			</View>
		</Modal>
	);
};

export default UploadScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
	},
	animation: {
		width: 500
	}
});
