import Navbar from "./navbar";
import React from "react";
import Footer from "./footer";
import axios from "axios";
const postes = [
  {
    id: 1,
    titre: "quote",
    descr:
      "courage",
    img: "https://i.pinimg.com/564x/68/c9/cf/68c9cf4caa84ec6d966ca9f6db143759.jpg",
  },
  {
    id: 2,
    titre: "Relay Logic Projects",
    descr:
      "projet system embarquee",
    img: "https://i.pinimg.com/564x/8a/57/90/8a5790938a60f1489a2a980c4d629085.jpg",
  },
  {
    id: 3,
    titre: "GARIS EDELWEISS ~ THE HEALER",
    descr:
      "un dieu roman, god of healing",
    img: "https://i.pinimg.com/564x/84/85/52/848552f6d46f7d080974cffbc057114a.jpg",
  },
  {
    id: 4,
    titre: "Herman Hollerith",
    descr:
      "",
    img: "https://i.pinimg.com/564x/c8/06/93/c806934efc2657be4438f8a0946dd4a9.jpg",
  },
];
const deleteposte=async()=>{
  await axios.post("webp/back/delete.php",{
    postes,
  });
}
function Home() {
  const [posts, setPostes] = React.useState(postes);
  return (
    <div className="Posts">
      <Navbar></Navbar>
      {posts.map((post) => (
        <div className="post">
          <div className="image">
            <img src={post.img} />
          </div>
          <div className="titre">
            <h1>{post.titre}</h1>
            <h5>{post.descr}</h5>
            <button className="btn">read more</button>
            <span className="delete" onClick={deleteposte}>
              <button class="noselect">
                <span class="text">Delete</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
export default Home;
