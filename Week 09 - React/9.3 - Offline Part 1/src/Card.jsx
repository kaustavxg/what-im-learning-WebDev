const bgStyle = {
    width: 500, 
    height: 500, 
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 20
}

export function CardComponent({name, subtitle, date, venue, time}) {
    return (
      <div style={bgStyle}>
        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <div>{name}</div>
            <div>{subtitle}</div>
            <div>{date}</div>
            <div>{venue}</div>
            <div>{time}</div>
        </div>
      </div>
    )
}
