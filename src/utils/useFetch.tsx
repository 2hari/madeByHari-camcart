import { useState, useEffect } from "react"
import { request } from "./helpers"

const useFetch = (url: string) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await request.get(url)
        setData(res.data.data)
      } catch (error) {
        setError(error as Error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  console.log(data)

  return { data, isLoading, error }
}

export default useFetch
