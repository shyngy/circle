import { Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileMain/ProfileContainer";


const App = (props) => {
  // console.log(props.state.newsPage)
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route path="/profile/:id?" component={ProfileContainer} />
        <Route path="/dialogs" component={DialogsContainer} />
        <Route path="/users" component={UsersContainer} />
      </div>

    </div>

  );

}

export default App;
