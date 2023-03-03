import Card from '../../shared/card'

const StudentCard = ({name ="Sem nome de aluno", course, registration}) => (
    <Card title={name}>
        <p>Matrícula : {registration}</p>
        <p>Curso : {course}</p>
        <h3>Diciplinas</h3>
        <ul>
            <li>Materia 1</li>
            <li>Materia 2</li>
        </ul>
    </Card>
)

export default StudentCard