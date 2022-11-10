
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import NewsCard from "./Newscard";
import Contact from "./Contact";
import Infobody from "./infoBody";

function App() {
  const [news, setNews] = useState([])
  const [newsCategory, setnewsCategory] = useState("");

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");


  function changeNewsCategory(event) {
    setnewsCategory(event.target.value)
    setQuery("");
  }

  function changeInput(event) {
    setInput(event.target.value)
    console.log(event.target.value)
  }

  function changeQuery(event) {
    event.preventDefault();
    setQuery(input)
   setnewsCategory("")
  }
  
  const apiKey = process.env.REACT_APP_API_KEY;
  


  useEffect(function () {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey='+ apiKey +'&category=' + newsCategory)
      .then((response) => response.json())
      .then((data) => { setNews(data.articles) });
    if (query !== "") {
      fetch('https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + apiKey)
        .then((response) => { return response.json() })
        .then((data) => { setNews(data.articles) })
    }

  }, [newsCategory, query])


  return <div>
    <Navbar changeQuery={changeQuery} changeInput={changeInput} changeNewsCategory={changeNewsCategory} />
    <Infobody />

    <div className="container-fluid news-cards">
      <h1> News Category : {newsCategory}</h1>
      <div className="row rows py-4 gy-4">
        {news.map(function (items) {
          return <NewsCard newsItems={items} />
        })}
      </div>
    </div>
    <Contact />
  </div>
}
export default App