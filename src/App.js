import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 24),
  },
  {
    id: "e2",
    title: "New tv",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car insurance",
    amount: 24.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Tammam",
    amount: 4500000000000,
    date: new Date(1990, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
