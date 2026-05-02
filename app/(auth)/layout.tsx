import { ReactNode } from "react";

export default function AuthLayout( {children} : {
    children : ReactNode
} ) {
    return <div>
        this is the header
        {children}
        this is the footer
    </div>
}