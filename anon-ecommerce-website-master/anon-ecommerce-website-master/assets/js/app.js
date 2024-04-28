if ('serviceWorker in navigator') {  // navigator represents the browser object
    navigator.serviceWorker.register('./sw.js')
        // asynchronous operation so it will return a promise 
        .then((reg) => { // promise gets resolved 
            console.log('Service Worker Registered', reg)
        })
        .catch((err) => console.log('Service Worker not registered', err))
    // if promise gets rejected 

} 