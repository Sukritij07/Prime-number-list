import React, { useState } from "react";
import './App.css';

function App() {
  const [limit, setLimit] = useState("");
  const [primes, setPrimes] = useState([]);

  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Function to get prime numbers till the given limit
  const getPrimeNumbers = (limit) => {
    let primeNumbers = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers;
  };

  // Simulate HTTP GET Request
  const handleGetRequest = () => {
    if (limit !== "") {
      const primeNumbers = getPrimeNumbers(Number(limit));
      setPrimes(primeNumbers);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div className="App">
      <h1>Get Prime Numbers</h1>
        <input
          type="number"
          placeholder="Enter a number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
        <button onClick={handleGetRequest}>
          Get Prime Numbers
        </button>
      {primes.length > 0 && (
        <div>
          <h2>Prime numbers till {limit}:</h2>
          <p>{primes.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
