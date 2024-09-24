import React from "react";

const FooterContainer = ({ children, className }) => {
    return (
        <footer className={className}>{children}</footer>
    );
};

export default FooterContainer;
