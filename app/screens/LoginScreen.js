import {Image, StyleSheet, View} from "react-native";
import React from "react";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password")
});

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/logo-red.png")}
				style={styles.logo}
			/>
			<AppForm
				initialValues={{email: "", password: ""}}
				onSubmit={(values) => {}}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					// autoCompleteType="email"
					autoCorrect={false}
					icon="email"
					keyboardType="email-address"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					// autoCompleteType="password"
					icon="lock"
					name="password"
					placeholder="Password"
					// keyboardType="password"
					secureTextEntry={true}
					textContentType="password"
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		margin: 20
		// width: 100
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginVertical: 20
	},
	button: {
		marginVertical: 10
	}
});
