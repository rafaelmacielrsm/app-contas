import createReduxStore from '../../../datastore/index';
import { setRatioConfig, setUsersConfig } from '../../../datastore/action-creators/configs-actions';

describe( 'Configs Actions', () => {
  describe( '.ratio', () => {
    describe( 'when no parameters are provided', () => {
      const store = createReduxStore();

      it( 'should hava a 50/50 value', () => {
        const expected = [ 0.5, 0.5 ];
        const actual = store.getState().configs.ratio;

        expect( actual ).toEqual( expected );
      });
    });

    describe( 'when parameters are provided', () => {
      const ratio = [ 0.6, 0.4 ];
      const store = createReduxStore({ configs: { ratio } });

      it( 'should hava a the received value', () => {
        const expected = ratio;
        const actual = store.getState().configs.ratio;

        expect( actual ).toEqual( expected );
      });
    });

    describe( 'when receiving an setRatio action', () => {
      const ratio = [ 0.6, 0.4 ];
      const store = createReduxStore({ configs: { ratio } });

      it( 'should change the ratio to the value provided', () => {
        const expected = [ 0.3, 0.7 ];
        store.dispatch( setRatioConfig( expected ));
        const actual = store.getState().configs.ratio;

        expect( actual ).toEqual( expected );
      });
    });    
  });

  describe( '.users', () => {
    describe( 'when no param are provided', () => {
      it( 'should create an object without names', () => {
        const store = createReduxStore();
        const expected = { '1': '', '2': '', 'all': ''}
        const actual = store.getState().configs.users;
                
        expect( actual ).toEqual( expected );
      });
    });

    describe( 'when params are provided', () => {
      it( 'should create an object with the received values', () => {
        const expected = { '1': 'Katia', '2': 'Rafael', 'all': 'Todos' }
        const store = createReduxStore({ configs: { users: expected } });
        const actual = store.getState().configs.users;
                
        expect( actual ).toEqual( expected );
      });
    });

    describe( 'when dispatching a set setUserConfig action', () => {
      const store = createReduxStore();
      const users = { '1': 'Katia', '2': 'Rafael', 'all': 'Todos' }

      it( 'should change to the provided values', () => {
        store.dispatch( setUsersConfig( users ) );

        expect( store.getState().configs.users ).toEqual( users );
      });
    });
  });
});

