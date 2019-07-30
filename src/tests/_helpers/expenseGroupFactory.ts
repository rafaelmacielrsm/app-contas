import faker from 'faker';
import { IExpenseGroup } from '../../app-types/redux-types';

export default ( id: number, descripion?: string, synched?: boolean ) : IExpenseGroup => {
  return {
    description: descripion || faker.commerce.department(),
    id: id,
    localId: id,
    synched: synched || true
  }
}