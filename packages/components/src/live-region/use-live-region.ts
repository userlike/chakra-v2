import { useEffect, useState } from "react"
import { LiveRegion, LiveRegionOptions } from "./live-region"
import { useEnvironment } from "../env"

export function useLiveRegion(options?: LiveRegionOptions) {
  const { getDocument } = useEnvironment()
  const [liveRegion] = useState(
    () =>
      new LiveRegion({
        parentNode: getDocument().body,
        ...options,
      }),
  )

  useEffect(
    () => () => {
      liveRegion.destroy()
    },
    [liveRegion],
  )

  return liveRegion
}
