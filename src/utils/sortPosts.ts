type sortType = "abs" | "tag";
export const sortPosts = (posts: any, type: sortType) => {
  const next = [...posts];
  if (type === "abs") {
    next.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (type === "tag") {
    next.sort((a, b) => {
      if (a.tags[0] < b.tags[0]) {
        return -1;
      }
      if (a.tags[0] > b.tags[0]) {
        return 1;
      }
      return 0;
    });
  }
  console.log("next", next);

  return next;
};
