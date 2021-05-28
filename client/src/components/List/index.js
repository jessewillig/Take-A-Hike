import React from "react";
import "./style.css";

export const List = ({children}) => (
    <ul className="uk-container-expand uk-text-center">
        {children}
    </ul>
);

export function ListItem({children}) {
    return <li className="uk-list uk-list-striped uk-list-large">{children}</li>
}