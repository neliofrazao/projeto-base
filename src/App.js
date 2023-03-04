// Meu primeiro componente
// estilizando o componente
// Componentes com propriedades
// Componentes com filhos
// React Fragment
// Repetição - Map
// Exibição condicional
// Exibição condicional - ternário
// Prop drilling 
// Componentes com estado

import { useState, useEffect } from 'react'
import SubjectList from './components/subject-list'
import StudentList from './Pages/student-list'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)
  const handleClickSubtrai = () => setCount(count - 1)

  useEffect(() => { 
    document.title = `Você clicou ${count} vezes.`    
  }, [count])
  

  // const falaAgo = () => {
    
  //   const falaAluno = (fala1) => console.log(fala1);
  //   const falaProfessor = (fala2) => console.log(fala2);

  //   return [falaAluno, falaProfessor]

  // }

  // const [falaPessoa, falaProfessor] = falaAgo()

  // falaPessoa('Pessoa Falou')
  // falaProfessor('Aluno Falou')
  

  console.log(count)

  const arrayComida = ['Lasanha', 'Hamburguer', 'Macarrâo']

  const [Lasanha, Hamburguer, Macarrâo] = arrayComida

  console.log(Lasanha)
  console.log(Hamburguer)
  console.log(Macarrâo)


  return (
    <div>
       <h1>contador: {count}</h1>
      <button onClick={handleClick}>Soma</button> 
      <button onClick={handleClickSubtrai}>Subtrai</button> 
      
      <StudentList />

      {/* <FirstComponent /> */}
      
      <h1>Disciplinas</h1>
      <SubjectList 
        name='Arquitetura Front end'  
        description='Lorem ipsum dolor'
      />
      <SubjectList 
        name='Introdução a javaScript' 
        description='sit amet consectetu' 
      />

      <SubjectList 
   
      />
    </div>
  );
}

export default App;
