let currentClock;

function searchBackend(){
    console.log(`request sent to backend`);
    
}

function debouncedSearchBackend(){  
    // we have to spam the debouncedSearchBackend and send it to the searchBackend() function

    // debouncedSearchBackend() ka yhi role hai ki search bar se chiz uthake use fir searchBackend ye bhejte rehna

    // start a clock for 30 seconds
    clearTimeout(currentClock); // stop the old clock and start the new clock 
    currentClock = setTimeout(searchBackend, 30);
}

debouncedSearchBackend()
debouncedSearchBackend()