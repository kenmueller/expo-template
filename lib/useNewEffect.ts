import { useEffect, useRef } from 'react'

/** Calls the effect only on change. */
const useNewEffect: typeof useEffect = (effect, deps) => {
	const isMounted = useRef(false)

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true
			return
		}

		return effect()
	}, deps)
}

export default useNewEffect
