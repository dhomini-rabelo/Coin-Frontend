import { AxiosInstance } from 'axios'
import { useEffect, useRef, useState } from 'react'

interface hookResponse<DataType> {
  isLoading: boolean
  data: DataType | null
  wasSuccess: boolean | null
}

export function useAPI<DataType>(
  url: string,
  client: AxiosInstance,
  doFetch: boolean = true,
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
) {
  const onRequestingRef = useRef(false)
  const [feedback, setFeedback] = useState<hookResponse<DataType>>({
    isLoading: doFetch,
    data: null,
    wasSuccess: doFetch ? null : true,
  })

  useEffect(() => {
    if (!onRequestingRef.current && doFetch) {
      onRequestingRef.current = true
      client({
        method,
        url,
      })
        .then((response) => {
          console.log('carregando dados: ', url)
          setFeedback({
            isLoading: false,
            data: response.data,
            wasSuccess: true,
          })
          onRequestingRef.current = false
        })
        .catch((error) => {
          console.log('carregando dados: ', url)
          setFeedback({
            isLoading: false,
            data: error.response.data,
            wasSuccess: false,
          })
          onRequestingRef.current = false
        })
    }
  }, [client, url, onRequestingRef, doFetch, method])

  return feedback
}
