import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useParams, NavLink } from "react-router";
// import App from "./App.jsx";
import "./App.css";

const Home = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setposts(data));
  }, []);

  return (
    <div className="post-container">
      <h1>Posts 👇</h1>
      {posts.map((post) => (
        <NavLink
        className="post-title"
          style={{ display: "block" }}
          to={`/post/${post.id}`}
        >
          {`${post.id} :--- ${post.title}`}
        </NavLink>
      ))}
    </div>
  );
};

const About = () => {
  return <h1>About Page</h1>;
};

const Profile = () => {
  return <h1>Profile Page</h1>;
};

const Setting = () => {
  return <h1>Setting Page</h1>;
};

const Postpage = () => {
  const [data, setdata] = useState(null)

  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    .then(data => data.json())
    .then(data => setdata(data))
  },[])

  console.log(data)
  const params = useParams();
  console.log(params)

  if(data === null) return <p>Loading....</p>
  return (
    <>
    <h1>{`Post No : ${params.postid}`}</h1>
      <h2>{data.title}</h2>
      <h3>{data.body}</h3>
      <NavLink to={"/"}>
        <button>Back to list</button>
      </NavLink>
    </>
  );
};
const User = () => {
  const params = useParams();

  console.log("params", params);
  return <h1>Username is {params.userid}</h1>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="/user/:userid" element={<User />} />
        <Route path="/post/:postid" element={<Postpage />} />

        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
