import {StyleSheet} from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";
const AppFormField = ({name, width, ...otherProps}) => {
	const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChange={handleChange(name)}
				width={width}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormField;

const styles = StyleSheet.create({
	
});
