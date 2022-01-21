// çoğu zaman if ve else ile yaptığımız şeyleri switch ile de yapabiliriz. Koşul çok fazlaysa switch clean code için seçilmeli

let category0 ="telefon";

switch(category0){
    case "telefon":
        console.log("telefon kategorisi");
    break;
    case "bilgisayar":
        console.log("bilgisayar kategorisi");
    break;        
}

let category1 ="beyaz eşya";

switch(category1){
    case "telefon":
        console.log("telefon kategorisi");
    break;
    case "bilgisayar":
        console.log("bilgisayar kategorisi");
    break;
    default:
        console.log("yanlış kategori");         
}

let day;

switch (new Date().getDay()){
    case 0:
        day = "pazar";
    break;
    case 1:
        day ="pazartesi";
    break;
    case 2:
        day ="salı";
    break;
    case 3:
        day ="çarşamba";
    break;
    case 4:
        day ="perşembe";
    break;
    case 5:
        day ="cuma";
    break;
    case 6:
        day ="cumartesi";
    break;
}

console.log(`Bugün günlerden ${day}`);

let day1;

switch (new Date().getDay()){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day1 = "hafta içi";
    break;

    case 0:
    case 6:
        day1 ="hafta sonu";
    break;
}

console.log(`Bugün ${day1}`);

// if else yaptığımız uygulamanın aynısını burada da yapalım 

// if ( age>0 && age<12){
//     console.log(`${first} is a child `);
//     }else if (age>=13 && age<19 ){  // else if ile bir koşul daha bağlayabiliriz
//     console.log(`${first} is a teenager`);
//     } else{
//         console.log(`${first} is a adult`);
//     }

const first = "ozan";
const age = 22;

    switch (true){
        case (age>0 && age<12):
            console.log(`${first} is a child`);
            break;
        case (age>=13 && age <=18):
            console.log(`${first} is a teenager`);
            break;
        default:
            console.log(`${first} is a adult`);
    }

    
    switch (true){
        case (age>0 && age<12):
            console.log(`${first} is a child`);
            break;
        case (age>=13 && age <=18):
            console.log(`${first} is a teenager`);
            break;
        case (age>=19 && age<30):
            console.log(`${first} is a adult`);
            break;
    }

    // if else yerine switch | switch yerine if else kullanılabilir hangisi daha clean code oluyorsa onu seçmeniz gerekir ama