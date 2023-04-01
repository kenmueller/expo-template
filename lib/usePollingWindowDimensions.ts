import equal from 'deep-equal'
import { useEffect, useState } from 'react'
import { Dimensions, useWindowDimensions } from 'react-native'

import _Dimensions from './dimensions'
import useNewEffect from './useNewEffect'

const POLL_INTERVAL = 500

/** Also polls window dimensions. */
const usePollingWindowDimensions = () => {
	const [dimensions, setDimensions] = useState<_Dimensions>(
		Dimensions.get('window')
	)

	const _dimensions = useWindowDimensions()

	// Grab dimensions from useWindowDimensions
	useNewEffect(() => {
		setDimensions(_dimensions)
	}, [_dimensions, setDimensions])

	// Poll dimensions
	useEffect(() => {
		const interval = setInterval(() => {
			const newDimensions = Dimensions.get('window')

			setDimensions(dimensions =>
				equal(dimensions, newDimensions, { strict: true })
					? dimensions
					: newDimensions
			)
		}, POLL_INTERVAL)

		return () => {
			clearInterval(interval)
		}
	}, [setDimensions])

	return dimensions
}

export default usePollingWindowDimensions
