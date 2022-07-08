export default function Card() {
  return (
    <div className="card">
      <img
        src="./images/katie-zaferes.png"
        alt="Katie Zaferes"
        className="card--image"
      ></img>
      <div className="card--stats">
        <img src="./images/star.png" alt="Star" className="card--star"></img>
        <span>5.0</span>
        <span className="grey">(6) ·</span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with banana jecas</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
