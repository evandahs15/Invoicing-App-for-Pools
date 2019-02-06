import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { foo: 'bar' }
  }
  render () {
    return (
      <React.Fragment>
        <div className="pagewrapper">
          {/* Top image and info section */}
          <div className="topimage">
            <div className="customerinfo-wrapper">
              <div className="customerinfo w-row">
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                  <p>6D Oregon Ave, Avondale, 1061</p>
                  <p>Evandah Steadman</p>
                </div>
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                  <p className="paragraph-2">Pool Size 50k<br></br>Surface concrete<br></br>Job type PCF </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top image and info section */}
        {/* All of the form sections */}
        <div className="form">
          {/* Water analysis form */}
          <div className="form_wrapper _1">
            <h1 className="heading">Water Analysis</h1>
            <div className="form_slider">
              <h3 className="heading-2">Clarity</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">TDS</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Total Chlorine</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Free Chlorine</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">PH</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Demand</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Alkalinity</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Calcium</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Stabiliser</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Salt</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Phosphate</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
          </div>
          {/* Water analysis form */}
          {/* chemicals applied form */}
          <div className="form_wrapper _2">
            <h1 className="heading">CHEMICALS APPLIED</h1>
            <div className="form_slider">
              <h3 className="heading-2">Alkalinity</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">PH increaser</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">PH reducer</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Calcium</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Chlorine Tablets / sticks</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Chlorine</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Lite Oxidiser</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Stabiliser</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Salt</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Cell clean</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Floc</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Phosphate Remover</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Skimmer Basket</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
            <div className="form_slider">
              <h3 className="heading-2">Other</h3>
              <div className="number">50</div>
              <div className="number">100</div>
              <div className="number">150</div>
              <div className="number">200</div>
            </div>
          </div>
          {/* chemicals applied form */}
          {/* job and emergency notes form */}
          <div className="form_wrapper _2 jobtextarea">
            <h1 className="heading">JOB NOTES</h1>
            <div className="w-form">
              <div className="w-form">
                <form id="wf-form-Job-Notes" className="form-2">
                  <input type="text"placeholder="Enter valet notes" name="jobnotes"/>
                </form>
              </div>
            </div>
          </div>

          <div className="form_wrapper _2 jobtextarea">
            <h1 className="heading">EMERGENCY NOTES </h1>
            <div className="w-form">
              <form id="wf-form-Job-Notes" className="form-2">
                <input type="text"placeholder="Enter emergency notes" name="Emergencynotes"/>
              </form>
            </div>
          </div>
          {/* job and emergency notes form */}
          {/* photos section */}
          <div className="form_wrapper _2 jobtextarea">
            <h1 className="heading">PHOTOS</h1>
            <div className="photowrapper">
              <div className="columns w-row">
                <div className="column w-col w-col-7 w-col-tiny-7">
                  <div className="photoinfo">Before</div>
                  <div className="photoinfo">Take before photo of pool</div>
                </div>
                <div className="column-2 w-col w-col-5 w-col-tiny-5"><a href="#" className="button w-button">Take Photo</a></div>
              </div>
            </div>
            <div className="photowrapper">
              <div className="columns w-row">
                <div className="column w-col w-col-7 w-col-tiny-7">
                  <div className="photoinfo">Before</div>
                  <div className="photoinfo">Take before photo of pool</div>
                </div>
                <div className="column-2 w-col w-col-5 w-col-tiny-5"><a href="#" className="button w-button">Take Photo</a></div>
              </div>
            </div>
          </div>
          {/* photos section */}
          {/* services performed form */}
          <div className="form_wrapper _2">
            <h1 className="heading">SERVICES  PERFORMED</h1>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Test</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Balance</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Brush Chems</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">System Check</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Skimmer Basket</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Pump Basket</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Backwash</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Cartridge Hosed</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Vacuum</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Brush</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Leaf Rake</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Clean Cell</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Site Check</h3>
            </div>
            <div className="form_slider servicesperformedbox">
              <h3 className="heading-2">Gate Closed</h3>
            </div>
          </div>
          {/* services performed form */}
          <div className="container w-container"><a href="#" className="button-2 w-button">Submit</a></div>
          {/* All of the form sections */}
        </div>
      </React.Fragment>

    )
  }
}

export default App
