# Etapa de compilación
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar los archivos de dependencias para optimizar la cache
COPY package*.json ./
RUN npm install

# Copiar todo el código
COPY . .


# Compilar cada aplicación Angular
RUN npm run build host -- --configuration=production --output-path=dist/host
RUN npm run build mfe -- --configuration=production --output-path=dist/mfe
RUN npm run build mfeProof -- --configuration=production --output-path=dist/mfe-proof

# -----------------------------------------

# Etapa de ejecución con Nginx
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

# Copiar cada microfrontend a su respectiva carpeta en Nginx
COPY --from=builder /app/dist/host /usr/share/nginx/html/host
COPY --from=builder /app/dist/mfe /usr/share/nginx/html/mfe
COPY --from=builder /app/dist/mfe-proof /usr/share/nginx/html/mfe-proof

# Exponer los puertos correspondientes
EXPOSE 4200 4201 4202

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
