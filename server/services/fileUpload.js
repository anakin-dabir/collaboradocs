import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadFile = (file) => {
  file.mv(path.join(__dirname, "..", "public", file.name));
};

export default uploadFile;

export const publicPath = path.join(__dirname, "..", "public");
