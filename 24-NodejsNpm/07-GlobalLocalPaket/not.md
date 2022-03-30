<h1 align="center"> Not </h1>

  - jquery yaz.

- <a href="https://www.npmjs.com/"> Buraya </a> tıklayarak ilgili siteye gelin.
- 
- YEREL PAKET: 
  - <a href="https://www.npmjs.com/package/jquery"> Burada </a> bulunan install altındaki kısmı terminale yaz.`npm i jquery`
  - Gerekli bilgi package.json içinde bulunan dependncies kısmına gelir. Bu bize node modules klasörünü silsek bile jquery bağımlılığımız olduğunu bildirir.
  - Eğer jquery farklı bir versionunu istersek `npm i jquery@3.3.1` tarzında yazabiliriz.
  - Yerel ancak sadece uygulama geliştirme aşamasında kullanılan:
  - `npm i webpack --save-dev` => Uygulama geliştirme anında bu paketi kullanacağımız için bunu save dev olarak işaretliyoruz. 
  - Bu yine local bir paket ancak sadee uygulama geliştirme aşamasında kullandığımız bir paket.
  - Yani proje bittikten sonra yayınladıktan sonra projenin bu pakete bir bağımlılığı kalmayacak.
  - Bu bize uygulamada kullanılan script yükünün kullanılmasını azaltma artsını sağlar.
  -  Bu paket devDependencies kısmına gelir.
- GLOBAL PAKET:
  - Global olarak yüklenilen şey proje içine yüklenmez bilgisayara yüklenir.
  - Burada da yine `webpack` kullanılabilir. 
  - Farklı bir örnek olması açısından farklı bir paket kuralım:
    - `npm i live-server`, projelerimizi bir server aracılığıyla çalışmak istiyoruz diyelim.
    - Bunun için `npm i live-server --global` yazmamız yeterli. 
    - Paket json'a gelmeyecek bu paket bilgisi bilgisayarda yüklü olacak ve bunu hangi proje geliştirirsek geliştirelim kullanabileceğiz.
    - Başka bir klasöre geçiş yapsak dahi kullanabiliriz. 
    - Terminale `live-server` yazarsak bizim için bir server açılır.
    - Eğer hata alırsanız `cmd` ile deneyin. Powershell hata verebiliyor.
    - ctr + c yaparak `y` yaz live-server modundan çıkabilirsin.
  - Global paketlerimiz proje içine gelmediyse peki bunlar nerede: 
    - `npm list -g` bilgisayarda yüklü olan daha önceki bütün global paketleri listler.
    - Alt üst bütün hepsini listleler.
    - Bağımlı olduğu paketleri görmek istemiyorsak sadece üst seviyedeki paketleri görmek istiyosak `npm list -g --depth 0` diyoruz.
- Version numara anlamları: 

```javascript
    "devDependencies": {
    "webpack": "^5.70.0"
  }
```

  - ^ => caret karakter => minor ve patch yeni bir versionu çıkarsa bu güncellemeyi direkt al.
  - 5 => major versionu => köklü bir değişiklik yapılırsa bu arttırılır.
  - 70 => minor isminde bir güncelleme => yeni bir özellik eklenirse bu arttırılır .
  - 0 => patch olarak adlandırılır => hata olursa bu arttırılır.
- Paketi projeden silme:
  - `npm uninstall jquery` dediğimiz zaman kaldırılır. 
