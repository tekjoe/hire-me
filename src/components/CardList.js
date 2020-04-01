import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import jobs from "../data.json";
import FilterBar from "./FilterBar";

import Account from "../images/account.svg";
import EyeCam from "../images/eyecam-co.svg";
import FaceIt from "../images/faceit.svg";
import Insure from "../images/insure.svg";
import Loop from "../images/loop-studios.svg";
import Manage from "../images/manage.svg";
import MyHome from "../images/myhome.svg";
import Photosnap from "../images/photosnap.svg";
import Shortly from "../images/shortly.svg";
import TheAir from "../images/the-air-filter-company.svg";

const images = [
  Photosnap,
  Manage,
  Account,
  MyHome,
  Loop,
  FaceIt,
  Shortly,
  Insure,
  EyeCam,
  TheAir
];

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
  const [jobList, setJobList] = useState([]);
  const addFilter = e => {
    const key = Object.values(e.target.dataset);
    const newFilter = { [key]: e.target.innerText };
    if (!filters.some(filter => filter[key] === newFilter[key]))
      setFilters([...filters, newFilter]);
  };

  const removeFilter = e => {
    const filterToRemove = e.target.innerText;
    const newFilters = [];
    filters.forEach(filter => {
      if (Object.values(filter)[0] !== filterToRemove) newFilters.push(filter);
    });
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filterJobs = () => {
    const filteredList = [];

    jobs.forEach(job => {
      let included = true;
      for (let filter of filters) {
        switch (true) {
          case job.role === filter.role:
          case job.level === filter.level:
          case job.languages && job.languages.includes(filter.languages):
          case job.tools && job.tools.includes(filter.tools):
            break;
          default:
            included = false;
            break;
        }
      }

      if (included) filteredList.push(job);
    });

    return filteredList;
  };

  useEffect(() => {
    setJobList(filterJobs);
  }, [filters]);

  return (
    <>
      <FilterBar
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      <CardList>
        {jobList.length < 1
          ? jobs.map(job => (
              <Card
                key={job.id}
                job={job}
                addFilter={addFilter}
                src={images[job.id - 1]}
              />
            ))
          : jobList.map(job => (
              <Card
                key={job.id}
                job={job}
                addFilter={addFilter}
                src={images[job.id - 1]}
              />
            ))}
      </CardList>
    </>
  );
};
