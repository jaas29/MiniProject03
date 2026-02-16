import { useState } from 'react'

const ExerciseForm = (props) => {
  const [name, setName] = useState(props.editingExercise?.name ?? '')
  const [sets, setSets] = useState(props.editingExercise?.sets ?? '')
  const [reps, setReps] = useState(props.editingExercise?.reps ?? '')
  const [weight, setWeight] = useState(props.editingExercise?.weight ?? '')

  const handleSubmit = () => {
    if (name === '' || sets === '' || reps === '' || weight === '') return

    const exercise = { name, sets, reps, weight }

    if (props.editingExercise) {
      props.onUpdate(exercise)
    } else {
      props.onAdd(exercise)
    }

    setName('')
    setSets('')
    setReps('')
    setWeight('')
  }

  const inputStyle = {
    padding: '10px',
    margin: '5px',
    borderRadius: '8px',
    border: '1px solid #475569',
    backgroundColor: '#334155',
    color: '#F1F5F9',
    fontSize: '1em',
    width: '180px',
    outline: 'none'
  }

  return (
    <div className="card">
      <h2>{props.editingExercise ? 'Edit Exercise' : 'Add Exercise'}</h2>

      <input placeholder="Exercise Name" value={name}
        onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <input placeholder="Sets" type="number" min="0" value={sets}
        onChange={(e) => setSets(e.target.value)} style={inputStyle} />
      <input placeholder="Reps" type="number" min="0" value={reps}
        onChange={(e) => setReps(e.target.value)} style={inputStyle} />
      <input placeholder="Weight (lbs)" type="number" min="0" value={weight}
        onChange={(e) => setWeight(e.target.value)} style={inputStyle} />

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSubmit}>
          {props.editingExercise ? 'Save Changes' : 'Add Exercise'}
        </button>

        {props.editingExercise ? (
          <button onClick={props.onCancel}
            style={{ backgroundColor: '#475569', color: '#F1F5F9', marginLeft: '10px' }}>
            Cancel
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default ExerciseForm