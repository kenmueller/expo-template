import { useState, useEffect } from 'react'
import { Keyboard, Platform } from 'react-native'

import useNewEffect from './useNewEffect'

const useKeyboard = ({
	showEvent = 'keyboardDidShow',
	hideEvent = 'keyboardDidHide',
	onChange
}: {
	showEvent?: 'keyboardWillShow' | 'keyboardDidShow'
	hideEvent?: 'keyboardWillHide' | 'keyboardDidHide'
	onChange?: (isShowing: boolean) => void
} = {}) => {
	const [isShowing, setIsShowing] = useState(false)

	useEffect(() => {
		const showSubscription = Keyboard.addListener(
			Platform.OS === 'android' ? 'keyboardDidShow' : showEvent,
			() => setIsShowing(true)
		)

		const hideSubscription = Keyboard.addListener(
			Platform.OS === 'android' ? 'keyboardDidHide' : hideEvent,
			() => setIsShowing(false)
		)

		return () => {
			showSubscription.remove()
			hideSubscription.remove()
		}
	}, [showEvent, hideEvent, setIsShowing])

	useNewEffect(() => {
		onChange?.(isShowing)
	}, [onChange, isShowing])

	return isShowing
}

export default useKeyboard
