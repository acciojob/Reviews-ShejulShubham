import React from "react";
import Review from "./Review";

export default function App() {
  return (
    <main>
      <section className="container">

        <div className="title" style={{textAlign:"center"}}>
           <h2 id="review-heading">Our Reviews</h2>
        </div>
        
        <Review/>
      </section>
    </main>
  );
}