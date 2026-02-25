import React from "react";
import { navLinks } from "../constants";

const NavigationBar: React.FC = () => {
  return (
    <header>
      <nav>
        <img src="/images/logo.svg" alt="Apple Logo" className="logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/images/search.svg" alt="Search Icon" />
          </button>
          <button>
            <img src="/images/cart.svg" alt="Cart Icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
