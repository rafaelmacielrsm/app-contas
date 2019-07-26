import createReduxStore from '.';

describe( '.createReduxStore', () => {
  const reduxStore = createReduxStore();

  it( 'should successfully create a reduxStore', () => {
    let expected = ['getState', 'dispatch', 'subscribe'];

    expect( Object.keys( reduxStore )).toEqual(expect.arrayContaining( expected )) 
  });
});

describe( '.getState', () => {
  const reduxStore = createReduxStore();

  it( 'should respond to fetching', () => {
    const expected = [ 'fetching' ]
    const actual = Object.keys( reduxStore.getState() )
    expect( actual ).toEqual( expect.arrayContaining( expected ) )
  });

  it( 'should respond to synchedAt', () => {
    const expected = [ 'synchedAt' ]
    const actual = Object.keys( reduxStore.getState());
    expect( actual ).toEqual( expect.arrayContaining( expected ) );
  });
});
