```javascript
xmr.open("GET","msg.tx",true);

xhr.send();
```

- server'dan bir bilgi talep ederken genellikle GET kullanıyoruz.
- POST ise server'a bilgi upload ederken ya da veri tabanında bir güncelleme yaparken
-  güncelleme yapacağmız bilgileri server tarafında POST ederiz
- 3.parametre ise request'tin asenkron mu senkron mu olduğnu bildirir.
- true: asenkron |false:senkron
- xhr.send(); gönderir ve yazdırtırız



<h1>readState</h1>   

- 0: Request henüz başlatılmamış (request not initialized)
- 1: server connection kurulmuş (server connection)
- 2: Request alınmışsa (request received)
- 3: Request server'da halen işletilmekteyse (processing request)
- 4: Request tamamlandı ve yanıt hazır (request and repsonse is ready)


<h1>status</h1>

- 200: Sonucun başarılı olduğunu (ok)
- 403: Talebin onaylanmadığını (forbidden)
- 404: Bulunamadı (not found)
