const CONFIGURABLE_RADIUS = 600
const METHOD_TYPE = 'A' //set this to B for the alternative method (see exercise for more details)

const elements = document.querySelectorAll('img')

if (METHOD_TYPE === 'A'){
    elements.forEach((el) => {
        el.addEventListener('mouseenter', function (event) {
            var newElement = document.createElement("video")
            newElement.loop = true
            newElement.muted = true
            newElement.autoplay = true
            newElement.width = el.width
            newElement.height = el.height
            newElement.innerHTML = `<source src="https://apv-static.minute.ly/videos/v-50bc6db9-a73b-49b1-966838-aa07-4f3bbace5851-s29.92-37.16m.mp4" type="video/mp4">`
            newElement.addEventListener('mouseleave', function (event) {
                event.target.replaceWith(el)
            })
            event.target.replaceWith(newElement)
        })
    })
}
else if (METHOD_TYPE === 'B'){
    function getPositionAtCenter(element) {
        const { top, left, width, height } = element.getBoundingClientRect();
        return {
            x: left + width / 2,
            y: top + height / 2
        };
    }
    
    function getDistanceBetweenElements(a, b) {
        const aPosition = getPositionAtCenter(a);
        const bPosition = getPositionAtCenter(b);
    
        return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    }
    
    function replaceWithVideo(el) {
        var newElement = document.createElement("video")
        newElement.loop = true
        newElement.muted = true
        newElement.autoplay = true
        newElement.width = el.width
        newElement.height = el.height
        newElement.innerHTML = `<source src="https://apv-static.minute.ly/videos/v-50bc6db9-a73b-49b1-966838-aa07-4f3bbace5851-s29.92-37.16m.mp4" type="video/mp4">`
        
        //circle container is WIP, currently not rendered properly. Use at your own risk

        // var circleContainer = document.createElement("div")
        // circleContainer.style.width = CONFIGURABLE_RADIUS + 'px'
        // circleContainer.style.height = CONFIGURABLE_RADIUS + 'px'
        // circleContainer.style.backgroundColor = "red"
        // circleContainer.style.borderRadius = "50%"
        // circleContainer.style.display = "inline-block"
        // circleContainer.style.opacity = "0.4"
    
        // circleContainer.appendChild(newElement)
        // el.replaceWith(circleContainer)
    
        el.replaceWith(newElement)
    }
    
    const replacedElementsMap = new Array(elements.length).fill(1)
    
    for (let i = 1; i < elements.length; i++) {
        for (let j = 0; j < i; j++) {
            if (getDistanceBetweenElements(elements[i], elements[j]) < 2 * CONFIGURABLE_RADIUS && replacedElementsMap[j] === 1){
                replacedElementsMap[i] = 0
            }
        }
    }
    
    console.log(replacedElementsMap)
    
    replacedElementsMap.forEach((num,index) => {
        if(num === 1) replaceWithVideo(elements[index])
    })
}

else {
    console.log('Invalid method type.')
}