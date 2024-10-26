import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <Logo />
                    <S.FooterContent>
                        <p>© 2025 todos los derechos reservados por DLZ</p>
                    </S.FooterContent>
                </S.FooterContainer>
                <Socials />
            </Container>
        </S.FooterStyled>
    );
};
