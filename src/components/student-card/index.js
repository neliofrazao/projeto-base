import Card from '../../shared/card'

const StudentCard = ({name ="Sem nome de aluno"}) => (
    <Card title={name}>
        <p>Nome do aluno</p>
        <h3>Diciplinas</h3>
        <ul>
            <li>Materia 1</li>
            <li>Materia 2</li>
        </ul>
    </Card>
)

export default StudentCard