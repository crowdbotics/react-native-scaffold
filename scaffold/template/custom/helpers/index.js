import { useState, useCallback, useEffect } from "react"

/**
 * Get the layout values for the current component, and the callback for updating it.
 *
 * @function
 * @returns {Array.<Object>}
 */
export function useComponentLayout() {
  const [layout, setLayout] = useState({})

  const onLayout = useCallback(event => {
    setLayout(event.nativeEvent.layout)
  }, [])

  return [layout, onLayout]
}

/**
 * Use media queries via the matchMedia Web API. Web only.
 *
 * @function
 * @param {string} query
 * @returns {boolean}
 */
export const useMatchMedia = query => {
  if (!window) throw new Error("useMatchMedia can only be used on web")
  const mediaMatch = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = e => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  }, [])

  return matches
}
