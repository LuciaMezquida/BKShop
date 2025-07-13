#!/bin/bash

# Configurar variables de entorno para BKShop

echo "🔧 Configurando variables de entorno..."

# Crear .env en la raíz
cat > .env << EOF
# Base de datos
DATABASE_URL="postgresql://bkshop_user:bkshop_password@localhost:5432/bkshop_db"
POSTGRES_DB=bkshop_db
POSTGRES_USER=bkshop_user
POSTGRES_PASSWORD=bkshop_password

# Servidor
PORT=4000
NODE_ENV=development

# PgAdmin
PGADMIN_DEFAULT_EMAIL=admin@bkshop.com
PGADMIN_DEFAULT_PASSWORD=admin123
EOF

# Crear .env en Backend
cat > Backend/.env << EOF
# Database
DATABASE_URL="postgresql://bkshop_user:bkshop_password@localhost:5432/bkshop_db"

# Server
PORT=4000
NODE_ENV=development
EOF

echo "✅ Archivos .env creados exitosamente"
echo "📁 Archivos creados:"
echo "   - .env (raíz)"
echo "   - Backend/.env"
echo ""
echo "🐳 Para iniciar PostgreSQL ejecuta: docker-compose up -d" 