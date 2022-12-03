import * as zod from 'zod'

export interface ChangeNotificationTimeSchemaType {
  notification_time: string
}

export const ChangeNotificationTimeSchema = zod.object({
  notification_time: zod.enum(['8', '12', '16', '20']),
})
