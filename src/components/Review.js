import React, { useState, useEffect } from "react";

export default function Review() {
  const [review, setReview] = useState({});
  const [current, setCurrent] = useState(1);

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

  useEffect(() => {
    setReview(reviewList.find((r) => r.id === current));
  }, [current]);

  function previous() {
    if (current <= 1) {
      return;
    }

    setCurrent((prev) => prev - 1);
  }

  function next() {
    if (current >= reviewList.length - 1) {
      return;
    }

    setCurrent((prev) => prev + 1);
  }

  function selectRandom() {
    const random = Math.floor(Math.random() * reviewList.length) + 1;
    setCurrent(random);
  }

  return (
    <>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <p id="author-id">{review.id}</p>
        <p className="author">{review.name}</p>
        <p className="job">{review.job}</p>
        <p className="info">{review.text}</p>
        <img
          style={{ width: "50px", height: "50px" }}
          src={review.image}
          className="person-img"
          alt={`profile-image-${review.name}`}
        />
      </div>

      <button onClick={previous} className="prev-btn">
        Previous
      </button>
      <button onClick={selectRandom} className="random-btn">
        surprise me
      </button>
      <button onClick={next} className="next-btn">
        Next
      </button>
    </>
  );
}
