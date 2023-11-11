import React, { useState } from "react";

const MultipleControlledInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    company: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = person;
    console.log(newUser);
    setPerson({
      name: "",
      job: "",
      company: "",
    });
  };

  return (
    <div className="bg-primary min-height-100vh">
      <h1 className="light-text text-center">Multiple Controlled Inputs</h1>
      <div className="flex-center">
        <div className="card bg-light flex-center">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="">
              <label htmlFor="job">Job: </label>
              <input
                type="text"
                name="job"
                value={person.job}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="">
              <label htmlFor="company">Company: </label>
              <input
                type="text"
                name="company"
                value={person.company}
                onChange={(e) => handleChange(e)}
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

export default MultipleControlledInputs;
