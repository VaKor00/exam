import { use, useState, useEffect} from "react";
import axios from "../../axios.js";

const UseEffect = () => {

    // кошачьи факты

    // const getFacts = () =>
    // {
    //     let url = '/?lang=rus';
    //     if(counter > 0) {
    //         url += `&count=${counter}`
    //     }
    //     axios.get(url).then(res => 
    //     {
    //         console.log(res.data.data)
    //         setFacts(res.data.data)
    //     });
    // }

    // const getFactsId = () =>
    // {
    //     let url = '/?lang=rus';
    //     if(counter > 0) {
    //         url += `&id=${counter}`
    //     }
    //     axios.get(url).then(res => 
    //     {
    //         console.log(res.data.data)
    //         setFacts(res.data.data)
    //     });
    // }

    // const renderFactList = (fact) => {
    //     return facts.map((fact, index) => {
    //                 return (
    //                 <li key={index}>{fact}</li>
    //             )
    //         })
    // }

    // const [facts, setFacts] = useState([]);

    // счётчик

    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        document.title=`clicked ${counter} times`
    },[counter])

    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState({});
    const [list, setList] = useState(null);

    const onChange = (e) => {
        setSearchText(e.target.value);
    }    

    const search = () => {
        let url = '/search.json?q='
        let text = searchText;
        if(searchText.length > 0) {
            text.split(' ').join('+');
            url += text;
            
            axios.get(url).then(res=>{
            setResult(res.data)
            console.log(res.data)
            })
        }
    }

    useEffect(()=> {
        if(result && result.docs) {
            let list = result.docs.map(item => {
        return (
            <li key ={item.key}>
                <div>
                    <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}/>
                </div>
                <div>
                    <span>Author {item.author_name}</span>
                    <br></br>
                    <span>Book title {item.title}</span>
                </div>
            </li>
            )
        })
        

    setList(list)}
    }, [result])

    return (
        <div>
            {/* <h1>
                UseEffect hook
            </h1>
            
            <button onClick={getFacts}>get cat facts</button>
            <br></br>
            <button onClick={getFactsId}>get cat facts by id</button>
            <ul>
            {
                facts.length > 0 ?
                renderFactList(facts) : null
            }
            </ul> */}
            <h2>Counter: {counter}</h2>
            <button onClick={()=>setCounter(counter-1)}>-</button>&nbsp;
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <br></br>
            <label>
                search book
                <input onChange={onChange}/>
                <button onClick={search}>search</button>
            </label>
            <ul>
            
                {list}
            
            </ul>

        </div>
    )
}
export default UseEffect;