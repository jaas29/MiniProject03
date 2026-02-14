import { useState } from 'react'
import './App.css'
import ExerciseForm from './components/ExerciseForm'
import ExerciseList from './components/ExerciseList'

function App() {
  const [exercises, setExercises] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  const handleAddExercise = (newExercise) => {
    setExercises([...exercises, newExercise])
  }

  const handleDeleteExercise = (indexToRemove) => {
    setExercises(exercises.filter((item, index) => index !== indexToRemove))
    if (editingIndex === indexToRemove) {
      setEditingIndex(null)
    }
  }

  const handleUpdateExercise = (updatedExercise) => {
    setExercises(exercises.map((item, index) =>
      index === editingIndex ? updatedExercise : item
    ))
    setEditingIndex(null)
  }

  const handleEditClick = (index) => {
    setEditingIndex(index)
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
  }

  return (
    <div>
      <h1>Workout Tracker</h1>

      <ExerciseForm
        onAdd={handleAddExercise}
        onUpdate={handleUpdateExercise}
        onCancel={handleCancelEdit}
        editingExercise={editingIndex !== null ? exercises[editingIndex] : null}
      />

      <ExerciseList
        exercises={exercises}
        onDelete={handleDeleteExercise}
        onEdit={handleEditClick}
      />
    </div>
  )
}

export default App