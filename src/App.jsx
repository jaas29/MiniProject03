import { useState, useEffect } from 'react'
import './App.css'
import ExerciseForm from './components/ExerciseForm'
import ExerciseList from './components/ExerciseList'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const initialWeekData = {}
days.forEach(day => {
  initialWeekData[day] = { exercises: [], isRestDay: false }
})


function App() {
  // State for selected day, week data, and editing index
  const [selectedDay, setSelectedDay] = useState('Monday')
  const [weekData, setWeekData] = useState(() => {
    const saved = localStorage.getItem('weekData')
    return saved ? JSON.parse(saved) : initialWeekData
  })
  const [editingIndex, setEditingIndex] = useState(null)

  // Save week data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('weekData', JSON.stringify(weekData))
  }, [weekData])

  const currentDay = weekData[selectedDay]
  const currentExercises = currentDay.exercises

  // Handlers for day selection, rest day toggle, adding/updating/deleting exercises, and editing
  const handleDayClick = (day) => {
    setSelectedDay(day)
    setEditingIndex(null)
  }

  const handleToggleRestDay = () => {
    setWeekData({
      ...weekData,
      [selectedDay]: {
        ...currentDay,
        isRestDay: !currentDay.isRestDay,
        exercises: !currentDay.isRestDay ? [] : currentDay.exercises
      }
    })
    setEditingIndex(null)
  }

  const handleAddExercise = (newExercise) => {
    setWeekData({
      ...weekData,
      [selectedDay]: {
        ...currentDay,
        exercises: [...currentExercises, newExercise]
      }
    })
  }

  const handleDeleteExercise = (indexToRemove) => {
    setWeekData({
      ...weekData,
      [selectedDay]: {
        ...currentDay,
        exercises: currentExercises.filter((_, index) => index !== indexToRemove)
      }
    })
    if (editingIndex === indexToRemove) {
      setEditingIndex(null)
    }
  }

  const handleUpdateExercise = (updatedExercise) => {
    setWeekData({
      ...weekData,
      [selectedDay]: {
        ...currentDay,
        exercises: currentExercises.map((item, index) =>
          index === editingIndex ? updatedExercise : item
        )
      }
    })
    setEditingIndex(null)
  }

  // When edit button is clicked, set the editing index to the exercise being edited
  const handleEditClick = (index) => {
    setEditingIndex(index)
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
  }

  return (
    <div>
      <h1>Workout Tracker</h1>

      {/* Day selector */}
      <div className="day-selector">
        {days.map(day => (
          <button
            key={day}
            className={`day-btn ${selectedDay === day ? 'day-btn-active' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      <h2 className="day-title">{selectedDay}</h2>

      {/* Rest day toggle */}
      <label className="rest-day-toggle">
        <input
          type="checkbox"
          checked={currentDay.isRestDay}
          onChange={handleToggleRestDay}
        />
        Rest Day
      </label>

      {currentDay.isRestDay ? (
        <div className="card rest-day-card">
          <h2>Rest Day</h2>
          <p>Take it easy and recover!</p>
        </div>
      ) : (
        <>
          <ExerciseForm
            key={editingIndex}
            onAdd={handleAddExercise}
            onUpdate={handleUpdateExercise}
            onCancel={handleCancelEdit}
            editingExercise={editingIndex !== null ? currentExercises[editingIndex] : null}
          />

          <ExerciseList
            exercises={currentExercises}
            onDelete={handleDeleteExercise}
            onEdit={handleEditClick}
          />
        </>
      )}
    </div>
  )
}

export default App
