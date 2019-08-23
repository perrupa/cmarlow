import React from "react"

export const Container = ({ children }) => {
  return (
    <section
      style={{
        maxWidth: "590px",
        margin: "auto",
      }}
    >
      {children}
    </section>
  )
}
