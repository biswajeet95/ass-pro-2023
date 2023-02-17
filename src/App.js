import { Routes, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Todo from "./components/Todo";

function App() {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
      
    </>
  );
}

export default App;
