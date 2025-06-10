interface IProgressBarProps {
  value: number;
  max?: number;
  min?: number;
  onComplete?: () => void;
}

const ProgressBar = ({
  value = 0,
  max = 100,
  min = 0,
  onComplete = () => {},
}: IProgressBarProps) => {
  const textColor = value > 50 ? "text-white" : "text-black";

  const finalValue = Math.min(max, Math.max(value, min));

  if (finalValue >= max) {
    onComplete();
  }

  return (
    <div
      className={`w-[700px] h-7 rounded-full bg-gray-200 relative overflow-hidden`}
    >
      <span
        className={`text-lg absolute w-full flex justify-center items-center ${textColor} z-50`}
      >
        {finalValue.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={finalValue}
        className="bg-green-600 h-full rounded-full"
        style={{
          transform: `scaleX(${finalValue / max})`,
          transformOrigin: "left",
          //   width: `${finalValue}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
