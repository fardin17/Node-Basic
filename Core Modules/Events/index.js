const school =require('./school')
const School = new school()

//register a listener for bellRing event
//(event ta call hole ki korbe tar instruction)
School.on('bellRing', ({ period, text }) => {
    console.log(`We need to run!. Our ${period} ${text}`)
})

School.periodStart()
