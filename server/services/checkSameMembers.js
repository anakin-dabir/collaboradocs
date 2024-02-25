export default function haveSameMembers(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    new Set(arr1.map((obj) => obj._id)).size ===
      arr1.map((obj) => arr2.some((o) => o._id === obj._id)).filter(Boolean).length
  );
}
