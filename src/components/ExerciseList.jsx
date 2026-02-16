import ExerciseItem from './ExerciseItem'

const ExerciseList = (props) => {
  // .reduce() calculates total sets across all exercises
  const totalSets = props.exercises.reduce(
    (total, exercise) => total + Number(exercise.sets), 0
  )

  // .map() + Math.max finds the heaviest weight lifted
  const heaviestLift = props.exercises.length > 0
    ? Math.max(...props.exercises.map(exercise => Number(exercise.weight)))
    : 0

  return (
    <div>
      <h2>Your Exercises</h2>

      {props.exercises.length === 0 ? (
        <p>No exercises added yet. Add your first exercise above!</p>
      ) : (
        <div>
          {/* .map() renders each exercise */}
          {props.exercises.map((exercise, index) => (
            <ExerciseItem
              key={index}
              exercise={exercise}
              onDelete={() => props.onDelete(index)}
              onEdit={() => props.onEdit(index)}
            />
          ))}

          {/* Workout summary section */}
          <div className="summary-box">
            <h3 style={{ color: '#10B981' }}>Workout Summary</h3>
            <p>Total Exercises: {props.exercises.length}</p>
            <p>Total Sets: {totalSets}</p>
            <p>Heaviest Lift: {heaviestLift} lbs</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExerciseList