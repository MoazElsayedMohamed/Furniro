import React from "react";
import { useCategories } from "../services/apiCategories";
import Category from "./Category";
import { URL } from "../../utils/constants";

const Categories = () => {
  const { categories, error, isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  const categoriesElements = categories.data.map((category) => {
    return (
      <Category
        key={category.id}
        name={category.attributes.name}
        imageUrl={`${URL}${category.attributes.image.data.attributes.url}`}
      />
    );
  });

  return (
    <section className="browse-range">
      <h3 className="browse-range-header">browse the range</h3>
      <p className="browse-range-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, ad incidunt nihil
      </p>
      <div className="browse-images">{categoriesElements}</div>
    </section>
  );
};

export default Categories;
