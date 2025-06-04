import './Sectionn.css'
import amor from '../../assets/amor.png'

const love=[
  {
    id:1,
    name:'frutas',
    descripcion:'ricas y deliciosas'
  }
]


export const Section = () => {
return(
  <section>
  {
    love.map(love=>{
      return(
        <div key={love.id} className='lovee'>
          <img src={amor} alt={love.name} />
          <h2>{love.name}</h2>
          <p>{love.descripcion}</p>
        </div>
      )
    })
  }


  </section>
   
)
}
