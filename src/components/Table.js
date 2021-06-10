import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Table.css";

const Table = () => {
  const [recipes, setRecipes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const recipeImageTemplate = (rowData) => {
    return (
      <a href={`${rowData.sourceUrl}`}>
        <img
          src={`${rowData.image}`}
          alt={`${rowData.title}`}
          className="recipeImage"
        />
      </a>
    );
  };
  
  const columns = [
    { field: "image", header: "Image", body: { recipeImageTemplate } },
    { field: "title", header: "title" },
    { field: "readyInMinutes", header: "Ready In Minutes" },
    { field: "servings", header: "Servings" },
  ];
  const header = (
    <div className="table-header">
      <h1>Random Recipe Generator</h1>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
      </span>
    </div>
  );

  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const getRecipes = () => {
    return fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=5`
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
          sortable
        />
      );
    } else if (col.field === "title") {
      return (
        <Column
          key={col.field}
          field={col.field}
          header={col.header}
          sortable
          filter
          filterPlaceholder="Search by title"
        />
      );
    } else if (col.field === "readyInMinutes") {
      return (
        <Column
          key={col.field}
          field={col.field}
          header={col.header}
          sortable
          filter
          filterPlaceholder="Search by time"
        />
      );
    } else if (col.field === "servings") {
      return (
        <Column
          key={col.field}
          field={col.field}
          header={col.header}
          sortable
          filter
          filterPlaceholder="Search by servings"
        />
      );
    }
  });

  return recipes ? (
    <div>
      <div className="card">
        <DataTable
          value={recipes.recipes}
          sortMode="multiple"
          header={header}
          globalFilter={globalFilter}
          emptyMessage="No recipes found."
        >
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Table;
