import { seedDefaultMetadata } from '../lib/jsonDatabase'

export async function seedInitialPageMetadata() {
  await seedDefaultMetadata()
  console.log('Initial page metadata seeding completed using JSON files.')
}