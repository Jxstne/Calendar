function showTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    document.getElementById('currentTime').innerHTML = now.toLocaleString('en-US', options);
}

showTime();
setInterval(showTime, 1000);

