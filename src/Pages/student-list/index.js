import StudentCard from '../../components/student-card'
  
// const studentList =  null
const studentList = [
  {
    id: 1,
    name: undefined,
    registration: "001",
    course: "Sistemas para internet"
  },
  {
    id: 2,
    name: "Evelyn Gonçalves",
    registration: "002",
    course: "Sistemas para internet"
  },
]

const StudentList = () => {
  return(
    <>
    {/* !!studentList && studentList.map((student) !!studentList === booleano */}
    {/* !!studentList ?? studentList.map((student)  ?? nullish */}
    {/* {studentList?.map((student) elvis operator */}
    {studentList?.length ? 
      (
        <>
          {studentList?.map((student) => (
            <StudentCard 
              name={student.name ?? 'Sem nome de aluno'} 
              key={student.id}
              course={student.course}
              registration={student.registration}
            />
          ))}
        </>
      ) : <p>Lista de estudantes vazia</p>}
      

      
    </>
  )
}

export default StudentList