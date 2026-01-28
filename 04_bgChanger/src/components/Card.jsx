const Card = ({ children }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px" }}>
      {children}
    </div>
  );
};

export default Card;
