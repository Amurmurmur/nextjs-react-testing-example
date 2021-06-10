import useSWR from 'swr'
import { fetcher } from '../../lib/helpers'
import { useRouter } from 'next/router'


const Todo = (props) => {

    const router = useRouter()
    const { todoId } = router.query
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/' + todoId, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            <h1>Single ToDo</h1>
            <p>Todo #{data.id} UserId #{data.userId} Title:{data.title} Completed: {data.completed.toString()}</p>
        </div>
    )
}

export default Todo