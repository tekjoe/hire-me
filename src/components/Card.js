import React from "react";
import styled from "styled-components";

import photosnap from "../images/photosnap.svg";

const Card = styled.div`
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  border-left: ${props =>
    props.featured ? "5px solid hsl(180, 29%, 50%)" : "none"};
  box-shadow: 0 4px 15px 2px hsla(180, 29%, 50%, 15%);
  @media (min-width: 768px) {
    padding: 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

Card.Body = styled.div`
  border-bottom: 1px solid hsl(180, 10%, 80%);
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    border-bottom: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
`;

Card.Content = styled.div``;

Card.Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

Card.Tag = styled.span`
  display: block;
  color: hsl(180, 29%, 50%);
  font-weight: bold;
  background: hsl(180, 52%, 96%);
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background: hsl(180, 29%, 50%);
    color: white;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

Card.Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  position: relative;
  margin-top: -3rem;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 1.5rem;
    width: 75px;
    height: 75px;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  margin-top: 0.5rem;
  align-items: center;
`;

CompanyInfo.Title = styled.h3`
  color: hsl(180, 29%, 50%);
  font-size: 0.8rem;
  margin-right: 1rem;
`;

CompanyInfo.Pills = styled.div`
  display: flex;
`;

CompanyInfo.Pill = styled.span`
  display: block;
  font-size: 0.75rem;
  padding: 0.4rem;
  font-weight: bold;
  color: white;
  background: ${props =>
    props.variant === "isNew" ? "hsl(180, 29%, 50%)" : "hsl(180, 14%, 20%)"};
  border-radius: 0.75rem;
  margin-right: 0.5rem;
  text-transform: uppercase;
`;

const JobInfo = styled.div``;

JobInfo.Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

JobInfo.MetaData = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0rem;
  }
`;

JobInfo.MetaDatum = styled.span`
  display: block;
  color: hsl(180, 10%, 60%);
  margin-right: 0.25rem;
  font-size: 0.9rem;
  &:last-of-type::after {
    content: "";
    padding-left: 0;
  }
  &::after {
    content: "•";
    padding-left: 0.25rem;
  }
`;

export default ({ job, addFilter }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    new: isNew
  } = job;
  return (
    <Card featured={featured}>
      <Card.Body>
        <Card.Logo src={photosnap} />
        <Card.Content>
          <CompanyInfo>
            <CompanyInfo.Title>{company}</CompanyInfo.Title>
            <CompanyInfo.Pills>
              {isNew ? (
                <CompanyInfo.Pill variant="isNew">new!</CompanyInfo.Pill>
              ) : null}
              {featured ? (
                <CompanyInfo.Pill variant="featured">featured</CompanyInfo.Pill>
              ) : null}
            </CompanyInfo.Pills>
          </CompanyInfo>
          <JobInfo>
            <JobInfo.Title>{position}</JobInfo.Title>
            <JobInfo.MetaData>
              <JobInfo.MetaDatum>{postedAt}</JobInfo.MetaDatum>
              <JobInfo.MetaDatum>{contract}</JobInfo.MetaDatum>
              <JobInfo.MetaDatum>{location}</JobInfo.MetaDatum>
            </JobInfo.MetaData>
          </JobInfo>
        </Card.Content>
      </Card.Body>
      <Card.Tags>
        <Card.Tag onClick={addFilter}>{role}</Card.Tag>
        <Card.Tag onClick={addFilter}>{level}</Card.Tag>
        {languages
          ? languages.map(language => (
              <Card.Tag key={language} onClick={addFilter}>
                {language}
              </Card.Tag>
            ))
          : null}
        {tools
          ? tools.map(tool => (
              <Card.Tag onClick={addFilter} key={tool}>
                {tool}
              </Card.Tag>
            ))
          : null}
      </Card.Tags>
    </Card>
  );
};
