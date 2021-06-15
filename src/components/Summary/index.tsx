import React from 'react';
import incomeImg from '../../assets/up.svg'
import outcomeImg from '../../assets/down.svg'
import totalImg from '../../assets/money.svg'

import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransctionsContext';

export const Summary: React.FC = () => {
    const { transactions } = useTransactions()

    // console.log("sumarry", transactions)

    // const totalDeposits = transactions.reduce((acc,transaction)=>{
    //     if (transaction.type === 'deposit'){
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // },0)

    // const saidasDeposits = transactions.reduce((acc,transaction)=>{
    //     if (transaction.type === 'withdraw'){
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // },0)

    const sumarry = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(sumarry.deposits)
                    }
                </strong>

            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas"></img>
                </header>
                <strong>
                    - {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(sumarry.withdraw)
                    }
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(sumarry.total)
                    }
                </strong>
            </div>
        </Container>
    );
}
