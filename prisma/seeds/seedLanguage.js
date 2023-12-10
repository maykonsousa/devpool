import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

 

  const languages = [
    {name: 'Inglês'},
    {name: 'Espanhol'},
    {name: 'Francês'},
    {name: 'Alemão'},
    {name: 'Italiano'},
    {name: 'Japonês'},
    {name: 'Mandarim'},
    {name: 'Português'},
    
  ];

  await Promise.all(
    languages.map(async (tech) => {
      await prisma.language.upsert({
        where: {
          name: tech.name,
        },
        update: {},
        create: tech,
      });
    }),
  );

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await new PrismaClient().$disconnect();
  });
