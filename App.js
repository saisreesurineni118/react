// // import logo from './logo.svg';
// // import './App.css';
// // import React from "react";
// // function App() {
// //   let username="deekshitha";
// //   // let ele=React.createElement("div",{className:"App"},
// //   //   React.createElement("h1","null","header")
// //   // )
// //   return (
    
// //     // <div className="App">
// //     //   <h1>Deekshitha</h1>
// //     // </div>
// //     // ele
// //     <div>
// //       <h1></h1>
// //     </div>
// //   );
// // }

// // export default App;

// // import React from "react"
// // import Navbar from './components/Navbar'
// // import Main from './components/Main'
// // import sidebar1 from './components/sidebar1';
// // import sidebar2 from './components/sidebar2'
// // import Footer from './components/Footer'
// // import './global.css'
// // class App extends React.Component{
// //   render(){
// //     return(
// //       <h1>Class Based component</h1>
// //     )
// //   }
// // }
// // export default App;

// //component composition
// //rcc
// //rafc
// // const App = () => {
// //   return (
// //     <div className="app">
// //       <Navbar/>
// //       <Main/>
// //       <div className='sidebar'>
// //           <sidebar1/>
// //           <sidebar2/>
// //       </div>
// //       <Footer/>

// //     </div>
// //   )
// // }
// // export default App

// //props
//  import React, { Component } from 'react'
// //  import CBCPropsEX from "./propsex/CBCPropsEX";
// // import FBCPropEX from './propsex/FBCPropEX';

//  export default class App extends Component {
//   render() {
//    return (
//      <div>
//       {/* <CBCPropsEX
//         username="Sai"
//         age={20}
//         hobby={["playing","eating"]}
//         address={{city:"suryapet",area:"gandhinagar"}}
//         sendFun={function(){alert("hi i am sai")}}
//         /> */}
//         {/* <FBCPropEX
//         username="lohitha"
//         isMarried={true}
//         hobbies={["chatting","eating"]}
//         />
//      </div>
//    )
//   }
// } */}


import React from 'react'
// import CBCStateEX from './StateExample/CBCStateEX'
// import FBCStateEX from './StateExample/FBCStateEX'
// import FunctionalComponent from './components/FunctionalComponent'
// import CBCStateASSIGNMENT from './components/CBCStateASSIGNMENT'
// import MyForm from './MyForm'
// import UseEffectEx from './hooksexample/UseEffectEx'
import RefExample from './hooksexample/RefExample'
export const App = () => {
  return (
    <div>
      {/* <FunctionalComponent clgName='MRU' area='maisammaguda'/> */}

      {/* <FBCStateEX/> */}
      {/* <CBCStateASSIGNMENT/> */}
      {/* <MyForm/> */}
      {/* <UseEffectEx/> */}
      <RefExample/>
    </div>
  )
}
export default App