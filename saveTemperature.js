const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function saveTemperature(temperatures) {
  try {
    const result = await prisma.temp.create({
      data: {
        temp1: temperatures[0] !== 'null' ? parseFloat(temperatures[0]) : null,
        temp2: temperatures[1] !== 'null' ? parseFloat(temperatures[1]) : null,
        temp3: temperatures[2] !== 'null' ? parseFloat(temperatures[2]) : null,
        temp4: temperatures[3] !== 'null' ? parseFloat(temperatures[3]) : null,
        temp5: temperatures[4] !== 'null' ? parseFloat(temperatures[4]) : null,
      },
    });
    console.log(`Temperature saved: ${JSON.stringify(result)}`);
  } catch (error) {
    console.error('Error saving temperature:', error);
  } finally {
    await prisma.$disconnect();
  }
}

const temperatures = process.argv.slice(2);
saveTemperature(temperatures);
