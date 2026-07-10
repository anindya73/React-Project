import React from 'react'

function Card() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1622842182823-28bfbfba47e3?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
        alt="No image"
      />
      <h1 className="bg-blue-400 text-2xl rounded-2xl">Card for photo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quidem.
      </p>
    </div>
  );
}

export default Card