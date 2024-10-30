let currentValue = 0
let meth ='undefined'
document.getElementById('one').addEventListener('click', ()=>{
    document.getElementById('num_display').value += 1
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
