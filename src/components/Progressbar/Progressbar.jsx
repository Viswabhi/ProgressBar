import React, { useState, useEffect } from 'react';
import './Progressbar.css';

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 500); // Adjust the speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress < 100 ? `${progress}% Loading...` : `${progress}% Completed`}
      </div>
    </div>
  );
};

export default Progressbar;
