//Exemplu + Exercitiu
import React, { useState } from "react";

const App = () => {
  const [steps, setSteps] = useState(0);

  return (
    <div className="container">
      {steps === 0 ? (
        <p>You haven't taken any steps today!</p>
      ) : (
        <p>Today you've taken {steps} steps!</p>
      )}

      <button onClick={() => setSteps(steps + 1)}>Click Me</button>
    </div>
  );
};

export default App;
