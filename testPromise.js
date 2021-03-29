function getFromDB(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            if(url=='0')
                reject('Invalid URL');
            console.log('Reading from DB');
            resolve ('GLSI');
        },2000)
    })}

    function concat(data){
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {
                console.log('concat data');
                resolve ('GLSI-E');
            },2000)
        })
    }

    function display(data){

        setTimeout(()=> {
            console.log('Data: ',data);
        },2000)
    }

getFromDB('url').then((data)=>concat(data)).then((concated)=>display(concated)).catch(err => console.log('Error:',err));
