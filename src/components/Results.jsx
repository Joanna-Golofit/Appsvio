import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Results = ({ results, handleDelete }) => {
  return (
    <Result>
      <h3 style={{ width: "100%" }}>Chosen Results:</h3>
      {results.map((result, idx) => (
        <Span key={idx} onClick={(e) => handleDelete(idx)}>
          {idx}-{result}
        </Span>
      ))}
    </Result>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
};


const Result = styled.div`
  display: flex;
  /* display: none; */
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;
  margin-top: 30px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 3px 3px 3px lightgray;
  width: 400px;
  min-width: 300px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
const Span = styled.span`
  margin: 5px;
  border: 1px solid black;
  padding: 2px 4px 3px;
  border-radius: 3px;
  background-color: var(--shadow);
  :hover {
    cursor: pointer;
  }
`;

export default Results;
