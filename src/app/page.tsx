import React from "react";
// import Navbar from "./components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="main-container landing-body">
      <div className="content-container">
        <div className="header">
          <h2 className="title">W.E. Tech</h2>
          <p className="subtitle">Women Everywhere in Tech</p>
          <hr className="hr-line" />
        </div>

        <main className="main-content">
          <section>
            <h3 className="section-header">Who Are We?</h3>
            <p className="info">
              W.E. Tech is a growing force of change. We are building a thriving
              ecosystem of communities, united by a powerful mission: to elevate
              women in technology across the globe.
            </p>
          </section>
          <section>
            <h3 className="section-header">What{'\''}s Happening?</h3>
            <p className="info">
              🚧 We{'\''}re Getting Ready! Our website is currently under
              construction. 🚧
            </p>
            <p className="info">
              Soon, it will be your go-to hub for resources, community
              interaction, and essential updates from W.E Tech. Stay tuned for
              the launch of something great!
            </p>
          </section>
          <section>
            <h3 className="section-header">Get Connected!</h3>
            <p className="info">
              Join our Discord community! Connect with fellow women in tech,
              share ideas, seek support, and learn together. Our collective
              voice will shape the future of technology.
            </p>
            <Link href="https://discord.gg/YpaJ3JckNM">
              <div className="join-button">Join Our Discord</div>
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
