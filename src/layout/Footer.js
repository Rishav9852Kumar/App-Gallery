import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="text-center bg-primary text-white text-uppercase pb-2">
      <footer class="footerCopyRight">
        <a href="https://github.com/Rishav9852Kumar/App-Gallery" target="blank">
          <div className="pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
        </a>
        <b>
          <p className="pl-2">Source Code</p>
        </b>
      </footer>

      <footer class="footerContent">
        <div>
          <img
            src="https://www.filepicker.io/api/file/jxg6tcdJRluGIKUlpYn8"
            alt="/"
            id="footerlogo"
          />{" "}
        </div>
        <div>
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png"
            alt="/"
            id="footerlogo"
          />{" "}
        </div>
        <div>
          <img
            src="https://bulma.io/images/bulma-logo.png"
            id="footerlogo"
            alt="/"
          />
        </div>
        <div>
          <img
            src="https://www.alioze.com/wp-content/uploads/2016/11/react-js.png"
            alt="/"
            id="footerlogo"
          />
        </div>
        <div>
          <img
            src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-knockout.png"
            alt="/"
            id="footerlogo"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
