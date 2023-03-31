import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	card: {
		width: '100%',
		height: '100%'
	}
})

const SCREEN_OPTIONS = {
	headerTitleAlign: 'center',
	cardStyle: styles.card
} as const

export default SCREEN_OPTIONS
