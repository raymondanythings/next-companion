const { PrismaClient } = require("@prisma");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        {
          name: "Famous People",
        },
        {
          name: "Movies & TV",
        },
        {
          name: "Musicians",
        },
        {
          name: "Games",
        },
        {
          name: "Animals",
        },
        {
          name: "Philosophy",
        },
        {
          name: "scientists",
        },
      ],
    });
  } catch (err) {
    console.error("Error seeding default categories", err);
  } finally {
    db.$disconnect();
  }
}

main();
