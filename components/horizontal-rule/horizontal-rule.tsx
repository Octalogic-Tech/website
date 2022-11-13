export function HorizontalRule() {
  return (
    <div
      style={{
        marginTop: "3rem",
        width: "100%",
        height: "2px",
        backgroundImage:
          "linear-gradient(-90deg, rgba(14, 30, 37, 0) 0, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 50%, rgba(14, 30, 37, 0) 100%)",
      }}
    ></div>
  );
}

export default HorizontalRule;
