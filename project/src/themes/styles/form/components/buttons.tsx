import { useState, ReactNode } from "react"
import { Div } from '../index'


export function ButtonForm({ children, active=true, loadAnimation=true }: { children: ReactNode, active: boolean, loadAnimation: boolean }) {
    let [clicked, setClicked] = useState<boolean>(false)

    return loadAnimation && clicked ? (
        <Div.buttonComponentStyle>
            <button disabled={!active || clicked} className="stage"><span className="dot-flashing"></span></button>
        </Div.buttonComponentStyle>
    ): (
        <Div.buttonComponentStyle>
            <button disabled={!active || clicked} onClick={() => { setClicked(true) }}>{children}</button>
        </Div.buttonComponentStyle>
    )
}