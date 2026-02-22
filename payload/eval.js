window.onload = function() {
  if (location.hash.length > 1) {
    eval(atob(location.hash.slice(1)));
  }
};
