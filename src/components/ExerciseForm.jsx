import { useState, useEffect } from 'react'

const ExerciseForm = (props) => {
  const [name, setName] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')

  useEffect(() => {
    if (props.editingExercise) {
      setName(props.editingExercise.name) 
      setSets(props.editingExercise.sets)
      setReps(props.editingExercise.reps)
      setWeight(props.editingExercise.weight)
    } else {
      setName('')
      setSets('')
      setReps('')
      setWeight('')
    }
  }, [props.editingExercise])

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
    border: '1px solid #00b4d8',
    backgroundColor: '#1a1a2e',
    color: '#eaeaea',
    fontSize: '1em',
    width: '180px'
  }

  return (
    <div className="card" style={{ backgroundColor: '#16213e' }}>
      <h2>{props.editingExercise ? 'Edit Exercise' : 'Add Exercise'}</h2>

      <input placeholder="Exercise Name" value={name}
        onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <input placeholder="Sets" type="number" value={sets}
        onChange={(e) => setSets(e.target.value)} style={inputStyle} />
      <input placeholder="Reps" type="number" value={reps}
        onChange={(e) => setReps(e.target.value)} style={inputStyle} />
      <input placeholder="Weight (lbs)" type="number" value={weight}
        onChange={(e) => setWeight(e.target.value)} style={inputStyle} />

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSubmit}>
          {props.editingExercise ? 'Save Changes' : 'Add Exercise'}
        </button>

        {props.editingExercise ? (
          <button onClick={props.onCancel}
            style={{ backgroundColor: '#a8b2c1', color: '#1a1a2e', marginLeft: '10px' }}>
            Cancel
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default ExerciseForm