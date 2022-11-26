import { useState, ReactNode } from "react"
import { Loading } from "../../../../components/Loading"
import { Div } from '../index'


export function ButtonForm({ children, active = true }: { children: ReactNode, active?: boolean }) {
    return !active ? (
        <Div.buttonComponentStyle>
            <button id="buttonComponent" type="submit" disabled className="stage"><Loading /></button>
        </Div.buttonComponentStyle>
    ) : (
        <Div.buttonComponentStyle>
            <button id="buttonComponent" type="submit">{children}</button>
        </Div.buttonComponentStyle>
    )
}