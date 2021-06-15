import { useTransactions } from "../../hooks/useTransctionsContext";
import { Container } from "./styles";


export function TrasactionsTable() {
    const { transactions } = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {
                                        new Intl.DateTimeFormat('pt-BR').format(
                                            new Date(transaction.createdAt)
                                        )
                                    }
                                </td>
                            </tr>
                        );
                    })}
                    {/* <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - RS 1.100</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr> */}

                </tbody>
            </table>
        </Container>
    );
}