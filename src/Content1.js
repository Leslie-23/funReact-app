import React from "react";
import ItemList from "./ItemList";

import { FaTrashAlt } from "react-icons/fa"; //Font Awesome

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
          Your List is empty
        </p>
      )}
    </main>
  );
};
export default Content;
