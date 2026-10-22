export default function Hero() {
  return (
    <section id="home" style={{ padding: '7rem 0' }}>
      <div className="container">
        <p className="hero__label">IIITD · Est. 2019</p>

        <h1 className="hero__title">
          Women in Tech<br />IIITD
        </h1>

        <p className="hero__sub">
          A warm welcome to all freshers!
          <br /><br />
          Feel free to contribute to this repository without hesitation. Using large language models is absolutely fine, but make sure you understand what you contribute and learn something from every pull request.
          <br /><br />
          Remember, the goal is not just to build, but to learn and grow with every contribution.
          <br /><br />
          Our mission is simple: Learn technology by building with the web, one contribution at a time.
        </p>

        <div className="hero__actions">
          <a href="#join" className="btn-primary">Join the Community</a>
          <a href="#about" className="btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  )
}
