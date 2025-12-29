import { getPayload } from 'payload'
import config from '../payload.config'
import 'dotenv/config'

const seedProduction = async () => {
  const payload = await getPayload({ config })
  const users = [
    {
      email: process.env.SEED_DEV_1_EMAIL || 'dev1@example.com',
      password: process.env.SEED_DEV_1_PASSWORD || 'password123',
      firstName: 'Arnab',
      lastName: 'Ghosh',
      type: 'admin', // Full-scope developer (admin)
    },
    {
      email: process.env.SEED_DEV_2_EMAIL || 'dev2@example.com',
      password: process.env.SEED_DEV_2_PASSWORD || 'password123',
      firstName: 'Partner',
      lastName: 'Developer',
      type: 'admin', // Full-scope developer (admin)
    },
    {
      email: process.env.SEED_ADMIN_POC_EMAIL || 'poc@example.com',
      password: process.env.SEED_ADMIN_POC_PASSWORD || 'password123',
      firstName: 'Admin',
      lastName: 'PointOfContact',
      type: 'admin', // Admin for POC
    },
    {
      email: process.env.SEED_ADMIN_OTHER_EMAIL || 'admin2@example.com',
      password: process.env.SEED_ADMIN_OTHER_PASSWORD || 'password123',
      firstName: 'Other',
      lastName: 'Admin',
      type: 'admin',
    },
  ]

  payload.logger.info('Starting production seed...')

  for (const user of users) {
    const existingUser = await payload.find({
      collection: 'users',
      where: {
        email: {
            equals: user.email,
        },
      },
    })

    if (existingUser.totalDocs > 0) {
      payload.logger.info(`User ${user.email} already exists. Skipping.`)
      continue
    }

    try {
      await payload.create({
        collection: 'users',
        data: {
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            type: user.type as 'admin' | 'student' | 'pi',
        },
      })
      payload.logger.info(`User ${user.email} created successfully.`)
    } catch (error) {
      payload.logger.error(`Failed to create user ${user.email}: ${error}`)
    }
  }

  payload.logger.info('Production seed completed.')
  process.exit(0)
}

seedProduction()
