import { gql } from '@apollo/client'
import { getClient } from './apollo-client'
import { type DataStructure } from '@/types'

export async function queryRSC() {
  const { data }: DataStructure = await getClient().query({
    query: gql`
      query {
        characters(page: 1, filter: { name: "rick" }) {
          results {
            id
            name
            image
          }
        }
      }
    `
  })

  return data.characters.results
}
