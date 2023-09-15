

const CarInfo = ({ params }) => {
  return (
    <div>
        <h1>Car Info</h1>
        <p>car ID : {params.carid}</p>
    </div>
  )
}

export default CarInfo