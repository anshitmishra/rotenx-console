export function Log() {
    
}
Log.success = function(msg:string) {
    console.log(`%c ${msg}`, 'color:darkgreen;background:lightgreen');
}
Log.danger = function (msg:string) {
    console.log(`%c ${msg}`, 'color:red;background:lightred');
}
Log.info = function (msg:string) {
    console.log(`%c ${msg}`, 'color:black;background:yellow');
}
Log.Color = function (msg:string,textColor:any,bgColor:any,) {
    console.log(`%c ${msg}`, `color:${textColor};background:${bgColor}`);
}
