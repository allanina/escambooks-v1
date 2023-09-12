import Sidebar from "../Sidebar/Sidebar";
import Logo from "../logo/Logo";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <section className="logo-container">
          <Logo />
          <input
            className="search-input"
            type="text"
            placeholder="Digite sua pesquisa aqui"
          />
        </section>
        <section className="navbar-profile-container">
          <div className="profile-picture"></div>
          <span className="profile-user-name">Elle Woods</span>
        </section>
      </nav>
      <Sidebar />
    </>
  );
}

export default Navbar;
