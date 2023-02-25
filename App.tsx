import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => (
	<GestureHandlerRootView style={styles.container}>
		<StatusBar style="dark" />
		<Text>Open up App.js to start working on your app!</Text>
	</GestureHandlerRootView>
)

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}
})

export default App
