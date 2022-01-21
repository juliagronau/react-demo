import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  console.log(articles);

  return (
    <div>
      <h1>Los geht's</h1>
      {articles
        ? articles.map((article) => (
            <>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
            </>
          ))
        : "Loading..."}
    </div>
  );
}

export default App;
