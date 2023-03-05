import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const App = () => (
	<View style={styles.root}>
		<StatusBar style="dark" />
		<Text>Open up App.js to start working on your app!</Text>
	</View>
)

const styles = StyleSheet.create({
	root: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}
})

export default App
