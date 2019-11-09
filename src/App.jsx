import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import rootSaga from "./sagas/rootSaga";
import Auth from "./utils/APIUtils/auth";
import configureStore from "./store/configureStore";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListContainer from "./components/Containers/ListContainer";

Auth();

const store = configureStore();
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ListContainer />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
