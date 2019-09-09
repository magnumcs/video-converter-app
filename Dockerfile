### STAGE 1: Build ###

FROM nginx:1.14.1-alpine

## Copiando o arquivo .conf do nginx
COPY /nginx/default.conf /etc/nginx/conf.d/

## Remove a pasta padrão
RUN rm -rf /usr/share/nginx/html/*

## Copia dos artefatos da pasta dist para a pasta do nginx
COPY /ng-app/dist/video-converter-app /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
