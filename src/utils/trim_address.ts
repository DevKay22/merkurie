export default function trimAddress(data: string): string {
  // * Convert incoming data to string.
  const value = data;
  // * This Function takes the first 5 characters of the string, add 4 dots to the string, and add the last 5 characters of the string
  return value?.substring(0, 5) + "...." + value?.substring(value.length - 4);
}
