import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
