import React, { useState, useEffect} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Table = () => {
  const [recipes, setRecipes] = useState([]);
  const columns = [
    { field: "title", header: "Title" },
    { field: "summary", header: "Summary" },
    { field: "readyInMinutes", header: "Ready In Minutes" },
    { field: "vegetarian", header: "Vegetarian" },
  ];

  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const getRecipes = () => {
    return fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=4`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  };
  useEffect(() => {
    getRecipes();
    console.log(recipes);
  }, []);
  console.log(recipes);

  const dynamicColumns = columns.map((col, i) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return recipes ? (
    <div>
      <div className="card">
        <DataTable value={recipes}>{dynamicColumns}</DataTable>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Table;
