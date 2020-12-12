import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import MainContainer from './components/container';
import { Provider } from "react-redux";

import store from "./redux/Store";

function App() {
  return (
    <Provider store={store()}>
     <MainContainer />
    </Provider>
  );
}

export default App;
