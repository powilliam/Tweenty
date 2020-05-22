// eslint-disable-next-line import/named
import { ConnectionOptions } from 'typeorm/browser'

import { Task } from '../models/Task'

export const databaseConfig: ConnectionOptions = {
  type: 'expo',
  driver: require('expo-sqlite'),
  database: 'tweenty.sqlite',
  entities: [Task],
  synchronize: true,
}
