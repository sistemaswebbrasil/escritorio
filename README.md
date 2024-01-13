# escritorio

## Projeto vue front

```bash
src/main/app
```

## Build do front

```bash
src/main/resources/static
```

## Gerar o pacote

```bash
mvn clean install -DskipTests
```

## Gerar a imagem docker

```bash
docker build -t sistemaswebbrasil/escritorio .
```

## Gerar o pacote e Gerar a imagem docker

```bash
mvn clean install -DskipTests && docker build -t sistemaswebbrasil/escritorio .
```

## Rodando a imagem criada

```bash
docker run -p 8080:8080 sistemaswebbrasil/escritorio
```

## Gerar os tipos do typescript apartir do swagger

```bash
 npx openapi-typescript http://127.0.0.1:8080/v3/api-docs/escritorio --output escritorio.ts
```

## Visualiza os dados do banco h2

```bash
 http://localhost:8080/h2-console
```
