export default function truncateString(str, maxNum) {
  if(str.length <= maxNum) {
    return str;
  } else {
    return str.slice(0, maxNum) + '...'
  }
}