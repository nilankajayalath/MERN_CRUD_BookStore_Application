import React from "react";
import "./About.css"; // Add custom styles for the About page

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About BookStore</h1>
        <p>Your one-stop platform to explore, add, and manage books effortlessly.</p>
      </header>

      <section className="about-details">
        <h2>Our Mission</h2>
        <p>
          At BookStore, our mission is to make book management simple and accessible for everyone.
          Whether you're a passionate reader or a library curator, our application empowers you to:
        </p>
        <ul>
          <li>Explore a wide collection of books across various genres.</li>
          <li>Add new books to your collection with ease.</li>
          <li>Update and manage book details effortlessly.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">         
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          
          <div className="team-member">
            <h3>John Smith</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Join Us</h2>
        <p>
          Want to contribute or learn more about BookStore? Feel free to contact us!
        </p>
        <p><b>011 234 3331</b></p>
      </section>
    </div>
  );
}

export default About;
