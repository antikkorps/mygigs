import { useParams } from "react-router-dom"

const ConcertsByCity = () => {
  const { city } = useParams<{ city: string }>()

  return (
    <div>
      <h1>Concerts in {city}</h1>
      {/* Add your component logic here */}
    </div>
  )
}

export default ConcertsByCity
