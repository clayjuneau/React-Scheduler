import React, { useEffect, useState } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

import {without} from 'lodash';

function App(){

  const [appointments, setAppointments] = useState([])
  const [formDisplay, setFormDisplay] = useState(false)
  const [orderBy, setOrderBy] = useState('petName')
  const [orderDir, setOrderDir] = useState('asc')
  const [queryText, setQueryText] = useState('')

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

  function toggleForm() {
    setFormDisplay(!formDisplay)
  }

  function searchApts(query) {
    setQueryText(query)
  }

  function changeOrder(order, dir) {
    setOrderBy(order)
    setOrderDir(dir)
  }

  function addAppointment(apt) {
    let tempApts = appointments
    tempApts.unshift(apt)
    setAppointments(tempApts)
  }

  let order;
  let filteredApts = appointments;
  if(orderDir === 'asc'){
    order = 1
  } else {
    order = -1
  }

  filteredApts = filteredApts.sort((a,b) => {
    if(a[orderBy].toLowerCase() < b[orderBy].toLowerCase()){
      return -1 * order
    } else {
      return 1 * order
    }
  }).filter(eachItem => {
    return(
      eachItem['petName'].toLowerCase().includes(queryText.toLowerCase()) ||
      eachItem['ownerName'].toLowerCase().includes(queryText.toLowerCase()) ||
      eachItem['aptNotes'].toLowerCase().includes(queryText.toLowerCase())
    )
  })

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments 
                formDisplay={formDisplay} 
                toggleForm={toggleForm}
                addAppointment={addAppointment}
              />
              <SearchAppointments 
                orderBy={orderBy}
                orderDir={orderDir}
                changeOrder={changeOrder}
                searchApts={searchApts}
              />
              <ListAppointments 
                appointments={filteredApts} 
                deleteAppointment={deleteAppointment}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );

}

export default App;
