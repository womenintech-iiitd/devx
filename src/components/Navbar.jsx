export default function Navbar() {
  return (
    <header className="nav" id="nav">
      <div className="nav__inner container">
        <a href="#home" className="nav__brand">WIT IIITD</a>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#pillars">Pillars</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>
          <a href="#join" className="btn-nav">Join Us</a>
        </nav>
      </div>
    </header>
  )
}
