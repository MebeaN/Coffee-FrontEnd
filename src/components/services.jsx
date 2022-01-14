export const Services = (props) => {
  return (
    <div id='services'>
      {/* <div className='container'> */}
        <div className='section-title text-center'>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} >
                  {' '}
                  <div className="row">
                    <div className="col-md-8">
                      <img src={d.icon} />
                    </div>
                    <div className="col-md-4">
                      <div className='service-desc'>
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    // </div>
  )
}
