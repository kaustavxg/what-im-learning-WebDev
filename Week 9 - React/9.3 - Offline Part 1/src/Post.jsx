import clockPic from './assets/clock.jpg'

const bgStyle = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "white", borderWidth: 1, padding: 20}

export function PostComponent({name, subtitle, time, image, description}){
  return <div style={bgStyle}>
    <div style={{display: "flex"}}>
      <img src={image} style={{ 
        width: 30,
        height: 30,
        borderRadius: 20
      }}></img>
      <div style={{fontSize: 10, marginLeft: 10}}>
          <b>
              {name} 
          </b>

          <div>{subtitle}</div>  

          <div style={{display: 'flex'}}></div> 

        {/* CONDITIONAL RENDERING, if time is defined, then only render the time component , using ternary operator */}
         {time !== undefined ? <div style={{ display: "flex", alignItems: "center" }}>
            <span>{time}ms ago</span>
            <img src={clockPic} style={{ height: 10, width: 10, marginLeft: 5 }} />
          </div> : null}

      </div>
    </div>
    <div style={{fontSize: 12}}>
      {description}
    </div>
  </div>
}