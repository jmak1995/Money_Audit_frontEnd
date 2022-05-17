import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/logout";

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
      <table className="container">
        <thead className="t_list1">
          <td>amount</td>
          <td>type</td>
          <td>date</td>
        </thead>
        <tbody>
          {transactions.map((t) => {
            return (
              <tr className="t_list">
                <td>{t.amount}</td>
                <td>{t.transaction_type}</td>
                <td>{new Date(t.transcation_date).toDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => (window.location.href = "/addInfo")}
        value="click here"
      >
        AddTransaction
      </button>
      <LogoutButton />
    </div>
  );
}

export default Home;
