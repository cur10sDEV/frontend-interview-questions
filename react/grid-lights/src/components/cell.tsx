interface ICellProps {
  index: number;
  filled?: boolean;
  onClick?: () => void;
  color?: string;
  label?: string;
  disabled?: boolean;
}

const Cell = ({
  index,
  filled = false,
  onClick = () => {},
  color = "green",
  label = "Cell",
  disabled = false,
}: ICellProps) => {
  return (
    <button
      key={index}
      className="border size-32 cursor-pointer"
      style={{
        backgroundColor: filled ? color : "white",
      }}
      disabled={disabled}
      aria-label={label}
      onClick={onClick}
    ></button>
  );
};

export default Cell;
