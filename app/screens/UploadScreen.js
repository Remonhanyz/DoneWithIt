import {Modal, StyleSheet, Text, View} from "react-native";
import React from "react";
import AppText from "../components/AppText";

const UploadScreen = ({progress=0, visible=false}) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				<AppText>{progress*100}</AppText>
			</View>
		</Modal>
	);
};

export default UploadScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // flex: '1',
        justifyContent: 'center'
    }
});
