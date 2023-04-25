setInterval(()=>{
    views_things = document.querySelectorAll('[aria-label*="Views. View Tweet analytics"]');
    for(let i=0; i<views_things.length; i++) {
        views_things[i].remove();
    }
}, 1000);
