import { ChatwootBlock } from './schema'

export const chatwootTasks = ['Show CogmoCRM', 'Close CogmoCRM'] as const

export const defaultChatwootOptions = {
  task: 'Show CogmoCRM',
  baseUrl: 'https://cogmocrm.novo.org.br',
} as const satisfies ChatwootBlock['options']
