import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/ProfileMain/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
    // console.log(props.state.newsPage)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/Profile" render={() => {
                    return (
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />)
                }}
                />
                <Route path="/Dialogs" render={() => {
                    return (
                        <Dialogs
                            newPostText={props.state.messagesPage.newPostText}
                            messagesPage={props.state.messagesPage}
                            dispatch={props.dispatch}/>

                    )
                }}
                />

            </div>

        </div>

    );

}

export default App;
