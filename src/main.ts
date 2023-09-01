import { PrismaClient } from "@prisma/client";
import "./jsonTypes";

const prisma = new PrismaClient();

async function main() {
  // create a new sample
  await prisma.sample.create({
    data: {
      metadata: {
        title: "My Sample",
      },
    },
  });

  const samples = await prisma.sample.findMany({});
  console.log(samples);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
