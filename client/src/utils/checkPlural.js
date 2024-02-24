export default function checkPlural(number, string, type = "s") {
  return `${string}${number > 1 ? type : ""}`;
}
