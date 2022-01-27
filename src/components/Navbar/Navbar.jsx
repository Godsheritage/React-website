import './navbar.css'

const Navbar = () => {
  return <section>
    <div div className = "nav">
      <div className="logo"><a href="#">logo</a></div>
      <div className="close"><i className="fa fa-bars"></i></div>
      <div>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="close"><i className="fa fa-close"></i></div>
      </div>
    </div>
  </section>
};

export default Navbar;



