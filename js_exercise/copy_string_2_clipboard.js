const copy_to_clipboard = async (str) => {
    try{
        //new method
        await navigator.clipboard.writeText(str);
    }catch(err){
        //old method
        console.error('Failed to copy text:',err);
        
        //create a text area
        const el = document.createElement('textarea');
        
        //value of str is assigned to el.value
        el.value = str;
        el.setAttribute('readonly',''); // set to read only mode
        el.style.position = 'absolute'; // position is set to absolute
        el.style.left = '-9999px'; // Hiding from the view

        document.body.appendChild(el);
        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if(selected){
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }
};