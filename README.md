# BKShop - E-commerce Platform

## 🚀 Configuración Rápida

### 1. Configurar variables de entorno

```bash
# Hacer ejecutable el script
chmod +x setup-env.sh

# Ejecutar configuración
./setup-env.sh
```

### 2. Iniciar PostgreSQL con Docker

```bash
# Iniciar contenedores
docker-compose up -d

# Verificar que estén corriendo
docker-compose ps
```

### 3. Configurar Base de Datos

```bash
# Navegar al Backend
cd Backend

# Instalar dependencias
pnpm install

# Generar cliente Prisma
pnpm prisma generate

# Ejecutar migraciones
pnpm prisma migrate dev --name init

# (Opcional) Abrir Prisma Studio
pnpm prisma studio
```

### 4. Ejecutar la aplicación

```bash
# Terminal 1: Backend
cd Backend
pnpm run dev

# Terminal 2: Frontend
cd Frontend
pnpm run dev
```

## 🐳 Servicios Docker

- **PostgreSQL**: `localhost:5432`

  - Database: `bkshop_db`
  - User: `bkshop_user`
  - Password: `bkshop_password`

- **PgAdmin**: `http://localhost:8080`
  - Email: `admin@bkshop.com`
  - Password: `admin123`

## 📝 Scripts disponibles

### Backend

```bash
pnpm run dev         # Servidor desarrollo
pnpm run build       # Compilar TypeScript
pnpm run start       # Servidor producción
pnpm run format      # Formatear código
pnpm run lint        # Linter
```

### Frontend

```bash
pnpm run dev         # Servidor desarrollo
pnpm run build       # Compilar aplicación
pnpm run format      # Formatear código
pnpm run lint        # Linter
```

## 🛠️ Comandos útiles

```bash
# Reiniciar contenedores
docker-compose restart

# Ver logs
docker-compose logs postgres
docker-compose logs pgadmin

# Parar contenedores
docker-compose down

# Limpiar volúmenes (⚠️ elimina datos)
docker-compose down -v
```

## 🏗️ Estructura del proyecto

```
BKShop/
├── Backend/
│   ├── src/
│   ├── prisma/
│   └── package.json
├── Frontend/
│   ├── src/
│   └── package.json
├── docker-compose.yml
└── README.md
```
