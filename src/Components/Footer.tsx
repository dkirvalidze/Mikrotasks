import React from "react";

type  FooterType = {
    content: string
}

export const Footer = (props: FooterType) => {
    return (
        <div>{props.content}</div>
    )
}