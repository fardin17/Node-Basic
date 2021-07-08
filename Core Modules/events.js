const EventEmitter = require('events')
const emitter = new EventEmitter();


//register a listener for bellRing event
//(event ta call hole ki korbe tar instruction)

emitter.on('bellRing', ({period,text}) => {
    console.log(`We need to run!. Our ${period} ${text}`)
})

// raise an event (event call howa)
setTimeout(() => {
    emitter.emit('bellRing', {
        period: '1st',
        text: 'period ended'
    })
},2000)

