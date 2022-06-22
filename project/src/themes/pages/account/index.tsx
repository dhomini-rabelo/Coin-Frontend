import { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function AccountPagesModel({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}