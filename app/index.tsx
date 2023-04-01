import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

import theme from '@/lib/theme'

const HomeScreen = () => (
	<View style={styles.root}>
		<Stack.Screen
			options={{
				title: 'expo-template',
				headerTitle: 'expo-template'
			}}
		/>
		<Text>expo-template</Text>
	</View>
)

const styles = StyleSheet.create({
	root: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: theme.white
	}
})

export default HomeScreen
