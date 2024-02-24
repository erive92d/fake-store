export const getSavedIds = () => {
  const savedIds = localStorage.getItem("saved_ids")
    ? JSON.parse(localStorage.getItem("saved_ids"))
    : [];

  return savedIds;
};

export const saveId = (itemId) => {
  if (itemId.length) {
    localStorage.setItem("saved_ids", JSON.stringify(itemId));
  } else {
    localStorage.removeItem("saved_ids");
  }
};
