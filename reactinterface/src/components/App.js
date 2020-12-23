import React, { useEffect, useState } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

import {without} from 'lodash';

function App(){

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(setAppointments)
  }, []);

  function deleteAppointment(apt) {
    let tempApts = appointments
    //using lodash method
    tempApts = without(tempApts, apt)
    setAppointments(tempApts)
  }

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments appointments={appointments} deleteAppointment={deleteAppointment}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

}

export default App;
