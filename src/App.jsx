import { useState } from "react";
import { add, subtract, multiply, divide } from "./math";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h1>Math Test</h1>

        {/* Input Section */}
        <div className="row g-2 mb-3">
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Num 1"
              value={num1}
              onChange={(e) => setNum1(Number(e.target.value))}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Num 2"
              value={num2}
              onChange={(e) => setNum2(Number(e.target.value))}
            />
          </div>
        </div>

        <hr />
        <h2 className="text-primary mb-4">Result: {result}</h2>

        {/* Buttons */}
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-success"
            onClick={() => setResult(add(num1, num2))}
          >
            Add
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setResult(subtract(num1, num2))}
          >
            Subtract
          </button>
          <button
            className="btn btn-info"
            onClick={() => setResult(multiply(num1, num2))}
          >
            Multiply
          </button>
          <button
            classname="btn btn-danger"
            onClick={() => setResult(divide(num1, num2))}
          >
            Divide
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
