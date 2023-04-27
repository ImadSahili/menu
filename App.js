import { Button, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/itemList";
import { data } from "./data";
const App = () => {
  const [itemsData, setItemsData] = useState(data);
  //get all cat unique
  const allCategory = ["الكل", ...new Set(data.map((item) => item.category))];
  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") setItemsData(data);
    else {
      const newAry = data.filter((item) => item.category === cat);
      setItemsData(newAry);
    }
  };

 
  // filter by search form
  const filterBySearch = (word) => {
    if (word != "") {
      const newAry = data.filter((item) => item.category === word);
      setItemsData(newAry);
    }else if(word === ""){
      setItemsData(data)
    }
  };

  return (
    <div className="color-body">
      <NavBar  filterBySearch={filterBySearch}/>
      <Container>
        <Header />
        <Category
          dataCategory={allCategory}
          filterByCategory={filterByCategory}
        />
        <ItemList data={itemsData} />
      </Container>
    </div>
  );
};

export default App;
