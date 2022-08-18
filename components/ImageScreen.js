import React from 'react'

const ImageScreen = () => {
  return (
    <div>ImageScreen</div>
  )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "brown",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
});

export default ImageScreen