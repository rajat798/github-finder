// import logo from './logo.svg';
import React from 'react';
import Navbar from './component/layout/Navbar'
// import UserItem from './component/users/UserItem'
import Users from './component/users/Users'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  // render(){
  //   const name = 'Rajat';
  //   const loading = false;
  //   const showName = false;
  
  //   return (
  //     // <div className="App">
  //     // React.Fragment -- Ghost Element used to hide
  //     <React.Fragment> 
  //       {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name.toUpperCase()}</h1>}
  //       {/* <h1>Hello from React</h1> */}
  //     </React.Fragment>
  //     // </div>
  //   );
  // };

  state = {
    users : [],
    loading : false
  }

  async componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    this.setState({ loading : true })

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    console.log(res.data)

    this.setState({ users : res.data, loading : false})
  }

  render(){

    // const numbers = [1,2,3,4] will through an error failed prop type as type is string
    return(
      <div className = "App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading = {this.state.loading} users = {this.state.users}/>
        </div>
        
      </div>
    )
  }
}

export default App;
