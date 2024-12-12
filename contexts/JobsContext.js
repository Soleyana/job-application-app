import React, { createContext, useState } from 'react';

export const JobsContext = createContext();

const JobsContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'Google', saved: false, applied: false },
    { id: 2, title: 'Data Scientist', company: 'Meta', saved: false, applied: false },
    { id: 3, title: 'Product Manager', company: 'Amazon', saved: false, applied: false },
  ]);

  const saveJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, saved: !job.saved } : job
      )
    );
  };

  const applyForJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, applied: true } : job
      )
    );
  };

  return (
    <JobsContext.Provider value={{ jobs, saveJob, applyForJob }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;