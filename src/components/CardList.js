import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import data from "../data.json";
import FilterBar from "./FilterBar";

const CardList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  @media (min-width: 1024px) {
    grid-gap: 2em;
  }
`;

export default () => {
  const [filters, setFilters] = useState([]);
  const addFilter = e => {
    if (filters.includes(e.target.innerText)) {
      return;
    } else {
      setFilters([...filters, e.target.innerText]);
    }
  };
  const removeFilter = e => {
    const filteredArr = filters.filter(filter => filter !== e.target.innerText);
    setFilters(filteredArr);
  };
  const clearFilters = () => {
    console.log(filters);
    setFilters([]);
  };
  const filteredJobs = data.filter(job => job.role === filters[0]);

  return (
    <>
      <FilterBar
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      <CardList>
        {data.map(job => (
          <Card key={job.id} job={job} addFilter={addFilter} />
        ))}
      </CardList>
    </>
  );
};
