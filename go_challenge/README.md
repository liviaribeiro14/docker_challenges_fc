# Desafio GO

Critérios do desafio
- Linguagem - Go;
- Criar imagem no Docker Hub;
- Exibir `Code.education Rocks!`;
- Imagem criada com menos de 2MB.

## Comandos

Push da [imagem no Docker Hub](`https://hub.docker.com/repository/docker/liviaribeiro14/codeeducation`)

```bash
docker push liviaribeiro14/codeeducation:latest
```

Build
```bash
docker build -t liviaribeiro14/codeeducation . 
```

Run 
```bash
docker run --rm liviaribeiro14/codeeducation   
```

Ver tamanho da imagem
```bash
docker images | grep codeeducation  
```