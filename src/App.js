import { Route } from "react-router-dom";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import React from 'react'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileMain/ProfileContainer";
import Login from "./components/Login/Login";


const App = (props) => {
  
  console.log(props);
  const [date, setDate] = React.useState([])
  const dispatchDownDate = (l)=>{
    setDate(l)
  }
  console.log(date);
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar dispatchDownDate={dispatchDownDate} />
      <div className="content">
        <Route path="/profile/:id?" component={ProfileContainer} />
        <Route path="/dialogs" component={DialogsContainer} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/login" component={Login}/>
      </div>

    </div>

  );

};

export default App;
