import {useObject} from "merced-react-hooks"

function Home(props){

    const [state, setKey] = useObject({count: 1})

    return <div>
        <h1>{state.count}</h1>
        <button onClick={() => setKey("count", state.count + 1)}>Add</button>
        <button onClick={() => setKey("count", state.count - 1)}>Add</button>
    </div>
}

export default Home