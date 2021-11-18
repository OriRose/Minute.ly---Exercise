var video = document.querySelector('video')

function getCurrentTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime
}

console.log(getCurrentTime() + ' -- Starting the video event logger...')

video.onabort = () => {
    console.log(getCurrentTime() + ' -- Video was aborted')
}

video.oncanplay = () => {
    console.log(getCurrentTime() + ' -- Can start playing video')
}

video.oncanplaythrough = () => {
    console.log(getCurrentTime() + ' -- Can play through video without stopping')
}

video.ondurationchange = () => {
    console.log(getCurrentTime() + ' -- The video duration has changed')
}

video.onemptied = () => {
    console.log(getCurrentTime() + ` -- The video's current playlist is empty`)
}

video.onended = () => {
    console.log(getCurrentTime() + ` -- The video's current playlist has ended`)
}

video.onerror = () => {
    console.log(getCurrentTime() + ` -- An error has occurred`)
}

video.onloadeddata = () => {
    console.log(getCurrentTime() + ' -- Video frame loaded')
}

video.onloadedmetadata = () => {
    console.log(getCurrentTime() + ' -- Video metadata loaded')
}

video.onloadstart = () => {
    console.log(getCurrentTime() + ' -- The browser is looking for the video')
}

video.onpause = () => {
    console.log(getCurrentTime() + ' -- Video paused')
}

video.onplay = () => {
    console.log(getCurrentTime() + ' -- Video played')
}

video.onplaying = () => {
    console.log(getCurrentTime() + ' -- Video resumed')
}

video.onprogress = () => {
    console.log(getCurrentTime() + ' -- Video resumed')
}

video.onratechange = () => {
    console.log(getCurrentTime() + ' -- Video playing speed changed')
}

video.onseeked = () => {
    console.log(getCurrentTime() + ' -- User finished skipping to a new position in the video')
}

video.onseeking = () => {
    console.log(getCurrentTime() + ' -- User started skipping to a new position in the video')
}

video.onstalled = () => {
    console.log(getCurrentTime() + ' -- The browser is trying to get media data, but data is not available')
}

video.onsuspend = () => {
    console.log(getCurrentTime() + ' -- The browser is intentionally not getting media data')
}

video.ontimeupdate = () => {
    console.log(getCurrentTime() + ` -- The video's current playback position has changed`)
}

video.onvolumechange = () => {
    console.log(getCurrentTime() + ` -- The video's volume level has changed`)
}

video.onwaiting = () => {
    console.log(getCurrentTime() + ' -- The video stopped because it need to buffer the next frame')
}

console.log(getCurrentTime() + ' -- Event logger ready')