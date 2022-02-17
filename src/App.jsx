import './App.css';
import styled from "styled-components";

function App() {
  return (
    <Window>
      <Panel>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </Panel>
      <Form>
        <Button type="submit">Create a new test</Button>

        <label>
          My test 1
          <Select name="test1">
            <option value="u" selected>
              Undefined
            </option>
            <option value="f">Failed</option>
            <option value="p">Passed</option>
          </Select>
        </label>

        <label>
          My test 2
          <Select name="test2">
            <option value="u">Undefined</option>
            <option value="f" selected>
              Failed
            </option>
            <option value="p">Passed</option>
          </Select>
        </label>

        <label>
          My test 3
          <Select name="test3">
            <option value="u">Undefined</option>
            <option value="f">Failed</option>
            <option value="p" selected>
              Passed
            </option>
          </Select>
        </label>
      </Form>
    </Window>
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
  max-width: 400px;
  /* min-width: 300px; */
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
