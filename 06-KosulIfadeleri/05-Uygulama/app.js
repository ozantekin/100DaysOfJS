var carInfo=[

    {
        id:"Bmw11",
        model:"Bmw1",
        yil:2015,
        color:"white",
        servisKayitlari:[
            {
                id:"bmw11_1",
                tarih:"20.01.2016",
                km:"13000",
                ucret:"1200",
                detay:[
                    {id:"bmw11_1_1",aciklama:"yağ değişimi",ucret:300},
               
                    {id:"bmw11_1_2",aciklama:"filtre değişimi",ucret:400},
              
                    {id:"bmw11_1_3",aciklama:"lastik değişimi",ucret:500}
                ]
            },
            {
                id:"bmw11_2",
                tarih:"21.02.2017",
                km:"21000",
                ucret:"2100",
                detay:[
                    {id:"bmw11_2_1",aciklama:"yağ değişimi",ucret:300},
               
                    {id:"bmw11_2_2",aciklama:"filtre değişimi",ucret:400},
              
                    {id:"bmw11_2_3",aciklama:"lastik değişimi",ucret:800},
    
                    {id:"bmw11_2_4",aciklama:"balata değişimi",ucret:600}
                ]
            }
            
        ]
    },
    {
        id:"Bmw12",
        model:"Bmw2",
        yil:2015,
        color:"white",
        servisKayitlari:[
            {
                id:"bmw12_1",
                tarih:"20.01.2016",
                km:"13000",
                ucret:"1200",
                detay:[
                    {id:"bmw12_1_1",aciklama:"yağ değişimi",ucret:300},
               
                    {id:"bmw12_1_2",aciklama:"filtre değişimi",ucret:400},
              
                    {id:"bmw12_1_3",aciklama:"lastik değişimi",ucret:500}
                ]
            },
            {
                id:"bmw12_2",
                tarih:"21.02.2017",
                km:"21000",
                ucret:"2100",
                detay:[
                    {id:"bmw12_2_1",aciklama:"yağ değişimi",ucret:300},
               
                    {id:"bmw12_2_2",aciklama:"filtre değişimi",ucret:400},
              
                    {id:"bmw12_2_3",aciklama:"lastik değişimi",ucret:800},
    
                    {id:"bmw12_2_4",aciklama:"balata değişimi",ucret:600}
                ]
            }
            
        ]
    },
    {
        id:"Bmw13",
        model:"Bmw3",
        yil:2015,
        color:"white",
        servisKayitlari:[
            {
                id:"bmw13_1",
                tarih:"20.01.2016",
                km:"13000",
                ucret:"1200",
                detay:[
                    {id:"bmw13_1_1",aciklama:"yağ değişimi",ucret:300},
               
                    {id:"bmw13_1_2",aciklama:"filtre değişimi",ucret:400},
              
                    {id:"bmw13_1_3",aciklama:"lastik değişimi",ucret:500}
                ]
            },
            {
                id:"bmw13_2",
                tarih:"21.02.2017",
                km:"21000",
                ucret:"2100",
                detay:[
                    {id:"bmw13_2_1",aciklama:"yağ değişimi",ucret:300},
               
                    {id:"bmw13_2_2",aciklama:"filtre değişimi",ucret:400},
              
                    {id:"bmw13_2_3",aciklama:"lastik değişimi",ucret:800},
    
                    {id:"bmw13_2_4",aciklama:"balata değişimi",ucret:600}
                ]
            }
            
        ]
    }

];

console.log(carInfo[0]);
console.log(carInfo[1].servisKayitlari);
console.log(carInfo[2].servisKayitlari[0]);
console.log(carInfo[2].servisKayitlari[0].km);
console.log(carInfo[2].servisKayitlari[0].detay);
console.log(carInfo[2].servisKayitlari[0].detay[0]);
console.log(carInfo[2].servisKayitlari[0].detay[0].ucret);