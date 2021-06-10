import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
// import styles from '../styles/Home.module.css'
import { fetcher } from '../lib/helpers'

import { SimpleGrid, Box } from "@chakra-ui/react"
import Card from '../components/Card'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <main>
        <h1>Example Todo App</h1>
      </main>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        {

          data.map((item, i) => <Card key={item.id} title={`Task #${item.id}`} caption={item.title} description={`Task was created by user #${item.userId}`} onButtonClick={() => router.push('/todo/' + item.id)} />)
        }
      </SimpleGrid>

    </div>
  )
}
