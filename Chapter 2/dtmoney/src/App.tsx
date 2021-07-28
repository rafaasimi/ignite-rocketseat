import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] =
    useState(false);

  function handleOpenNewTransctionModal() {
    setIsNewTransctionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransctionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransctionModal={handleOpenNewTransctionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
