import logoImg from "../../assets/logo.svg";
import { Container,Content } from "./styles";

interface HeaderPros{
    onOpenNewtransactionModal:() => void;
}


export function Header({onOpenNewtransactionModal}:HeaderPros) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="gestao do bolso"></img>
                <button type="button" onClick={onOpenNewtransactionModal}>
                    Nova transação
                </button>
             
            </Content>
        </Container>
    )
}