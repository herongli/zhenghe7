function require(url){
    document.write('<script src="'+url+'"></script>')
    (function(){
        return console.log(1111)
    })()
}
function define(arr,fn){
    get(function(i,v){
        fn();
    })
    (function(){
        return console.log(2222)
    })()
}