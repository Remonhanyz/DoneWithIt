import {StyleSheet, Text, View} from "react-native";
import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import {useFormikContext} from "formik";

const FormImagePicker = ({name}) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();


	const handleAdd = (uri) => {
		console.log('1')
		setFieldValue(name, [ ...values[ name ], uri ]);
		console.log("2");
		
	};

	const handleRemove = (uri) => {
		setFieldValue(
			name,
			values[name].filter((imageUri) => imageUri !== uri)
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={values[name]}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default FormImagePicker;

const styles = StyleSheet.create({});
