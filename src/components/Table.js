import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Table.css";

const Table = () => {
  const [recipes, setRecipes] = useState([]);

  const recipeImageTemplate = (rowData) => {
    return (
      <img
        src={`${rowData.image}`}
        alt={`${rowData.title}`}
        className="recipeImage"
      />
    );
  };

  const columns = [
    { field: "image", header: "Image", body: { recipeImageTemplate } },
    { field: "title", header: "Title" },
    { field: "readyInMinutes", header: "Ready In Minutes" },
    { field: "servings", header: "Servings" },
  ];

  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const getRecipes = () => {
    return fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=20`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      });
  };
  useEffect(() => {
    getRecipes();
  }, []);
  console.log(recipes);

  const dynamicColumns = columns.map((col, i) => {
    if (col.field === "image") {
      return (
        <Column
          key={col.field}
          field={col.field}
          body={recipeImageTemplate}
          header={col.header}
        />
      );
    } else {
      return <Column key={col.field} field={col.field} header={col.header} />;
    }
  });

  return recipes ? (
    <div>
      <div className="card">
        <DataTable value={recipes.recipes} sortMode="multiple">
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Table;
