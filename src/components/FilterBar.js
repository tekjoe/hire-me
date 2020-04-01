import React from "react";
import styled from "styled-components";

const FilterBar = styled.div`
  display: ${({ filters }) => (filters.length >= 1 ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 4px 15px 2px hsla(180, 29%, 50%, 15%);
  border-radius: 0.25rem;
  margin-top: -6rem;
`;

FilterBar.Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

FilterBar.Tag = styled.div`
  display: flex;
  align-items: center;
  color: hsl(180, 29%, 50%);
  font-weight: bold;
  background: hsl(180, 52%, 96%);
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  p {
    padding: 0.3rem 0.5rem;
  }
  &:hover > div {
    background: hsl(180, 14%, 20%);
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

FilterBar.ClearButton = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const RemoveFilterButton = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: hsl(180, 29%, 50%);
  border-radius: 0 0.25rem 0.25rem 0;
`;

RemoveFilterButton.SVG = styled.svg`
  path {
    fill: #fff;
  }
`;

export default ({ filters, removeFilter, clearFilters }) => {
  return (
    <FilterBar filters={filters}>
      <FilterBar.Tags>
        {filters
          ? filters.map(filter => (
              <FilterBar.Tag key={filters.indexOf(filter)}>
                <p onClick={removeFilter} data-type={Object.keys(filter)}>
                  {Object.values(filter)}
                </p>
                <RemoveFilterButton>
                  <RemoveFilterButton.SVG
                    xmlns="http://www.w3.org/2000/svg"
                    height="13"
                    width="13"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                    />
                  </RemoveFilterButton.SVG>
                </RemoveFilterButton>
              </FilterBar.Tag>
            ))
          : null}
      </FilterBar.Tags>
      <FilterBar.ClearButton onClick={clearFilters}>
        Clear
      </FilterBar.ClearButton>
    </FilterBar>
  );
};
