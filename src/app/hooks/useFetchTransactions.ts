import { fetchAllTransactions } from "@/api/transactions";
import { Transaction } from "@/types";
import { useEffect, useState } from "react";

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    const handleFetchAllTransactions = async () => {
      try {
        const response = await fetchAllTransactions();

        if (ignore) setTransactions(response);
      } catch (error) {
        console.error(error);
      }
    };

    let ignore = false;

    handleFetchAllTransactions();

    return () => {
      ignore = true;
    };
  }, []);

  return { transactions };
};
