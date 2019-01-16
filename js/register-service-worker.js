if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/js/service-worker.js")
      .then(function() {
        console.log("Registration of service-worker success");
      })
      .catch(function() {
        console.log("Registration of service-worker fails");
      });
  });
} else {
  console.log("Browser doesn't support service-worker!");
}