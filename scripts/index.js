// this is the scripts that will be injected and run on the page
// because i referred to it in the manifest.json in the content_scripts section
setInterval(()=>{
    // this selects all the elements with the label "Views. View Tweet analytics"
    views_things = document.querySelectorAll('[aria-label*="Views. View Tweet analytics"]');
    for(let i=0; i<views_things.length; i++) {
        // and then removes them
        views_things[i].remove();
    }
}, 1000);
