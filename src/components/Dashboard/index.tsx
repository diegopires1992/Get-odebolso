import { Container } from "./styles";
import { Summary } from "../Summary";
import { TrasactionsTable } from "../TransactionsTable";

export const Dashboard: React.FC = () => {
    return (
        <Container>
        <Summary></Summary>
        <TrasactionsTable></TrasactionsTable>
        </Container>
    );
}
