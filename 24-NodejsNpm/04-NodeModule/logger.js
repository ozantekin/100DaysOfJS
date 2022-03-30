// tarayıcıya window.url yazarsak bu çıkıtıyı alırız

var url = 'http://logger.io/logger';

var name = "Ozan Tekin";

function log(message){
    console.log(message);
    console.log(__filename);
    console.log(__dirname);
}

// module.exports.url = url; // bunun private olmasını istediğimiz için yazmayız

// public tanımlama

// başka moduller içerisinden ulaşılabilir hale geldi

//module.exports.log = log; // log adında bir değişken tanımladık ve log founction dışarıya açtık

// tek tek tanımlamak object literal ile ikinci yol:
module.exports = {
    name: name,
    log: log
}

