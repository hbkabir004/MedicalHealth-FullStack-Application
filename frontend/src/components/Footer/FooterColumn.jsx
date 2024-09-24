import React from "react";

const FooterColumn = ({ title, links }) => {
  return (
    <footer className="max-md:mt-10">
      <h2 className="self-start text-lg font-bold text-sky-500 uppercase">
        {title}
      </h2>
      <nav className="mt-6 text-base leading-5 text-black text-opacity-50">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {link}
            <br />
            <br />
          </React.Fragment>
        ))}
      </nav>
    </footer>
  );
};

export default FooterColumn;
