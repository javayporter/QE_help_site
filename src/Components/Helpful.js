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

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SquadPages.css";
import ReactPlayer from "react-player";

const board_link =
  "https://angieslist.atlassian.net/secure/RapidBoard.jspa?rapidView=428";
class HelpPage extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            width: "100%",
            background:
              "url(https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/94/3b/44/943b4407-5cfd-9922-8174-06708c747611/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png) center / cover",
            margin: "auto",
            opacity: "90%",
          }}
          className="newer-style"
        >
          <Container>
            <Row>
              <Col col={6}>
                <div className="test"></div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="page-container-div">
          <Grid>
            <Cell col={12}>
              <h4>Walkthrough Video: </h4>
              <p>
                The video below is a walkthrough of the help center. If you need
                asistance locating a page or would like to know about the site's
                capabilities, this video will help.
              </p>
              <ReactPlayer url="https://vimeo.com/591724215" />
            </Cell>

            {/* <Cell col={6}>
              <h4>
                <a style={{ color: "black" }} href="/snovapack_processes">
                  Business Management Tools (BMT)
                </a>
              </h4>
              <h5>Procenter App</h5>
              <h5>Offic App</h5>
              <h5>Mobile App</h5>
              <h5>QuickBooks Integration</h5>
            </Cell> */}
          </Grid>
        </div>
      </div>
    );
  }
}

export default HelpPage;
