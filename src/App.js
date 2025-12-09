import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faBiking, faPercentage, faDollarSign, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import './App.css';

// Components
import AgeCalc from './Components/AgeCalc';
import MileageCalc from './Components/MileageCalc';
import PercentageCalc from './Components/PercentageCalc';
import BMIcalc from './Components/BMICalc';
import CurrencyCalc from './Components/CurrencyCalc';
import Header from './Components/Header';
// import ToggleColor from './Components/ToggleColor';
function App() {
  const activeHandler = (e) =>{
    e.target.parentElement.parentElement.querySelectorAll('a').forEach(ele => {
      ele.classList.remove('btn-primary');
      ele.classList.add('btn-light', 'shadow');
    });
    e.target.classList.remove('btn-light', 'shadow');
    e.target.classList.add('btn-primary');
  }
  return (
    <section className="container py-5 position-relative">
        <div className="row">
          <div className="col-md-12 col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <BrowserRouter>
          <div className='col-md-4 col-12'>
            <ul className="list-tiles">
              <li>
                <Link className="btn btn-light shadow" onClick={activeHandler} to="/age-calc"><FontAwesomeIcon icon={faPerson} />Age Calculator</Link>
              </li>
              <li>
                <Link className="btn btn-light shadow" onClick={activeHandler} to="/mileage-calc"><FontAwesomeIcon icon={faBiking} />Mileage Calculator</Link>
              </li>
              <li>
                <Link className="btn btn-light shadow" onClick={activeHandler} to="/percentage-calc"><FontAwesomeIcon icon={faPercentage} />Percentage Calculator</Link>
              </li>
              <li>
                <Link className="btn btn-light shadow" onClick={activeHandler} to="/bmi-calc"><FontAwesomeIcon icon={faPersonRunning} />BMI Calculator</Link>
              </li>
              <li>
                <Link className="btn btn-light shadow" onClick={activeHandler} to="/currency-calc"><FontAwesomeIcon icon={faDollarSign} />Currency Calculator</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-12">
              <Routes>
                <Route path="/age-calc" element = {<AgeCalc />} />
                <Route path="/mileage-calc" element = {<MileageCalc />} />
                <Route path="/percentage-calc" element = {<PercentageCalc />} />
                <Route path="/bmi-calc" element = {<BMIcalc />} />
                <Route path="/currency-calc" element = {<CurrencyCalc />} />
              </Routes>
          </div>
          </BrowserRouter>
        </div>
    </section>
  );
}

export default App;
