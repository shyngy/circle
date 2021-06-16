import { Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/ProfileMain/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
  // console.log(props.state.newsPage)
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
      </div>

    </div>

  );

}

export default App;
