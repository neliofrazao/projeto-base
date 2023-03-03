
import './FirstComponent.css'

const array = [
  {
    texto: 'oba',
    descricao: 'epa'
  },
  {
    texto: 'huhuu',
    descricao: 'hahah'
  }
]
const FirstComponent = () => (
  <>
    {
      array.map((value) => console.log(value))
    }
  </>
  //  <>
  //     <p className='texto bold'>Meu primeiro componente</p>
  //     <p>Teste</p>
  //  </>
   
   )


export default FirstComponent