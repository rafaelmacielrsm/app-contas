import createReduxStore from './index';
import { fetching, cancelFetching, setSynchedAt } from './action-creators/general-actions';
import { Store } from 'redux';

describe( 'fetching reducer', () => {
  describe( 'fetching is false', () => {
    let store: Store;

    beforeEach(() => store = createReduxStore({ fetching: false }));

    describe( 'when dispatching a fetching action', () => {
      it( 'should change the state to true', () => {
        store.dispatch( fetching() )
      
        expect( store.getState().fetching ).toEqual( true )
      });
    });

    describe( 'when dispatching a cancelFetching action', () => {
      it( 'should keep the state as false', () => {
        store.dispatch( cancelFetching() )
      
        expect( store.getState().fetching ).toEqual( false )
      });
    });

    describe( 'when dispatching any other action', () => {
      it( 'should not change the state', () => {
        const expected = store.getState().fetching;

        store.dispatch({ type: 'SOME_ACTION' });
      
        expect( store.getState().fetching ).toEqual( expected );
      });
    });
  });

  describe( 'fetching is true', () => {
    let store: Store;

    beforeEach(() => store = createReduxStore({ fetching: true }));

    it( 'should have true as initial state', () => {
      expect( store.getState().fetching ).toEqual( true );
    });

    describe( 'when dispatching a fetching action', () => {
      it( 'should keep the state as true', () => {
        store.dispatch( fetching() )
      
        expect( store.getState().fetching ).toEqual( true )
      });
    });

    describe( 'when dispatching a cancelFetching action', () => {
      it( 'should change the state to false', () => {
        store.dispatch( cancelFetching() )
      
        expect( store.getState().fetching ).toEqual( false )
      });
    });

    describe( 'when dispatching any other action', () => {
      it( 'should not change the state', () => {
        const expected = store.getState().fetching;

        store.dispatch({ type: 'SOME_ACTION' });
      
        expect( store.getState().fetching ).toEqual( expected );
      });
    });
  });
});

describe( 'synchedAt reducers', () => {
  describe( 'when no initialstate is provided', () => {
    const store = createReduxStore();

    it( 'should initialize with value 0', () => {
      expect(store.getState().synchedAt ).toEqual( 0 )
    });
  });

  describe( 'when an initialstate is provided', () => {
    const fixedDate = Date.now();
    const store = createReduxStore({ synchedAt: fixedDate })

    it( 'should initialize with the provided value', () => {
      expect(store.getState().synchedAt ).toEqual( fixedDate )
    });
  });

  describe( 'when dispatching a set synchedAt action', () => {
    const store = createReduxStore();

    it( 'should initialize with zero', () => {
      expect( store.getState().synchedAt ).toEqual( 0 )
    });

    it( 'should set the current date after dispatching the action', () => {
      const dateSnapShot = Date.now() - 1;
      
      store.dispatch( setSynchedAt() );

      expect( store.getState().synchedAt ).toBeGreaterThan( dateSnapShot );
    });
  });
});

export {}