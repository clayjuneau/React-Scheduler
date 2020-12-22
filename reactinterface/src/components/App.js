import React, { useEffect, useState } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

function App(){

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(setAppointments)
  }, []);

  // if(appointments){
  //   return <div>{JSON.stringify(appointments)}</div>
  // }

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {appointments[5].petName}
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
  );

}

export default App;
