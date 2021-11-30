import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [])
  return (
    <div>
      <div className="flex h-screen bg-blue-200 text-3xl text-green-700">
        <h1 className="m-auto"> <span className="font-semibold"> OOPS...404 Not Found!</span> Halaman tidak diketahui !! </h1>
      </div>
    </div>

  )
}

