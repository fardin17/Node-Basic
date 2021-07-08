const EventEmitter = require('events')

class School extends EventEmitter {
    periodStart() {
        console.log('Class started!')
    
    // raise an event (event call howa)
setTimeout(() => {
    this.emit('bellRing', {
        period: '1st',
        text: 'period ended'
    })
},2000)
        
    }
    
}

module.exports=School