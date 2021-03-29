function getFromDB(url, callback){
    setTimeout(()=> {
        console.log('Reading from DB');
        callback ('GLSI');
    },2000)
}

getFromDB('url',(data)=>concat(data, data=>display(data)));

function concat(data, callback){
    setTimeout(()=> {
        console.log('concat data');
        callback ('GLSI-E');
    },2000)
}

function display(data){

    setTimeout(()=> {
        console.log('Data: ',data);
    },2000)
}
