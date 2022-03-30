<h1 align="center"> TypeScript Çalışması </h1>

- `cmd` aç.
- `npm install -g typescript` yaz.
- `tsc --version` versiyona bakabilirsin. 

<h1 align="center"> .ts | .js Çevirme </h1>

- Not: .ts dosyasını compiler aracılığyla .js uzantılı bir dosyaya çevirmemiz gerek yoksa tarayıcı tarafından tanınmaz.
- Adımlar:
  - Visual içinden terminal aç.
  - `tsc greeter.ts` yaz. 
  - greeter.js oluşur.
    - tek fark .ts içindeki let .js de var oldu.
    - Çünkü tarayıcılar let anlamaz let ES6 ile geldi anlayabilmesi için ES5'te olan var'a çevirir.
  - `node greeter.js` ile greeter.js çalıştırlabilecek. Gönderdiğimiz parametre direkt yazılmış olur.