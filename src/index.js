import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
import Quotes from "./Quotes";
import "./styles.css";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <div class="header" id="home">
        <div class="transbox">
          <h1>Breaking Bad Characters</h1>
          <div class="img1">
            <img
              src="https://avatars1.githubusercontent.com/u/45493793?s=460&amp;u=81836d78246a7e3c0724635018ab93450d6ba9e6&amp;v=4"
              alt="Rashika Rathi"
              width="80"
            ></img>
          </div>
          <h3>
            by
            <a href="https://www.facebook.com/rashika.sinha.75">
              <br></br>Rashika Rathi
            </a>
          </h3>
        </div>
      </div>
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div class="search-container">
          <form action="/action_page.php">
            <input
              type="text"
              id="myInput"
              onkeyup="myFunction()"
              placeholder="Type here.."
              name="search"
            ></input>
            <button type="button" class="btn btn-default">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <footer id="contact">
        <h2>Contact Me</h2>
        <address>
          Rashika Rathi<br></br>
          <a
            href="https://www.google.com/maps/place/B20+Girls'+Hostel/@31.7813298,76.9950323,17.53z/data=!4m12!1m6!3m5!1s0x3904e4a66418174b:0x109b52bfc879ec97!2sBeas+Kund+Hostel,+IIT+Mandi+North+Campus!8m2!3d31.7811608!4d76.9964329!3m4!1s0x3904e4a67bb7c23d:0x114604ecfc1285a8!8m2!3d31.7814888!4d76.9962014"
            target="_blank"
            rel="noopener noreferrer"
          >
            B18081, B16<br></br>IIT Mandi, India
          </a>
          <br></br> +91-9113322022
        </address>
        <a
          href="https://www.facebook.com/rashika.sinha.75"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-facebook"></i>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://twitter.com/raashika03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-twitter"></i>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.instagram.com/raashika.03/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-instagram"></i>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/rashika-rathi-65909a174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <br></br>
      </footer>
    </div>
  );
};

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("p");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
