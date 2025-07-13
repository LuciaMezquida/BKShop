import './App.css'
import { gql, useQuery } from '@apollo/client'

const SNOWBOARDS_QUERY = gql`
  query {
    snowboards {
      id
      name
      price
      description
      size
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(SNOWBOARDS_QUERY)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.snowboards.map((snowboard: any) => (
          <li key={snowboard.id}>
            {snowboard.name} - ${snowboard.price} - Size: {snowboard.size}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
