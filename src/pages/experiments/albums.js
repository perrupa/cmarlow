import React from "react"
import "../../style/style.scss"

const Albums = () => {

  return (

    <div>
      <nav>
        <h2>Some of my favourite tunes</h2>

        <section style={{ display: "grid", margin: "auto", "max-width": "70vw" }}>

          <iframe style={{ "border-radius": "12px" }} src="https://open.spotify.com/embed/track/52y4KhkcAbYcogFg2u7UVP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe style={{ "border-radius": "12px" }} src="https://open.spotify.com/embed/track/4bJ7tMJqfYmkKgCYzaaG4B?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe style={{ "border-radius": "12px" }} src="https://open.spotify.com/embed/track/1btQN0JRiAzQxdKdJXADUh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </section>
      </nav>
    </div>
  )
}

export default Albums;
