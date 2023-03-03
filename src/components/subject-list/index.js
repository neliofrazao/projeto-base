import Card from '../../shared/card'

const SubjectList = ({name = 'Sem Título', description ='--'}) => {
  return (
    <Card title={name}>
      <p>{description}</p>
    </Card> 
)}

export default SubjectList