import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(" ");
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          navigate("/login");
        }

        return res.json();
      })
      .then((data) => {
        setTransactions(data.data);
        setUser(data.username.user);
      })
      .catch((e) => {
        if (e.status === 401) {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className="home">
      <h1>Welcome {user}</h1>
      <div className="highlighted">
        Latest Transactions
        <div className="container">
          <div className="t_list1">
            <h4>amount</h4>
            <h4>type</h4>
            <h4>date</h4>
          </div>
          {transactions.map((t) => {
            return (
              <div className="t_list">
                <h4>{t.amount}</h4>
                <h4>{t.transaction_type}</h4>
                <h4>{new Date(t.transcation_date).toDateString()}</h4>
              </div>
            );
          })}
          <button
            onClick={() => (window.location.href = "/addInfo")}
            value="click here"
          >
            AddTransaction
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
