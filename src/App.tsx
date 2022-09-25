import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  ComposedModal,
  Button,
  ModalHeader,
  ModalBody,
  TextInput,
  Form,
  Select,
  SelectItem,
  } from "carbon-components-react";

import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(66);
  function getpercentage() {
    if (number < 200) {
      setNumber(number + 1);
    } else {
      alert("maximum number 200");
    }
  }
   return (
    <div className="main">
      <ComposedModal open={open} containerClassName="text" onClose={() => setOpen(false)}>
        <ModalHeader title="Create objective" />

        <ModalBody style={{ borderTop: "1px solid gray" }}>
          <Form className="form">
            <div className="formBody">
              <TextInput
                data-modal-primary-focus
                id="text-input-1"
                labelText="Title"
                style={{
                  marginBottom: "3rem",
                  borderRadius: "10px",
                 }}
              />
              <TextInput
                data-modal-primary-focus
                id="text-input-1"
                labelText="Add a short description"
                style={{
                  marginBottom: "1rem",
                  borderRadius: "10px",
                                
                 }}
              />
              <div className="tooltipContainer">
               (optional)
                <button data-tip data-for="information" type="button" className="button">
                  i
                </button>
                <span className="tooltipe">Maximum 30 characters.</span>
              </div>
              <div className="timeFrameContainer">
                <div className="textContainer">
                  <p className="timeframe">Timeframe</p>
                  <p className="notSet">Not set</p>
                </div>
                <Select
                  id="status"
                  labelText="Status"
                  style={{ borderRadius: "10px", borderBottom: "none" }}
                  defaultValue="In progress"
                  className="select"
                >
                  <SelectItem
                    text="In progress"
                    value="In progress"
                    className="item"
                  />
                </Select>
              </div>
              <p>Set your metcrics</p>
              <div className="metcricsContainer">
                <p>Increase conversion by 200%</p>
                <div className="numberContainer">
                  <div>
                    <span className="start">Start</span>
                    <span className="startNumber">0</span>
                    <span>to</span>
                    <span className="target">Target</span>
                    <span className="lastNumber">200</span>
                  </div>
                  <div>
                    <span className="start">Current</span>
                    <span className="startNumber">{number}</span>
                    <span className="percentage">%</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => getpercentage()}
                className="buttonIncrease"
                type="button"
              >
                +
              </button>
              <div className="progressBarContainer">
                <ProgressBar
                  completed={number}
                  maxCompleted={200}
                  bgColor={"#87ceeb"}
                  isLabelVisible={false}
                  height={'10px'}
                  borderRadius={'5px'}
                />
                <p className="progressBarText">You're a third of the way there already! Keep going</p>
              </div>
            </div>
            <div className="buttonNext">
              <Button
                disabled={true}
                style={{
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "2px 20px 2px 20px",
                }}
              >
                Next
              </Button>
            </div>
          </Form>
        </ModalBody>
      </ComposedModal>

      <Button kind="primary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
    </div>
  );
}

export default App;
