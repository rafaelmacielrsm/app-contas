import createReduxStore from '../../../datastore/index';
import factory from '../../_helpers/expenseGroupFactory';
import { setExpenseGroups, modifyExpenseGroup } 
  from '../../../datastore/action-creators/expenseGroups-actions';

describe( '.setExpenseGroups', () => {
  const store = createReduxStore();
  const exp = [factory( 1 ), factory( 2 )];

  it( 'should set the received as the new state', () => {
    store.dispatch( setExpenseGroups( exp ) );

    expect( store.getState().expenseGroups ).toEqual( exp );
  });
});

describe( '.modifyExpenseGroup', () => {
  const exp = [ factory(1), factory(2), factory(3) ]
  const name = 'SuperMercado'
  let store = createReduxStore({ expenseGroups: exp });

  beforeAll(() => { 
    store.dispatch( modifyExpenseGroup( 0, factory(1, name )));
  });

  it( 'should change the description of the expense group', () => {
    expect( store.getState().expenseGroups[0].description ).toEqual( name );
  });

  it( 'should change the synched status', () => {
    expect( store.getState().expenseGroups[0].synched ).toEqual( false );
  });
});