import React from 'react';
import './App.css';
import ChartPie from "./ChartPie"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4"><ChartPie /></div>
        <div className="col-md-4"><ChartPie /></div>
        <div className="col-md-4"><ChartPie /></div>
        
      </div>
      <div className="row mt-3">
        <div className="col-md-4"><ChartPie /></div>
        <div className="col-md-4"><ChartPie /></div>
        <div className="col-md-4"><ChartPie /></div>
  
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Pie Example</h5>
            </div>
            <div className="cart-content">
              <div class="card-body" style={{ position: "relative" }}>
                <ChartPie />
              </div></div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Pie Example</h5>
            </div>
            <div className="cart-content">
              <div class="card-body" style={{ position: "relative" }}>
                <ChartPie />
              </div></div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Pie Example</h5>
            </div>
            <div className="cart-content">
              <div class="card-body" style={{ position: "relative" }}>
                <ChartPie />
              </div></div>
          </div>
        </div>
  

      </div>



    </div>
  );
}

export default App;
