import * as Comlink from 'comlink'

import imageWorkerUrl from '../workers/image.worker?worker&url'

export function useImageWorker() {
  const apiRef = useRef()

  useEffect(() => {
    const worker = new Worker(imageWorkerUrl)
    apiRef.current = Comlink.wrap(worker)
    return () => worker.terminate()
  }, [])

  return apiRef
}
