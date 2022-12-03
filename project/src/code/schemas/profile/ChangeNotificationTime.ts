import * as zod from 'zod'
import { notificationTimeChoicesValues } from '../../models/support/choices'

export interface ChangeNotificationTimeSchemaType {
  notification_time: string
}

export const ChangeNotificationTimeSchema = zod.object({
  notification_time: zod.enum(notificationTimeChoicesValues),
})
