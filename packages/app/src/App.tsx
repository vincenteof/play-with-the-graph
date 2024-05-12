import { useQuery } from '@apollo/client'
import './App.css'

import { gql } from '../src/__generated__/gql'

function App() {
  const { loading, data } = useQuery(
    gql(/* Graphql */ `
    query GetTransfers {
      transfers {
        id
        from
        to
        value
        blockNumber
        blockTimestamp
        transactionHash
      }
    }
  `)
  )
  return (
    <>
      <h2>My first Apollo app 😤</h2>
      {loading ? (
        'loading...'
      ) : (
        <ul>
          {data?.transfers?.map((x) => (
            <li key={x.id}>
              from: {x.from}, to: {x.to}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
