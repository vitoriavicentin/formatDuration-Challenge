function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const timeUnits = [
    { unit: "year", seconds: 365 * 24 * 60 * 60 },
    { unit: "day", seconds: 24 * 60 * 60 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  let duration = "";
  let remainingSeconds = seconds;
  let unitCount = 0;

  for (const unit of timeUnits) {
    const count = Math.floor(remainingSeconds / unit.seconds);

    if (count > 0) {
      unitCount++;
      duration += `${count} ${unit.unit}${count > 1 ? "s" : ""}${
        unitCount < 2 ? " and " : ", "
      }`;
      remainingSeconds -= count * unit.seconds;
    }
  }

  return duration.slice(0, -2); // Remove trailing comma and space
}

// Sample input and output
console.log(formatDuration(62)); // Output: 1 minute and 2 seconds
