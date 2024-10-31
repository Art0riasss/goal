
let currentValue = 0
let meth ='undefined'
// number display
document.getElementById('one').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 1
})
document.getElementById('two').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 2
})
document.getElementById('three').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 3
})
document.getElementById('four').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 4
})
document.getElementById('five').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 5
})
document.getElementById('six').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 6
})
document.getElementById('seven').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 7
})
document.getElementById('eight').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 8
})
document.getElementById('nine').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 9
})
document.getElementById('zero').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 0
})
document.getElementById('plus').addEventListener('click', ()=>{
    meth = 'plus'
    currentValue = document.getElementById('num_display').value
    document.getElementById('num_display').value = ''
})
document.getElementById('minus').addEventListener('click', ()=>{
    meth = 'minus'
    currentValue = document.getElementById('num_display').value
    document.getElementById('num_display').value = ''
})
document.getElementById('result').addEventListener('click', ()=>{
if (meth ==='plus'){
    let nowNumb=document.getElementById('num_display').value
    document.getElementById('num_display').value = parseInt(currentValue)+(parseInt(nowNumb))
    meth = 'undefined'
}else if(meth === 'minus'){
    let nowNumb=document.getElementById('num_display').value
    document.getElementById('num_display').value = parseInt(currentValue)-(parseInt(nowNumb))
    meth = 'undefined'
}
})
