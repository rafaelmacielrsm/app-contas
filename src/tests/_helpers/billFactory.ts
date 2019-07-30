import faker from 'faker';
import { IBill } from '../../app-types/redux-types';
import sample from 'lodash/sample';

const boughtFor = ["0", "1", "All"];
const paidBy = ["0", "1"];

export default ( bill?: any ) : IBill => {
  return {
    billId: bill.billId || faker.random.number({ max: 100 }),
    localBillId: bill.localBillId || faker.random.number({ max: 100 }),
    boughtAt: bill.boughtAt || Date.now(),
    boughtFor: bill.boughtFor || <string>sample( boughtFor ),
    businessName: bill.businessName || faker.company.companyName(),
    details: bill.details || faker.lorem.words( 4 ),
    expenseGroup: bill.expenseGroup || 1,
    isSynchronized: bill.isSynchronized || true,
    isModified: bill.isModified || true,
    paidBy: bill.paidBy || <string>sample( paidBy ),
    value: bill.value || faker.random.number({ min: 4, precision: 2, max: 1000 })
  }
}