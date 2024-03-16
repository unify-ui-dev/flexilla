import { column, defineDb, defineTable } from 'astro:db';


const NewsLetter = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    appSubsribed: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { NewsLetter }
});
