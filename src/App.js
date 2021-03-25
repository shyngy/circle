import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/ProfileMain/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/Profile" render={()=>{return <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostValue={props.updateNewPostValue}

                    />}}
                    />
                    <Route path="/Dialogs" render={()=>{return(
                        <Dialogs
                            messages={props.state.messagesPage.messages}
                            dialogs={props.state.messagesPage.dialogs} />

                        )}}
                    />
                </div>

            </div>

    );

}

export default App;
