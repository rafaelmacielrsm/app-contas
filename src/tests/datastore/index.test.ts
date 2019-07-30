import createReduxStore from '../../datastore';

describe( '.createReduxStore', () => {
  const reduxStore = createReduxStore();

  it( 'should successfully create a reduxStore', () => {
    let expected = ['getState', 'dispatch', 'subscribe'];

    expect( Object.keys( reduxStore )).toEqual(expect.arrayContaining( expected )) 
  });
});

describe( '.getState', () => {
  const reduxStore = createReduxStore();

  describe( '.fetching', () => {
    it( 'should respond to fetching', () => {
      const expected = [ 'fetching' ]
      const actual = Object.keys( reduxStore.getState() )
      expect( actual ).toEqual( expect.arrayContaining( expected ) )
    });
  });

  describe( '.synchedAt', () => {
    it( 'should respond to synchedAt', () => {
      const expected = [ 'synchedAt' ]
      const actual = Object.keys( reduxStore.getState());
      expect( actual ).toEqual( expect.arrayContaining( expected ) );
    });
  });

  describe( '.configs', () => {
    it( 'should respond to configs', () => {
      const expected = [ 'configs' ]
      const actual = Object.keys( reduxStore.getState());
      expect( actual ).toEqual( expect.arrayContaining( expected ) );
    });

    it( 'should have the ratio and users properties', () => {
      const expected = { ratio: expect.any(Array), users: expect.any(Object) }
      const actual = reduxStore.getState().configs
      expect( actual ).toEqual(expect.objectContaining( expected ))
    });
  });

  describe( '.expenseGroups', () => {
    it( 'should respond to expenseGroups', () => {
      const expected = ['expenseGroups'];
      const actual = Object.keys( reduxStore.getState() )

      expect( actual ).toEqual( expect.arrayContaining( expected ))
    });

    it( 'should start as an empty array as default', () => {
      expect( reduxStore.getState().expenseGroups ).toEqual([])
    });
  });
});
