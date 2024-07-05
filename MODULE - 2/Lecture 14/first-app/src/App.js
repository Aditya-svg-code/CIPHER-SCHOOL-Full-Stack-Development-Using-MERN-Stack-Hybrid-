import logo from './logo.svg';
import './App.css';
import { Component } from "react";

// function App() {
//   const NAME = "CipherSchools";
//   return (
//     <>
//       <div>
//         <h1 style={{
//           color: "red",
//           textAlign: "center",
//         }}>
//           hello from {NAME}!
//         </h1>
//       </div>

//       <div>
//         <p>This is Cipher Schools</p>
//       </div>
//     </>
//   );
// }

class App extends Component {
  name = "CipherSchools";

  render() {
    return (
      <>
        <div>
          <h1>This is {this.name}</h1>
        </div>

        <div>
          <p>This is paragraph and name is : {this.name}!</p>
        </div>
      </>
    );
  }

}

export default App;
