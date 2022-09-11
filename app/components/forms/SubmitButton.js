import {StyleSheet, View} from "react-native";
import React from "react";
import {useFormikContext} from "formik";
import AppButton from "../AppButton";

const SubmitButton = ({title}) => {
	const {handleSubmit} = useFormikContext();
	return (
		<View style={styles.button}>
			<AppButton title={title} onPress={handleSubmit} />
		</View>
	);
};

export default SubmitButton;

const styles = StyleSheet.create({});
