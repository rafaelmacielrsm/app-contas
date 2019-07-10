import createReduxStore from '.';

describe( '.createReduxStore', () => {
  let reduxStore = createReduxStore();

  it( 'should successfully create a reduxStore', () => {
    let expected = ['getState', 'dispatch', 'subscribe'];

    expect( Object.keys( reduxStore )).toEqual(expect.arrayContaining( expected )) 
  });
});

export {};