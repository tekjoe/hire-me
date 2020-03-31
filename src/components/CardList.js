import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import data from "../data.json";
import FilterBar from "./FilterBar";

const CardList = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  @media (min-width: 768px) {
    grid-gap: 2em;
  }
`;

export default () => {
  const [filters, setFilters] = useState([]);
  const addFilter = e => {
    setFilters([...filters, e.target.innerText]);
  };
  const removeFilter = e => {
    console.log(e.target);
  };
  const clearFilters = () => {
    setFilters([]);
  };
  let filteredJobs = data.filter(jobs => jobs.level.indexOf(filters) !== -1, [
    filters
  ]);
  console.log(filteredJobs);
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
