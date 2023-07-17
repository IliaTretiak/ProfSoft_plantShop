import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]

function App() {
  const [page, setPage] = useState(1);
  const [collections, setCollections] = useState([]);

  fetch("https://64b1581e062767bc4826111a.mockapi.io/Plants")
    .then((res) => res.json())
    .then((json) => {
      setCollections(json);
    })
    .catch(err => {
      console.warn(err);
    }, [page])

  return (
      <div className="App">
        <header className="App-header">
          
        </header>

          <div className="wholePage">
            <div className="wholePage__sydebar">
              <div>
                <h3>Категории</h3>
                <div className="categories">
                  {
                    cats.map((obj, i) => <li key={obj.name}>{obj.name}</li>)
                  }
                </div>
              
              
              <h3>Цена</h3>
              <div className="categories">
                {
                  cats.map((obj, i) => <li key={obj.name}>{obj.name}</li>)
                }
              </div>
                <h3>Размер</h3>
                <div className="categories">
                  {
                    cats.map((obj, i) => <li key={obj.name}>{obj.name}</li>)
                  }
                </div>
              </div>
            </div>
            <div className="wholePage__product">
              {
                collections.map((item, index) => (<Card key={index} title={item.name} image={item.photos} />))
              }
            </div>
           
        </div>
        <ul className="pagination">
        {
          [...Array(3)].map((_, i) => <li onClick={() => setPage(i + 1)}>{i + 1}</li>)
        }
        </ul>
      </div>
    );
}

export default App;
