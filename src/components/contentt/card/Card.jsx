import './Content.css';

export const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">🌸 {title}</h2>
      <p className="card-text">{content}</p>
    </div>
  );
};
