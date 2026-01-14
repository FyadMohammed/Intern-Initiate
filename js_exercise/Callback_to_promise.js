function callback_to_promise(arg1, arg2, callback){
    setTimeout(()=>{
        return arg1 + arg2;
    },1000);
}