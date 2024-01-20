let mCnt = 0;
window.addEventListener("mouseup", function(){
    let val = getSelection().toString();
    mCnt+=1;
    if(val === ' ' || val === ''){
        mCnt-=1;
        return;
    }
    copy(mCnt, val);
    console.log(val)
})

let arr = [];
function copy(i, val){
    arr[i] = val;
}

window.addEventListener("keyup", function(e){
    console.log(e.key)
    // setTimeout(()=>{
        navigator.clipboard.writeText(arr[e.key])
    // },0)
})