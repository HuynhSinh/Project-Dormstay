const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config(); // Đảm bảo đọc được file .env

// 1. Tạo Pool kết nối từ thư viện 'pg'
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

// 2. Thiết lập Adapter cho Prisma
const adapter = new PrismaPg(pool);

// 3. Khởi tạo PrismaClient với adapter đã tạo
const prisma = new PrismaClient({ adapter });

module.exports = prisma;