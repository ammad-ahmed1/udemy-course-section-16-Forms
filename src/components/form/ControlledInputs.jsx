import React, { useState } from "react";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(name, job);
    setName("");
    setJob("");
  };
  return (
    <div className="bg-primary min-height-100vh">
      <h1 className="light-text text-center">Controlled Inputs</h1>
      <div className="flex-center">
        <div className="card bg-light flex-center">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="job">Job: </label>
              <input
                type="text"
                name="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-block">
              Submit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlledInputs;
