import React from 'react'

function TicketList() {
  return (
    <div>
      <ul
          style={{
            position: "absolute",
            top: "24rem",
            left:'2rem',
            listStyleType: "none",
            paddingLeft: 0,
          }}
        >
        

          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ), url('https://t4.ftcdn.net/jpg/02/53/94/79/360_F_253947988_p2BXZnrCvrcxlRfQcTimOJQfqBaG8hUo.jpg') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "180px",
              // height: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            Flight
          </li>

          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU=') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            Movies
          </li>

          <li
            style={{
              fontSize: "30px",
              marginBottom: "12px",
              fontFamily: "Open Sans, Raleway, sans-serif",
              // fontFamily: "'Roboto', sans-serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              padding: "10px 20px",
              borderRadius: "10px",
              background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url('https://t4.ftcdn.net/jpg/02/86/76/77/360_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg') center/cover`,
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            Sports
          </li>
        </ul>
    </div>
  )
}

export default TicketList
