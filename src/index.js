import reportWebVitals from './reportWebVitals';
import {renderEntireThee} from "./render";
import state from "./redux/state";

// import state from './redux/state'
// import {addPost} from './redux/state'
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
renderEntireThee(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

