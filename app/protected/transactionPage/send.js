import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiCopy } from "react-icons/fi";

function Send() {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSend = () => {
    if (amount && walletAddress) {
      const newTransaction = {
        id: transactions.length + 1,
        amount,
        walletAddress,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      setTransactions([...transactions, newTransaction]);
      setAmount("");
      setWalletAddress("");
      toast.success("Transaction successful");
    }
  };

  const handleCopyToClipboard = (address) => {
    navigator.clipboard.writeText(address);
    toast.success("Wallet address copied!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Send Crypto</h2>
        <div className="bg-white p-6 rounded-md shadow-md mb-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 md:flex-grow"
            />
            <input
              type="text"
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="border p-2 md:flex-grow"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2">Transaction ID</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Wallet Address</th>
                <th className="border p-2">Trx Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border p-2">{transaction.id}</td>
                  <td className="border p-2">{transaction.amount}</td>
                  <td className="border p-2">
                    <div className="flex items-center">
                      <div className="truncate w-28 sm:w-40">
                        {transaction.walletAddress}
                      </div>
                      <button
                        className="ml-2 text-blue-500 hover:underline focus:outline-none"
                        onClick={() =>
                          handleCopyToClipboard(transaction.walletAddress)
                        }
                      >
                        <FiCopy className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                  <td className="border p-2">{`${transaction.date} ${transaction.time}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Send;
