import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

export let renderEntireThee = (state) => {
    ReactDOM.render(
         <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}