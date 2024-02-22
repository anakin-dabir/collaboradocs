export default function shortName(name = "mariko yashida") {
  return `${name[0].toUpperCase()}${name[name.length - 1].toUpperCase()}`;
}
