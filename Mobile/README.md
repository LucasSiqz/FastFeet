<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
<h3 align="center">
  Aplicação para uma transportadora fictícia
</h3>
</h1>

---

## Descrição:

Esse repositório é referente ao aplicativo mobile do FastFeet desenvolvido em react-native.

- O aplicativo foi desenvolvido para dispositivos android.

---

<div align="center">
  <img alt="FastfeetMobile" title="FastfeetMobile" src="https://github.com/LucasSiqz/FastFeet-Mobile/blob/master/screen_shots/FastFeetMobile.png" />
</div>

---

## Como executar o projeto

- É necessário que o [servidor](https://github.com/LucasSiqz/FastFeet-Backend) esteja rodando na porta 3333.

- É necessário ter yarn instalado.

Instale as dependências:

> \$ yarn

- É necessário um emulador android, e que as portas 3333, 9090 e 8081 estajam expostas, caso necessário execute:

  > adb reverse tcp:8081 tcp:8081

  > adb reverse tcp:3333 tcp:3333

  > adb reverse tcp:9090 tcp:9090

  - A porta 9090 é responsável pela comunicação com o [reactotron](https://github.com/infinitered/reactotron).

Execute:

> \$ react-native run-android

Em seguida execute:

> \$ yarn start

---

## Licença:

Esse projeto utiliza a licença MIT. Para mais informações [clique aqui](https://github.com/LucasSiqz/FastFeet-Mobile/blob/master/LICENSE)
