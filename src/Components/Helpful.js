// import React, { useState, useEffect } from "react";
// import "./Helpful.css";
// import { API } from "aws-amplify";
// import { listTasks } from "../graphql/queries";
// import {
//   createTask as createTaskMutation,
//   deleteTask as deleteTaskMutation,
// } from "../graphql/mutations";
// // import {Modal, Button} from 'react-bootstrap';

// const initialFormState = { name: "", description: "" };

// function Helpful() {
//   const [tasks, setTasks] = useState([]);
//   const [formData, setFormData] = useState(initialFormState);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   async function fetchTasks() {
//     const apiData = await API.graphql({ query: listTasks });
//     setTasks(apiData.data.listTasks.items);
//   }

//   async function createTask() {
//     if (!formData.name || !formData.description) return;
//     await API.graphql({
//       query: createTaskMutation,
//       variables: { input: formData },
//     });
//     setTasks([...tasks, formData]);
//     setFormData(initialFormState);
//   }

//   async function deleteTask({ id }) {
//     const newTasksArray = tasks.filter((task) => task.id !== id);
//     setTasks(newTasksArray);
//     await API.graphql({
//       query: deleteTaskMutation,
//       variables: { input: { id } },
//     });
//   }

//   return (
//     <div className="App">
//       <h1>My Tasks App</h1>
//       <input
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         placeholder="Task name"
//         value={formData.name}
//       />
//       <input
//         onChange={(e) =>
//           setFormData({ ...formData, description: e.target.value })
//         }
//         placeholder="Task description"
//         value={formData.description}
//       />
//       <button onClick={createTask}>Create Task</button>
//       <div style={{ marginBottom: 30 }}>
//         {tasks.map((task) => (
//           <div key={task.id || task.name}>
//             <h2>{task.name}</h2>
//             <p>{task.description}</p>
//             <button onClick={() => deleteTask(task)}>Delete Task</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Helpful;

// // class Helpful extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       newItem: "",
// //       list: [],
// //     };
// //   }

// //   //incorporating local storage
// //   componentDidMount() {
// //     this.hydrateStateWithLocalStorage();

// //     // add event listener to save state to localStorage
// //     // when user leaves/refreshes the page
// //     window.addEventListener(
// //       "beforeunload",
// //       this.saveStateToLocalStorage.bind(this)
// //     );
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener(
// //       "beforeunload",
// //       this.saveStateToLocalStorage.bind(this)
// //     );

// //     // saves if component has a chance to unmount
// //     this.saveStateToLocalStorage();
// //   }

// //   hydrateStateWithLocalStorage() {
// //     // for all items in state
// //     for (let key in this.state) {
// //       // if the key exists in localStorage
// //       if (localStorage.hasOwnProperty(key)) {
// //         // get the key's value from localStorage
// //         let value = localStorage.getItem(key);

// //         // parse the localStorage string and setState
// //         try {
// //           value = JSON.parse(value);
// //           this.setState({ [key]: value });
// //         } catch (e) {
// //           // handle empty string
// //           this.setState({ [key]: value });
// //         }
// //       }
// //     }
// //   }

// //   saveStateToLocalStorage() {
// //     // for every item in React state
// //     for (let key in this.state) {
// //       // save to localStorage
// //       localStorage.setItem(key, JSON.stringify(this.state[key]));
// //     }
// //   }

// //   updateInput(key, value) {
// //     // update react state
// //     this.setState({ [key]: value });
// //   }

// //   addItem() {
// //     // create a new item with unique id
// //     const newItem = {
// //       id: 1 + Math.random(),
// //       value: this.state.newItem.slice(),
// //     };

// //     // copy current list of items
// //     const list = [...this.state.list];

// //     // add the new item to the list
// //     list.push(newItem);

// //     // update state with new list, reset the new item input
// //     this.setState({
// //       list,
// //       newItem: "",
// //     });
// //   }

// //   deleteItem(id) {
// //     // copy current list of items
// //     const list = [...this.state.list];
// //     // filter out the item being deleted
// //     const updatedList = list.filter((item) => item.id !== id);

// //     this.setState({ list: updatedList });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h2 className="app-title">Daily Organizer</h2>

// //         <div className="container list-border">
// //           <div
// //             style={{
// //               padding: 30,
// //               textAlign: "center",
// //               maxWidth: 400,
// //               margin: "auto",
// //             }}
// //           >
// //             Add a task...
// //             <br />
// //             <input
// //               type="text"
// //               placeholder="Type here"
// //               value={this.state.newItem}
// //               onChange={(e) => this.updateInput("newItem", e.target.value)}
// //             />
// //             <button
// //               className="add-btn btn-floating"
// //               onClick={() => this.addItem()}
// //               disabled={!this.state.newItem.length}
// //             >
// //               <i class="material-icons"> + </i>
// //             </button>
// //             <br /> <br />
// //             <ul>
// //               {this.state.list.map((item) => {
// //                 return (
// //                   <li key={item.id}>
// //                     {item.value}
// //                     <button
// //                       className="btn btn-floating"
// //                       onClick={() => this.deleteItem(item.id)}
// //                     >
// //                       <i class="material-icons">X</i>
// //                     </button>
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Helpful;
