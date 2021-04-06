import React from "react";

const Recipe = ({ image, label, ingredients, calories }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="imageResep" />
      <div className="card-body">
        <h5 className="card-title text-center my-3">{label}</h5>
        <div className="card">
          <div class="card-header">Ingredient's</div>
          <ul class="list-group list-group-flush">
            {ingredients?.map((item, idx) => (
              <li class="list-group-item">
                {idx + 1}. {item?.text}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted mt-4 text-center">Calories: {calories}</p>
      </div>
    </div>
  );
};

export default Recipe;
