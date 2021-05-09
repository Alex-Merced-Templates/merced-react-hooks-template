import { useMap, useArray, Loop } from "merced-react-hooks";

function Home(props) {
  const [state, setKey] = useMap({ count: 1 });
  const [ arr, setArr] = useArray([1,2,3,4,5])


  return (
    <div>
      <h1>{state.get("count")}</h1>
      <button onClick={() => setKey("count", state.get("count") + 1)}>
        Add
      </button>
      <button onClick={() => setKey("count", state.get("count") - 1)}>
        Add
      </button>
      <Loop withthis={arr} dothat={(item) => <h2>{item}</h2>}/>
      <button onClick={() => setArr.push(arr.length+1)}>
        Add
      </button>
    </div>
  );
}

export default Home;
