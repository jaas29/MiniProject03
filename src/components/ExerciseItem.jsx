
const ExerciseItem = (props) => {
  return (
    <div style={{
      backgroundColor: '#1E293B',
      padding: '15px',
      margin: '10px',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      border: '1px solid #334155'
    }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ color: '#10B981', margin: '0 0 5px 0' }}>{props.exercise.name}</h3>
        <p style={{ margin: '2px 0' }}>
          {props.exercise.sets} sets x {props.exercise.reps} reps @ {props.exercise.weight} lbs
        </p>
      </div>
      <div>
        <button onClick={props.onEdit} style={{ marginRight: '8px' }}>
          Edit
        </button>
        <button onClick={props.onDelete}
          style={{ backgroundColor: '#EF4444' }}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ExerciseItem