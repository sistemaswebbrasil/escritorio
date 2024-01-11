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
