import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const NewListingButton = ({onPress}) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					color={colors.white}
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        height: 80,
        width: 80,
        bottom: 32,
    }
})