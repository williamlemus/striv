export const secondsToTime = secs => {
  let hours = Math.floor(secs/3600);
  let minutes = Math.floor(secs/60)%60;
  let seconds = secs%60;
  return `${hours < 10 ? '0' + hours : hours }:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds: seconds}`;
}
