import React from 'react';
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
      <footer className={` d-flex flex-column justify-center align-center p-20 ${ styles.footer } `}>
          Copyright © 2022 Facebook Inc.
      </footer>
  )
}
