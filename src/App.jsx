import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Results from "./components/Results";
import { initialContacts, saveToLocalStore } from "./utils/localStorage";

function App() {
  const initialValues = {
    v1: "Undefined",
    v2: "Failed",
    v3: "Passed",
  };
  const [value1, setValue1] = useState(initialValues.v1);
  const [value2, setValue2] = useState(initialValues.v2);
  const [value3, setValue3] = useState(initialValues.v3);
  const [results, setResults] = useState(initialContacts);
  
  const handleInputChange = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    console.log(`${name}, ${value}`);
    if (name === "1") setValue1(value);
    if (name === "2") setValue2(value);
    if (name === "3") setValue3(value);
    // console.log(initialValues.v1);
    // `setValue${name}`(value);
    // this.setState({
    //   [name]: value
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([...results, value1, value2, value3]);
    console.log("asynch results", results);
    // console.log("asynch submitted results:", results);
    //dodalam array bo nie umialam naszybko dodac samego results..
    saveToLocalStore("tests", [...results, value1, value2, value3]);
    setValue1(initialValues.v1);
    setValue2(initialValues.v2);
    setValue3(initialValues.v3);
  };

  const handleDelete = (idx) => {
    // console.log(e);
    console.log(idx);
    console.log(results)
    // setResults(results.filter(result => result.id !== idx))
    setResults(results.filter((result, ind) => ind !== idx))
    saveToLocalStore(
      "tests",
      results.filter((result, ind) => ind !== idx)
    );
  };
  const handleEdit = (idx) => {
    // console.log(e);
    console.log(idx);
    console.log(results)
    // setResults(results.filter(result => result.id !== idx))
    // setResults(results.filter((result, ind) => ind !== idx))
    // saveToLocalStore(
    //   "tests",
    //   results.filter((result, ind) => ind !== idx)
    // );
  }

  return (
    <>
      <Window>
        <Panel>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </Panel>
        <Form>
          <Button type="submit" onClick={handleSubmit}>
            Create a new test
          </Button>

          <label>
            My test 1
            <Select name="1" value={value1} onChange={handleInputChange}>
              <option value="Undefined">Undefined</option>
              <option value="Failed">Failed</option>
              <option value="Passed">Passed</option>
            </Select>
          </label>

          <label>
            My test 2
            <Select name="2" value={value2} onChange={handleInputChange}>
              <option value="Undefined">Undefined</option>
              <option value="Failed">Failed</option>
              <option value="Passed">Passed</option>
            </Select>
          </label>

          <label>
            My test 3
            <Select name="3" value={value3} onChange={handleInputChange}>
              <option value="Undefined">Undefined</option>
              <option value="Failed">Failed</option>
              <option value="Passed">Passed</option>
            </Select>
          </label>
        </Form>
      </Window>

      {/* <Results
          style={{ display: "flex" }}
        >
      {results === null ? (<p>Nothing to display</p>) : (
          {results.map((result, idx) => (
            <Span key={idx}>
              {idx}-{result}
            </Span>
          ))}
      )}
        </Results> */}

      {results.length === 0 ? null : (
        <Results
          results={results}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        //   <h3 style={{ width: "100%"}}>Chosen Results:</h3>
        //   {results.map((result, idx) => (
        //     <Span key={idx}>
        //       {idx}-{result}
        //     </Span>
        //   ))}
        // </Results>
      )}
    </>
  );
}

export default App;

const Window = styled.div`
  background-color: white;
  overflow: hidden;
  margin-top: 30px;
  padding-bottom: 10px;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 3px 3px 3px lightgray;
  width: 400px;
  min-width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;
const Panel = styled.div`
  background-color: #ebe7e7;
  display: flex;
  width: 100%;
  padding: 3px 8px;
  /* border: none; */
  /* border: 2px solid #ebe7e7; */
  /* border-radius: 3px;   */
`;
const Dot = styled.div`
  background-color: white;
  margin: 4px;
  border: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  :hover {
    background-color: yellow;
  }
  :first-child:hover {
    background-color: green;
  }
  :last-child:hover {
    background-color: red;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
`;
const Button = styled.button`
  /* color: #1d1db6; */
  color: var(--accent);
  background-color: white;
  margin-bottom: 30px;
  /* font-size: 1em; */
  padding: 9px 15px;
  /* border: 1px solid #1d1db6; */
  border: 1px solid var(--accent);
  border-radius: 3px;
  :hover {
    box-shadow: 0 0 5px var(--shadow);
  }
`;
const Select = styled.select`
  color: black;
  margin-bottom: 12px;
  margin-left: 70px;
  width: 150px;
  appearance: none; // pozbycie sie strzałki
  /* background-image: url("./src/images/arrow.png"); */
  /* background-image: url("arrow.png"); */
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Ic_arrow_drop_down_36px.svg");
  /* background-image: url("./src/images/arrow2.jpeg"); */
  /* background-image: url("arrow2.jpeg"); */
  /* background-color: red; */
  background-repeat: no-repeat;
  background-position: 120px center;
  background-size: 19px;
  padding: 9px 15px;
  border: 1.5px solid lightgray;
  border-radius: 3px;
  :hover,
  :focus {
    box-shadow: 0 0 5px #1d1db65a;
    outline: none;
  }
`;
// /* display: ${!results ? "none" : "flex"}; */
// const Results = styled.div`
//   display: flex;
//   /* display: none; */
//   box-sizing: border-box;
//   background-color: white;
//   overflow: hidden;
//   margin-top: 30px;
//   padding: 10px;
//   border: 1px solid black;
//   border-radius: 3px;
//   box-shadow: 3px 3px 3px lightgray;
//   width: 400px;
//   min-width: 300px;
//   height: auto;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-left: auto;
//   margin-right: auto;
// `;
// const Span = styled.span`
//   margin: 5px;
//   border: 1px solid black;
//   padding: 2px 4px 3px;
//   border-radius: 3px;
//   background-color: var(--shadow);
// `;