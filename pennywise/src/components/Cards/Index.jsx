import React from "react";
import "./styles.css";
import { Card, Row } from "antd";
import Button from "../Button/Index";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";

export default function Cards({
  income,
  expenses,
  totalBalance,
  showExpenseModal,
  showIncomeModal,
  setTransactions,
  transactions,
}) {
  //reset balance function
  async function resetBalance() {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const uid = user.uid;

      const txnRef = collection(db, "users", uid, "transactions");
      const snapshot = await getDocs(txnRef);

      const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);
      // for resetting local state after balance reset
      setTransactions([]);
      if (transactions.length === 0) {
        toast.info("No transactions to delete");
        return;
      }
      toast.success("All data reset successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to reset balance");
    }
  }
  return (
    <div>
      <Row className="my-row">
        <Card bordered={true} className="my-card">
          <h2>Current Balance</h2>
          <p>₹{totalBalance}</p>
          {totalBalance < 0 && (
            <p className="minus-balance">
              You're currently overspending. Try adjusting your expenses or adding more income.
            </p>
          )}
          <Button
            text="Reset Balance"
            blue={true}
            onClick={resetBalance}
            disabled={transactions.length === 0}
          />
        </Card>

        <Card bordered={true} className="my-card">
          <h2>Total Income</h2>
          <p>₹{income}</p>
          <Button text="Add Income" blue={true} onClick={showIncomeModal} />
        </Card>

        <Card bordered={true} className="my-card">
          <h2>Total Expenses</h2>
          <p>₹{expenses}</p>
          <Button text="Add Expenses" blue={true} onClick={showExpenseModal} />
        </Card>
      </Row>
    </div>
  );
}
