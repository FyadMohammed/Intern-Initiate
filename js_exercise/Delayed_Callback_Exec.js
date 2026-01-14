function invokeAfterDelay(callback){
    setTimeout(callback,1000);
}

function display_message(){
    console.log("hello");
}

invokeAfterDelay(display_message);