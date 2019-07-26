import React from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
  background-color: tomato;
  color: white;
  display: grid;
  grid-template: repeat(1fr, 4);
`;

const Grid1 = styled.div`
  grid-column: 2;
`

const Dashboard = () => {
  return (
    <Wraper>
      <Grid1>
        <p>Ultima Sincronia:</p>
        <h4>19:45</h4>
      </Grid1>
    </Wraper>
  );
};

export default Dashboard;