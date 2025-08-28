import React from "react";

const Card = ({ image, title, description, size }) => {
  return (
    <div className="max-w-sm bg-zinc-700 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
        width={size}
        height={size}
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-100">{title}</h2>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
