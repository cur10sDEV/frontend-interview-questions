export const convert12To24 = (time12) => {
  let [time, modifier] = time12.split(" ");
  let [hours, minutes, seconds] = time.split(":");

  modifier = modifier.toLowerCase();
  hours = parseInt(hours, 10);

  if (modifier === "am") {
    if (hours === 12) hours = 0;
  } else if (modifier === "pm") {
    if (hours !== 12) hours += 12;
  }

  const hh = hours.toString().padStart(2, "0");

  if (seconds !== undefined) {
    return `${hh}:${minutes}:${seconds}`;
  } else {
    return `${hh}:${minutes}`;
  }
};
