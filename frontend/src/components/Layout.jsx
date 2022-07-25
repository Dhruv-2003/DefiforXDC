import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [address, setAddress] = useState("");
  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  async function connect() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log({ accounts });
  }

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <span className={styles.logo}>
            <Link href={"/"}>DefiForXDC</Link>
          </span>
          <ul
            className={
              isExpanded === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/create">
                <a className={styles.navlink}>Create</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/library">
                <a className={styles.navlink}>Library</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Dhruv-2003/DefiforXDC"
                  className={styles.navlink}
                >
                  GitHub
                </a>
              </span>
            </li>
            {/* <li className={styles.navitem}> */}
              {/* <Link href="/library"> */}
              {/* <a className={styles.navlink}> */}
                {/* {" "} */}
                {/* <button className={styles.connect}>Connect</button> */}
              {/* </a> */}
              {/* </Link> */}
            {/* </li> */}
          </ul>
          <button
            onClick={handleClick}
            className={
              isExpanded === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>

      {children}

      {/* footer */}
      <div className={styles.container}>
        <footer className={styles.footer}>
          Built by{" "}
          <a
            target="_blank"
            href="https://twitter.com/0xdhruva"
            rel="noopener noreferrer"
          >
            Dhruv Agarwal
          </a>
          <span>&</span>
          <a
            target="_blank"
            href="https://twitter.com/kushagrasarathe"
            rel="noopener noreferrer"
          >
            Kushagra Sarathe
          </a>
          &#9749;
        </footer>
      </div>
      {/* <footer className="footer">Kusahgra</footer> */}
    </>
  );
}
