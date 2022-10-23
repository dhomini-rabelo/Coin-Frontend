import { useState, ReactNode } from "react"
import { Loading } from "../../../../components/Loading"
import { Div } from '../index'


export function ButtonForm({ children, active = true, loadAnimation = true }: { children: ReactNode, active?: boolean, loadAnimation?: boolean }) {
    let [clicked, setClicked] = useState<boolean>(false)

    return loadAnimation && clicked ? (
        <Div.buttonComponentStyle>
            <button id="buttonComponent" disabled={!active || clicked} className="stage"><Loading /></button>
        </Div.buttonComponentStyle>
    ) : (
        <Div.buttonComponentStyle>
            <button id="buttonComponent" disabled={!active || clicked} onClick={() => { setClicked(true) }}>{children}</button>
        </Div.buttonComponentStyle>
    )
}