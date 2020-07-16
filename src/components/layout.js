import React from "react"
import NavBar from "./navbar"

export default ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      {children}
      <footer>
        <NavBar />
      </footer>
    </>
  )
}
