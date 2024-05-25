import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const bids = pgTable('bb_bids', {
    id: serial('id').primaryKey(),
})

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
})