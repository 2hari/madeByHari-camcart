import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { FiSearch } from "react-icons/fi"

const SearchForm = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
    // clear timeout event
    return () => clearTimeout(timeout)
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.length > 0) {
      router.push(`/search?query=${searchTerm}`)
      setSearchTerm("")
    } else {
      // if input is empty set animation to true
      setIsAnimating(true)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
        type="text"
        placeholder="Search for a product..."
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  )
}

export default SearchForm
