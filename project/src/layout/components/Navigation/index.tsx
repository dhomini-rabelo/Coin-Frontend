import { ReactNode } from "react";
import { Div } from "./styles";

export function Navigation({children}: {children: ReactNode}) {
    return (
        <Div.container>
            {children}
        </Div.container>
    )
}