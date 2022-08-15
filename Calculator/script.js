function display(val){
    document.getElementById("displayScreen").innerHTML+=val
}

function clearScreen(){
    document.getElementById("displayScreen").innerHTML=''
}

function calculate(){
    var p = document.getElementById("displayScreen").innerHTML
    var q = eval(p)
    document.getElementById("displayScreen").innerHTML=q
}

function keyboard(event){
    if(event.key === '1'){
        display('1')
    }
    console.log(event)
}

// window.addEventListener('keydown', keyboard)