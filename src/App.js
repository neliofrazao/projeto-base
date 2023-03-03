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

import FirstComponent from './components/first-component'
import SubjectList from './components/subject-list'
import StudentCard from './components/student-card'

const App = () => {
  return (
    <div>
      <FirstComponent />
      <h1>Alunos</h1>
      <StudentCard name='Nome do Aluno'/>
      <StudentCard name='Nome do Aluno2'/>
      <StudentCard />
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
