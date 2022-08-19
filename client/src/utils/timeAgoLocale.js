const localeFunc = (number, index, totalSec) => {
  return [
    ["just now", "right now"],
    ["%s secs ago", "in %s secs"],
    ["1 min ago", "in 1 min"],
    ["%s mins ago", "in %s mins"],
    ["1 hr ago", "in 1 hr"],
    ["%s hrs ago", "in %s hrs"],
    ["1 day ago", "in 1 day"],
    ["%s days ago", "in %s days"],
    ["1 week ago", "in 1 week"],
    ["%s weeks ago", "in %s weeks"],
    ["1 month ago", "in 1 month"],
    ["%s months ago", "in %s months"],
    ["1 year ago", "in 1 year"],
    ["%s years ago", "in %s years"],
  ][index];
};

export default localeFunc;
