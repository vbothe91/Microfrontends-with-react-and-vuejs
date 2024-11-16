import React, { useState, useEffect, lazy, Suspense} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VeuJs from "./components/VueJs.jsx";

const CardDeatils = lazy(() => import("DetailCardInHost/CardDetails"));
const CardShort = lazy(() => import("ShortCardInHost/CardShort"));
const TodoApp = lazy(() => import("TodoAppHost/TodoApp"));

import "./style.css";

const App = () => {
  const [detailItems, setDetailItems] = useState([]);
  const [shortItems, setShortItems] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating')
      .then(res => res.json())
      .then(data => setDetailItems(data.recipes));
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=5&skip=10&select=id,name,image')
    .then(res => res.json())
    .then(data => setShortItems(data.recipes));
}, []);

  return (
    <>
      <Header />
      <VeuJs />
      <div className="short-list-container">
      <Suspense fallback={<p>Loading...</p>}>
        {shortItems.length && shortItems.map(item => {
            return <CardShort key={item.id} data={item}></CardShort>
          })}
        </Suspense>
      </div>

      <div className="detail-list-container">
        <Suspense fallback={<p>Loading...</p>}>
        {detailItems.length && detailItems.map(item => {
            return <CardDeatils key={item.id} data={item}></CardDeatils>
          })}
        </Suspense>
      </div>

      <div className="todo-list-container">
        <Suspense fallback={null}>
          <TodoApp />
        </Suspense>
      </div>

      <Footer />
    </>
  )
}

export default App;
