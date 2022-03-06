import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddInfo() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState({
    amount: "",
    transaction_type: "income",
  });

  const onChange = (key, value) => {
    setTransactions({ ...transactions, [key]: value });
  };

  const onClick = () => {
    fetch("http://localhost:4000/addInfo", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(transactions),
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          window.location.href = "/";
        }
      });
  };
  return (
    <div className="form">
      <div className="t_container">
        <label for="amount">
          <b>amount</b>
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          name="amount"
          required
          onChange={(e) => onChange("amount", e.target.value)}
        />

        <label for="type">
          <b>type</b>
        </label>
        <select
          id="cars"
          name="cars"
          onChange={(e) => onChange("transaction_type", e.target.value)}
        >
          <option value="income">income</option>
          <option value="expenditure">expenditure</option>
        </select>

        <button className="button" onClick={onClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddInfo;

//task 1 : add catch errors
//task 2 : if not data
