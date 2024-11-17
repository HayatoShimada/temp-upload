const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.temp.create({
      data: {
        temp1: 21,
        temp2: 22,
        temp3: 23,
        temp4: 24,
        temp5: 25,
      },
    });
    console.log('Data inserted:', result);
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
