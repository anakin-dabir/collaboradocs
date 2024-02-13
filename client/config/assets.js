export const assetDir = "assets";
export const entryFileNames = `${assetDir}/js/[name]-[hash].js`;
export const chunkFileNames = `${assetDir}/js/[name]-[hash]-chunk.js`;
const assets = [
  {
    output: `${assetDir}/img/[name]-[hash][extname]`,
    regex: /\.(png|jpe?g|gif|svg|webp|avif)$/,
  },
  {
    regex: /\.css$/,
    output: `${assetDir}/css/[name]-[hash][extname]`,
  },
  {
    output: `${assetDir}/js/[name]-[hash][extname]`,
    regex: /\.js$/,
  },
  {
    output: `[name][extname]`,
    regex: /\.xml$/,
  },
];

export function processAssetFileNames(info) {
  if (info && info.name) {
    const name = info.name;
    const result = assets.find((a) => a.regex.test(name));
    if (result) {
      return result.output;
    }
  }
  // default since we don't have an entry
  return `${assetDir}/[name]-[hash][extname]`;
}
