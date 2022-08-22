import { useState } from 'react'
import './styles.css'
import {Plus} from 'phosphor-react'
import {CardUser} from '../../components/cardUser'

export function Home() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);

    function handleAddStudent() {
        if (studentName !== '') {
            const newStudent = {
            name: studentName
            }

            setStudents([...students, newStudent]);

            setStudentName('')
        } else {
            alert('Digite um nome');
        }

        
    }

    function handleRemoveStudent(idStudent) {
        setStudents(students.filter((e, index) => index !== idStudent))
    }

    return(
        <div className="container">
            <h1>Lista de alunos do curso</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder="Nome do aluno"
                    onChange={(e) => setStudentName(e.target.value)}
                    value={studentName}
                />
                <button title="Adicionar aluno" onClick={handleAddStudent}>
                    <Plus size={26} weight="bold" color="#FFF" />
                </button>
            </div>

            <div className="container-lista">
                {
                    students.map((student, index) => <CardUser key={index} name={student.name} idStudent={index} onDeleteStudent={handleRemoveStudent} />) 
                }
            </div>
        </div>
    )
}