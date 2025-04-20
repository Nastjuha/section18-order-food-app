import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="main-header">
      <div className="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
