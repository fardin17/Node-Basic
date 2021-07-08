const name = ['fardin', 'Tusher', 'jaki', 'Rasel']
const salary = 40000
//console.log(salary)
const publicFun = () => {
    return salary * name.length
}
//console.log(publicFun())
module.exports = { name, salary, publicFun }