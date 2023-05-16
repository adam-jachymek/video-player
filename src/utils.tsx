export const parseDuration = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const parsedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + parsedSeconds;
};
