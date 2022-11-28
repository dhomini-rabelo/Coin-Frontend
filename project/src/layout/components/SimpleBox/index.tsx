import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";
import { Div, H2, P } from "./styles";

export function SimpleBox({icon, title, description}: {icon: ReactNode, title: string, description: string}) {
    return (
        <Div.container>
            <Div.iconContainer>{icon}</Div.iconContainer>
            <Div.main>
                <H2.title>{title}</H2.title>
                <P.description>{description}</P.description>
            </Div.main>
            <Div.arrow>
                <CaretRight size={24} color="white" />
            </Div.arrow>
        </Div.container>
    )
}