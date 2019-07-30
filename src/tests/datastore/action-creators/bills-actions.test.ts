import createReduxStore from '../../../datastore/index';
import factory from '../../_helpers/billFactory';
import faker from 'faker';
import { setBills, modifyBill } 
  from '../../../datastore/action-creators/bills-actions';

describe( '.setBills', () => {
  const store = createReduxStore();
  const bills = [ factory({}), factory({}) ]

  store.dispatch( setBills( bills ))

  it( 'should set the array received as state', () => {
    const actual = store.getState().bills;

    expect( actual ).toEqual( expect.arrayContaining( bills ))
  });

  it( 'should clear the bills state when receiving an empty array', () => {
    store.dispatch( setBills([]) );
    const actual = store.getState().bills;

    expect( actual ).toEqual([])
  });
});

describe( '.modifyBill', () => {
  const bills = [ 
    factory({ isModified: false, isSynched: true }), 
    factory({ isModified: false, isSynched: true }) 
  ];

  const store = createReduxStore({ bills });

  it( 'should change the bill with the values provided', () => {
    const knownDetail = faker.hacker.noun(); 
    store.dispatch( modifyBill( 0, factory({ details: knownDetail })));

    const exp = expect.objectContaining({ details: knownDetail })

    expect( store.getState().bills[0] ).toEqual( exp )
  });
});


