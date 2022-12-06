import { client } from '../../../core/settings'
import { BillModel } from '../../models/bill'

export async function getBills(): Promise<BillModel[]> {
  const request = await client.get('bills')
  return request.data
}
