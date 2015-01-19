### Estudo de AngularJS :)

#### Anotações

##### AngularJS

##### Escopos e Diretivas

- Escopos fazem o ~meio-campo~ entre os dados do Model e como eles irão interagir no Controller, além disso são responsáveis por fornecer as views o que elas precisam
para os dados de apresentação.
- Diretivas são formas de extender o comportamento do HMTML.
- `ng-app='myApp'` = Define que a aplicação irá usar AngularJS.
- `ng-controller` = Irá determinar onde determinado Controller irá interagir, uma app angular pode ter vários Controllers e cada um deles ter seu escopo definido
 para determinadas partes da app. Por exemplo, um arquivo chamado `inbox.html` contendo o código abaixo irá fornecer a responsabilidade ao `InboxCtrl`, (example_01).
- `ng-model` = Cria o data-biding entre view/model.

##### Modulos

- Toda app Angular possui seu módulo, que é um namespace da app, onde podem ser injetados as suas dependências, (example_02)
