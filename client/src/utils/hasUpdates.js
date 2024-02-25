export default function hasUpdates(newValues, initialValues) {
  for (const field in newValues) {
    if (newValues[field] !== initialValues[field]) {
      return true;
    }
  }
  return false;
}
