import logo from "./logo.svg";
import "./App.css";
import Home from "./componnt/Home/Home";
import Features from "./componnt/OurFeatures/Features";
import Info from "./componnt/Info/Info";
import ProjectBlog from "./componnt/ProjectBlog/ProjectBlog";
import Team from "./componnt/Team/Team";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Info></Info>
      <Features></Features>
      <Team></Team>
      <ProjectBlog></ProjectBlog>
    </div>
  );
}

export default App;
