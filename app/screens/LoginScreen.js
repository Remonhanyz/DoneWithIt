import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {Formik} from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";

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
			<Formik
				initialValues={{email: "", password: ""}}
				onSubmit={(values) => {}}
				validationSchema={validationSchema}
			>
				{({handleChange, handleSubmit, errors}) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCompleteType="email"
							autoCorrect={false}
							keyboardType="email-address"
							onChange={handleChange("email")}
							icon="email"
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<AppText style={{color: "red"}}>{errors.email}</AppText>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							autoCompleteType="password"
							keyboardType="password"
							onChange={handleChange("password")}
							icon="lock"
							placeholder="Password"
							secureTextEntry={true}
							textContentType="password"
						/>
						<AppText style={{color: "red"}}>{errors.password}</AppText>
						<View style={styles.button}>
							<AppButton title="Login" onPress={handleSubmit} />
						</View>
					</>
				)}
			</Formik>
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
