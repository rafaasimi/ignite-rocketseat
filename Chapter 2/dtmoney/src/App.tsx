import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { useState } from "react";



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
    <>
      <Header onOpenNewTransctionModal={handleOpenNewTransctionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
