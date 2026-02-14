import ExerciseItem from './ExerciseItem'

const ExerciseList = (props) => {
  // .filter() - counts how many exercises have weight >= 100 lbs
  const heavyExercises = props.exercises.filter(
    (exercise) => Number(exercise.weight) >= 100
  )

  // .reduce() - calculates total volume (sets * reps * weight for each, all added up)
  const totalVolume = props.exercises.reduce(
    (total, exercise) => total + (Number(exercise.sets) * Number(exercise.reps) * Number(exercise.weight)), 0
  )

  return (
    <div>
      <h2>Your Exercises</h2>

      {props.exercises.length === 0 ? (
        <p>No exercises added yet. Add your first exercise above!</p>
      ) : (
        <div>
          {/* .map() - renders each exercise */}
          {props.exercises.map((exercise, index) => (
            <ExerciseItem
              key={index}
              exercise={exercise}
              onDelete={() => props.onDelete(index)}
              onEdit={() => props.onEdit(index)}
            />
          ))}

          {/* Summary stats */}
          <div className="summary-box">
            <h3 style={{ color: '#00b4d8' }}>Workout Summary</h3>
            <p>Total Exercises: {props.exercises.length}</p>
            <p>Heavy Exercises (100+ lbs): {heavyExercises.length}</p>
            <p>Total Volume: {totalVolume} lbs</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExerciseList