const AppDivider = ({ height = 50, color = "black", thickness = 2, style }) => {
  return (
    <div
      style={{
        borderLeft: `${thickness}px solid ${color}`,
        height: height,
        ...style,
      }}
    />
  );
};
export default AppDivider;
