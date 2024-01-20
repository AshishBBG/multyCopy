let press = false;
let index = null;
let ctrl = false;
window.addEventListener('keydown', function(e){
    if(e.key === 'Control'){
        ctrl = true;
    }
    press = true;
    index = e.key;
    // console.log(e.key)

});
window.addEventListener('keyup', function(e){
    if(e.key === 'Control'){
        ctrl = false;
    }
    press = false;
});


window.addEventListener('mouseup', mouseSelect);

let arr = [];
function mouseSelect(){
    // console.log('inside')
    if(!press){
        return;
    }
    // console.log('ii')
    let val = getSelection().toString();
    arr[index] = val;
    // navigator.clipboard.writeText(arr[index]);
    console.log(arr[index])
}

window.addEventListener("keydown", function(e){
    if(!ctrl){
        return;
    }
    let i = e.key;
    navigator.clipboard.writeText(arr[i]);
})