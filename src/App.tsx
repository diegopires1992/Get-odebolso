import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TrasactionsProvider } from './hooks/useTransctionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTrasactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TrasactionsProvider>
      <Header onOpenNewtransactionModal={handleOpenNewTrasactionModal} />
      <Dashboard></Dashboard>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTrasactionModal} />
      <GlobalStyle />
    </TrasactionsProvider>
  );
}
