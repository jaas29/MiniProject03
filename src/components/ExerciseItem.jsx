
const ExerciseItem = (props) => {
  return (
    <div style={{
      backgroundColor: '#0f3460',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ color: '#00b4d8', margin: '0 0 5px 0' }}>{props.exercise.name}</h3>
        <p style={{ margin: '2px 0' }}>
          {props.exercise.sets} sets x {props.exercise.reps} reps @ {props.exercise.weight} lbs
        </p>
      </div>
      <div>
        <button onClick={props.onEdit} style={{ backgroundColor: '#00b4d8', marginRight: '8px' }}>
          Edit
        </button>
        <button onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ExerciseItem