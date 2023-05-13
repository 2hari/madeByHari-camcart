import qs from "qs"
import { useState, useEffect, useMemo } from "react"
import { request } from "./helpers"

const useFetch = (path: string, urlParamsObject?: object) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const requestUrl = useMemo(
    () =>
      `${path}${urlParamsObject ? `?${qs.stringify(urlParamsObject)}` : ""}`,
    [urlParamsObject, path]
  )

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await request.get(requestUrl)
        setData(res.data.data)
      } catch (error) {
        setError(error as Error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [requestUrl])

  return { data, isLoading, error }
}

export default useFetch
