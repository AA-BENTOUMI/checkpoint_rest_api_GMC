import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PersonList from "./Pages/PersonList";
import AddPerson from "./Pages/AddPerson";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/personslist" component={PersonList} />
        <Route path={["/addperson", "/editperson/:id"]} component={AddPerson} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
