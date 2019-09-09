# VideoConverterApp

## Resumo
Sistema experimental para conversão de vídeos em formatos tradicionais para formatos da web. 
Atualmente o protocolo suportado é HLS, pelo fato de ter maior compatibilidade com a maioria dos navegadores, sendo eles o Safari. O formato MPEG-DASH será incluído em breve após testes de maior fluidez.

## Tecnologias utilizadas

O projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.
Foi utilizado o framework mdb-bootstrap-material para desenvolvimento visual das telas e integração com o player da plataforma Bitmovin.


## Development server

Execute na pasta no projeto `ng serve` for usar o modo dev. Navegue até a url `http://localhost:4200/`.

## Uso em produção

A url para utilização da sistema em produção é http://ec2-3-208-10-49.compute-1.amazonaws.com:8081

## Funcionamento
A tela principal do sistema do sistema constia em dois opções de escolha para conversãp: Uma para usar URL do arquivo de video e
e outra para carregar um arquivo do computador. Ao clicar no botão converter o sistema entrará em modo de espera e quando finalizado será
redirecionado para tela onde será exibido o video convertido e a url para fazer download do mesmo.
Além disso foi implementada uma tela para maiores informações sistema e link para as o github e linkedin do autor.

## Docker e nginx

Além disso foi utilizado Docker para integrado na EC2. Foi criada uma instancia onde o container foi inicializado somente para uso do serviço. 
Maiores informações sobre o processo se encontram no Dockerfile anexado ao projeto. Foi utilizado também o nginx para controle de rotas, configurado 
dentro do container.
