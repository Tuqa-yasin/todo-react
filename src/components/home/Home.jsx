import { Component, useEffect, useState } from "react";
import Button from "../elements/butoon/Butoon";
import { v4 as uuidv4 } from "uuid";
import ItemList from "../elements/itemList/ItemList";
import "./style.css";
import Data  from "../data/Data";
import axios from "axios";

// functional method

function Home () 
{ 
    const [value, setValue] = useState('')
    const [list, setList] = useState([])
    const [error, setError] = useState('')

    const fetchData = async () =>
    {
      try {
                const res = await axios.get(
                  "https://jsonplaceholder.typicode.com/todos"
                )
               setList( res.data.splice(0,30));
         } 
     catch (e)
      {
                console.log(e);
      }
    };
       
    useEffect(() => {
        fetchData()
        console.log("error")
    }, [])
    
        return (
              <div className="ineer-container">
                <h1>To Do List</h1>
                <section className="input-section">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Enter a new task"
                      className="task-input"
                      onChange={(event) => {
                        setValue(event.target.value );
                      }}
                      value={value}
                    ></input>
                        {error ? <span>{error}</span> :null}
                    </div>
                    <Button
                      className="btn"
                      title="Add"
                      handleClick={() => {
                        if (value) {
                          const updatedArr = [
                            { id: uuidv4(), title: value },
                            ...list ];
                            setValue('')
                            setError('')
                            setList(newData)        
                        } 
                        else {
                         setError({                    
                            error: "Plase enter task name " });
                           }
                      }}
                    ></Button>
                  </section>
                  <section className="item-list">
                    {
                    list?.length ? 
                    (
                      list.map((item) => (
                        <ItemList
                          name={item.title}
                          key={item.id}
                          handleDelete={() => {
                            const filteredItems = list.filter(
                              (items) => items.id != item.id
                            );
                            setList({
                               filteredItems,
                              });
                          }}
                        />
                      ))) : 
                      (<span>Loading ...</span>)
                    }
                </section>
            </div>
        )
    
}

export default Home



//
// import "./style.css";
// import { Data } from "../../data/Data";
// import axios from "axios";
// // functional method
// function Home (){
//   // react hooks
//   const[state,setState]=useState({
//     value: "",
//     list: [],
//   });

// /*class Home extends Component {
//   state = {
//     value: "",
//     list: [],
//     error: "",
//   };*/

//  // componentDidMount() {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos"
//         );
//         console.log(res);
//        /* this.*/setState({
//          ...state,
//           list: res.data.splice(0,30),
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     };

//      /*
//     fetchData();
//   } */
//     useEffect(()=>{
//       fetchData();
//     },[]);
   
   
//  // render() {*/
//     return (
//       <div className="ineer-container">
//         <h1>To Do List</h1>
//         <section className="input-section">
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Enter a new task"
//               className="task-input"
//               onChange={(event) => {
//                /* this.*/setState({ 
//                  ...state,
//                 value: event.target.value });
//               }}
//               value={/*this.*/state.value}
//             ></input>
//             {/*this.*/state.error ? <span>{/*this.*/state.error}</span> : null}
//           </div>
//           <Button
//             className="btn"
//             title="Add"
//             handleClick={() => {
//               if (/*this.*/state.value) {
//                 const updatedArr = [
//                   { id: uuidv4(), title: /*this.*/state.value },
//                   .../*this.*/state.list,
//                 ];
//                 /*this.*/setState({ 
//                   ...state,
//                   list: updatedArr, value: "", error: "" });
//               } else {
//                 /*this.*/setState({ 
//                   ...state,
//                   error: "Plase enter task name " });
//               }
//             }}
//           ></Button>
//         </section>
//         <section className="item-list">
//           {/*this.*/state.list.length ? (
//             /*this.*/state.list.map((item) => (
//               <ItemList
//                 name={item.title}
//                 key={item.id}
//                 handleDelete={() => {
//                   const filteredItems = /*this.*/state.list.filter(
//                     (items) => items.id != item.id
//                   );
//                   /*this.*/setState({
//                     ...state,
//                     list: filteredItems,
//                   });
//                 }}
//               />
//             ))
//           ) : (
//             <span>Loading .... </span>
//           )}
//         </section>
//       </div>
//     );
//   //}*/
// }

// export default Home;


// import { Component, useEffect, useState } from "react";
// import Button from "../elements/butoon/Butoon";
// import { v4 as uuidv4 } from "uuid";
// import ItemList from "../elements/itemList/ItemList";

// import "./style.css";
// import { Data } from "../../data/Data";
// import axios from "axios";
// // functional method
// function Home (){
//   // react hooks
//   const[state,setState]=useState({
//   // 2  value: "",
//   // 2 list: [],
//   // 2  error:""
//   });
//   //2 
//   const [value,setValue]= useState("");
//   const [list,setList]= useState([]);
//   const [error,setError]= useState("");
// /*class Home extends Component {
//   state = {
//     value: "",
//     list: [],
//     error: "",
//   };*/

//  // componentDidMount() {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos"
//         );
//         console.log(res);
//        /* this.*//* 2 setState */ setList({
//          // 2  ...state,
//           list: res.data.splice(0,30),
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     useEffect(()=>{
//       fetchData();
//     },[]);
//     /*
//     fetchData();
//   }
//   render() {*/
//     return (
//       <div className="ineer-container">
//         <h1>To Do List</h1>
//         <section className="input-section">
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Enter a new task"
//               className="task-input"
//               onChange={(event) => {
//                /* this.*/// 2 setState*/
//                setValue({ 
//                  //2 ...state,
//                 value: event.target.value });
//               }}
//               value={/*this.*//*2 state.*/value}
//             ></input>
//             {/*this.*//* 2 state*/ value.error ? <span>{/*this.*/ /* 2 state*/value.error}</span> : null}
//           </div>
//           <Button
//             className="btn"
//             title="Add"
//             handleClick={() => {
//               if (/*this.*//*2 state. */ value) {
//                 const updatedArr = [
//                   { id: uuidv4(), /*name: /*this.*/ title: /*2 state. */ value },
//                   .../*this.*/ /* 2 state. */ list,
//                 ];
                
//               // 2  /*this.*//*2setState */ setList({ 
//               // 2    // 2 ...state,
//               // 2    list: updatedArr, value: "", error: "" });
//               // 2 } 
//               //2
//               setList({ 
//                   list: updatedArr});
//                   setValue({ 
//                      value: "" });
//                      setError({ 
//                       error: "" });
//                  } 
//               else {
//                 /*this.*/ /* 2 setState */ setError({ 
//                   // 2 ...state,
//                   error: "Plase enter task name " });
//               }
//             }}
//           ></Button>
//         </section>
//         <section className="item-list">
//           {/*this.*//* 2state. */list.length ? (
//             /*this.*/ /* 2 state. */list.map((item) => (
//               <ItemList
//                 name={item.title}
//                 key={item.id}
//                 handleDelete={() => {
//                   const filteredItems = /*this.*/ /* 2 state. */ list.filter(
//                     (items) => items.id != item.id
//                   );
//                   /*this.*/ /* 2 setState */ setList({
//                    /* 2 ...state, */
//                     list: filteredItems,
//                   });
//                 }}
//               />
//             ))
//           ) : (
//             <span>Loading .... </span>
//           )}
//         </section>
//       </div>
//     );
//   //}*/
// }

// export default Home;
