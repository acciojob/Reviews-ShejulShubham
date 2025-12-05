import React, { useState, useEffect } from "react";

const reviewList = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export default function Review() {
  // TODO: Complete review assignment
  const [current, setCurrent] = useState(1);
  const { id, name, job, image, text } = reviewList.find(
    (r) => r.id === current
  );

  function prevReview() {
    if (current <= 1) {
      return;
    }

    setCurrent((prev) => prev - 1);
  }

  function nextReview() {
    if (current >= reviewList.length - 1) {
      return;
    }

    setCurrent((prev) => prev + 1);
  }

  function randomReview() {
    const random = Math.floor(Math.random() * reviewList.length) + 1;
    setCurrent(random);
  }

  return (
    <div className="review">
      <div className="img-container">
        <img
          style={{ width: "100px", height: "100px" }}
          src={image}
          alt={name}
          className="person-img"
        />
      </div>

      <h4 className="author" id={`author-${id}`}>
        {name}
      </h4>

      <p className="job">{job}</p>

      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          &#8592;
        </button>
        <button className="next-btn" onClick={nextReview}>
          &#8594;
        </button>
      </div>

      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </div>
  );
}
