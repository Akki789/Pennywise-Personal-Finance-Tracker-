import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaArrowRight,
  FaTags,
  FaHistory,
} from "react-icons/fa";
import "./styles.css";
import dashboardPreview from "../../assets/dashboard-preview.png";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaWallet />,
      title: "Income Tracking",
      desc: "Track every income source in one place.",
    },
    {
      icon: <FaChartLine />,
      title: "Expense Analytics",
      desc: "Understand spending through beautiful charts.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Login",
      desc: "Email & Google authentication powered by Firebase.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Sync",
      desc: "Access your data securely anytime.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive",
      desc: "Works beautifully on desktop and mobile.",
    },
    {
      icon: <FaArrowRight />,
      title: "Fast Experience",
      desc: "Built using React, Firebase and Ant Design.",
    },
    {
      icon: <FaTags />,
      title: "Smart Categories",
      desc: "Organize transactions into categories for better financial insights.",
    },
    {
      icon: <FaHistory />,
      title: "Transaction History",
      desc: "View and manage your complete income and expense history anytime.",
    },
  ];

  return (
    <div className="landing">
      <nav className="landing-navbar">
        <div className="logo-area">
          <span>Pennywise</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <button className="ghost" onClick={() => navigate("/signup")}>
            Sign In
          </button>
          <button
            className="primary"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <span className="badge">Personal Finance Tracker</span>
          <h1>
            Smart Finance
            <br />
            Management,
            <br />
            Simplified.
          </h1>
          <p>
            Track income, manage expenses and visualize your finances through
            one clean dashboard.
          </p>

          <div className="hero-btns">
            <button className="primary" onClick={() => navigate("/signup")}>
              Get Started
            </button>
            <button className="ghost" onClick={() => navigate("/signup")}>
              Sign In
            </button>
          </div>
        </div>

        <div className="browser">
          <div className="browser-top">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <p>Pennywise Dashboard</p>
          </div>

          <div className="browser-body">
            <div className="balance">
              <small>Current Balance</small>
              <h2>₹52,400</h2>
            </div>

            <div className="cards">
              <div className="mini">
                <small>Income</small>
                <h3>₹74,000</h3>
              </div>

              <div className="mini">
                <small>Expenses</small>
                <h3>₹21,600</h3>
              </div>
            </div>

            <img
              src={dashboardPreview}
              alt="Pennywise Dashboard"
              className="dashboard-image"
            />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Everything You Need</h2>
        <p className="subtitle">
          Powerful tools to help you stay in control of your money.
        </p>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>Pennywise</h2>
        <p>Built with React • Firebase • Ant Design</p>
        <button className="primary" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </footer>
    </div>
  );
}
