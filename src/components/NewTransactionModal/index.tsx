import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';

import closeImg from '../../assets/close.svg';
import upImg from '../../assets/up.svg';
import downImg from '../../assets/down.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransctionsContext';



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            category,
            amount,
            type,
        })
        
        setType('deposit');
        setCategory('');
        setTitle('');
        setAmount(0);

        onRequestClose();

    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        onClick={() => { setType('deposit') }}
                        activeColor="green"
                    >
                        <img src={upImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => { setType('withdraw') }}
                        activeColor="red"
                    >
                        <img src={downImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
