import React from 'react';
import './search.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Search({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div className="input-areas">
            <form>
              <input
                className="search-input"
                name="guide-keyword"
                type="guide-keyword"
                placeholder="Enter location. Eg:Kathmandu"
              />
              <Button className="butn" buttonStyle="btn--outline" buttonSize="btn--large" >Find Guide</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;