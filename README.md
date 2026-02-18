# Workout Tracker

**Jose Araya**

## Introduction

Workout Tracker is a React-based web app that lets users plan and manage their weekly workout routine. Users can select a day of the week, add exercises with details like sets, reps, and weight, and edit or delete them as needed. Each day's exercises are saved to local storage so data persists between sessions. Days can also be marked as rest days, which clears and hides the exercise list for that day.

## Core Ideas

- **State Management with Hooks**: The app uses useState to manage the selected day, weekly exercise data, and the current editing state. useEffect syncs the data to localStorage so workouts persist across page reloads.
- **Props**: Components share data by passing props. The `App` component passes functions like onAdd and onDelete to its child components so they can update the app's data.
- **Array Methods**: The app uses .map() to render exercise lists, .filter() to remove exercises, and .reduce() to calculate workout summary stats like total sets.

## Components

- **App** - The root component. Manages all state (selected day, weekly data, editing index) and contains the handler functions for adding, deleting, and updating exercises. Renders the day selector, rest day toggle, and conditionally renders the form and list.
- **ExerciseForm** - A controlled form for adding a new exercise or editing an existing one. Uses local state for the input fields and initializes from props when in edit mode.
- **ExerciseList** - Displays the list of exercises for the selected day using .map(). Also shows a workout summary section with stats calculated using .reduce().
- **ExerciseItem** - Represents a single exercise entry. Displays the exercise name, sets, reps, and weight, along with Edit and Delete buttons.

## Live URL
https://workouttrackerminiproject03.netlify.app/
