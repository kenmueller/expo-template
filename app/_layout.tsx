import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import alertError from '@/lib/error/alert'
import SCREEN_OPTIONS from '@/lib/screen/options'
import unlockOrientationIfTablet from '@/lib/unlockOrientationIfTablet'

const RootLayout = () => {
	useEffect(() => {
		unlockOrientationIfTablet().catch(alertError)
	}, [])

	return (
		<SafeAreaProvider>
			<StatusBar style="dark" />
			<Stack screenOptions={SCREEN_OPTIONS} />
		</SafeAreaProvider>
	)
}

export default RootLayout
