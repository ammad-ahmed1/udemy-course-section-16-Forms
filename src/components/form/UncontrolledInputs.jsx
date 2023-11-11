import React, { useRef, useEffect } from "react";

const UncontrolledInputs = () => {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null);
  const companyInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    console.log(enteredName, enteredJob, enteredCompany);
    console.log("Submitted");
  };
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  return (
    <div>
      <div className="bg-primary min-height-100vh">
        <h1 className="light-text text-center">Uncontrolled Inputs</h1>
        <div className="flex-center">
          <div className="card bg-light flex-center">
            <form className="form-control" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" ref={nameInputRef} />
              </div>
              <div className="">
                <label htmlFor="job">Job: </label>
                <input type="text" name="job" ref={jobInputRef} />
              </div>
              <div className="">
                <label htmlFor="company">Company: </label>
                <input type="text" name="company" ref={companyInputRef} />
              </div>
              <button type="submit" className="btn-block">
                Submit User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledInputs;
