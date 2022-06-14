FROM golang:1.18.3-alpine3.16 AS builder

WORKDIR /app

COPY . .

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o main main.go

# FROM  alpine:3.16
FROM scratch

WORKDIR /app
COPY --from=builder /app/main .

CMD [ "/app/main" ]