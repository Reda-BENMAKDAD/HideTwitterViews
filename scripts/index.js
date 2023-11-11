// this is the scripts that will be injected and run on the page

// i set this to run every second
// because if it's ran only once, there might be new tweets pushed to the feed
// after the first run, and therefore will not be deleted
console.log("code is ran")
setInterval(() => {
  // this selects all the elements with the label "Views"
  let linksToRemove = document.querySelectorAll('a[aria-label*="views"]');
  linksToRemove.forEach((link) => {
    link.parentElement.remove();
  });
}, 1000);
