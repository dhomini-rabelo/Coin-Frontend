import { useState, ReactNode } from "react"
import { Div } from '../index'


export function ButtonForm({ children }: { children: ReactNode }) {
    let [clicked, setClicked] = useState<boolean>(false)

    return !clicked ? (
        <Div.buttonComponentStyle>
            <button onClick={() => { setClicked(true) }}>{children}</button>
        </Div.buttonComponentStyle>
    ): (
        <Div.buttonComponentStyle>
            <button className="stage"><span className="dot-flashing"></span></button>
        </Div.buttonComponentStyle>
    )
}