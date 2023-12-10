import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

 

  const techs = [
    {name: 'Angular'},
    {name: 'ASP.NET core'},
    {name: 'ASP.NET MVC'},
    {name: 'ASP.NET Web Forms'},
    {name: 'Automation Anywhere'},
    {name: 'AWS'},
    {name: 'Backbone.js'},
    {name: 'Blue Prism'},
    {name: 'Cassandra'},
    {name: 'CircleCI'},
    {name: 'Couchbase'},
    {name: 'CSharp'},
    {name: 'CSS'},
    {name: 'D3.js'},
    {name: 'Django'},
    {name: 'Docker'},
    {name: 'Drupal'},
    {name: 'Emotion'},
    {name: 'Ember.js'},
    {name: 'Entity Framework'},
    {name: 'Express.js'},
    {name: 'Firebase'},
    {name: 'Flutter'},
    {name: 'Ghost'},
    {name: 'Git'},
    {name: 'Go'},
    {name: 'Google Cloud'},
    {name: 'GraphQL'},
    {name: 'Heroku'},
    {name: 'HTML'},
    {name: 'Java'},
    {name: 'JavaScript'},
    {name: 'Jenkins'},
    {name: 'joomIa'},
    {name: 'JQuery'},
    {name: 'Kotlin'},
    {name: 'Kubernetes'},
    {name: 'Laravel'},
    {name: 'Less'},
    {name: 'Markdown'},
    {name: 'Mercurial'},
    {name: 'Microsoft Azure'},
    {name: 'MongoDB'},
    {name: 'MySQL'},
    {name: 'Next.js'},
    {name: 'Node.js'},
    {name: 'PHP'},
    {name: 'PostgreSQL'},
    {name: 'Power Automate'},
    {name: 'Prisma'},
    {name: 'Python'},
    {name: 'React.js'},
    {name: 'React Native'},
    {name: 'Redis'},
    {name: 'Ruby'},
    {name: 'Ruby on Rails'},
    {name: 'Rust'},
    {name: 'Sass'},
    {name: 'Spring'},
    {name: 'SQLite'},
    {name: 'SQL Server'},
    {name: 'Storybook'},
    {name: 'Strapi'},
    {name: 'Styled System'},    
    {name: 'Styled Components'},
    {name: 'Svelte'},
    {name: 'SVN'},
    {name: 'Swift'},
    {name: 'Tailwind'},
    {name: 'Three.js'},
    {name: 'Travis CI'},
    {name: 'Typescript'},
    {name: 'UiPath'},
    {name: 'Vue.js'},
    {name: 'WordPress'},
       
  ];

  await Promise.all(
    techs.map(async (tech) => {
      await prisma.technology.upsert({
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
