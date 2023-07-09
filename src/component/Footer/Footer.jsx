import React from "react";

function FooterLayout() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p className="h1 logo">
            <a href="#">
              Portfolio<span>.</span>
            </a>
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} <a href="#">Ferd</a>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default FooterLayout;
