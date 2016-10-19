import React from 'react';

const SidebarSearchComponent = () =>
  <div className="SidebarSearchComponentBlock">
    <div className="SidebarSearchComponent">
      <div className="SidebarSearchComponent-search">
        <input type="text" placeholder="Search for" />
      </div>
      <div className="SidebarSearchComponent-resultsTitle">
        <small>Results for your query</small>
      </div>
      <div className="SidebarSearchComponent-results">
        <div className="SidebarSearchComponent-results-item">
          <a href="">Query in cars</a>
        </div>
        <div className="SidebarSearchComponent-results-item">
          <a href="">Query in houses</a>
        </div>
        <div className="SidebarSearchComponent-results-item">
          <a href="">Quer</a>
        </div>
        <div className="SidebarSearchComponent-results-item">
          <a href="">Qu</a>
        </div>
      </div>
      <div className="SidebarSearchComponent-button">
        <button>Search</button>
      </div>
    </div>
  </div>;

SidebarSearchComponent.propTypes = {
};

export default SidebarSearchComponent;
