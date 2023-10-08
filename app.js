let btn = document.querySelector('#new');
let exercise = document.querySelector('.exerciselist');
let bodyPart = document.querySelector('#bodyPart');

const exerciseDatabase = {
    arm: [
        "Bicep Curls 3x8",
        "Tricep Dips 3x12",
        "Hammer Curls 3x12",
        "Tricep Pushdowns 3x12",
        "Preacher Curls 3x8",
        "Skull Crushers 3x8",
        "Concentration Curls 3x12",
        "Close-Grip Bench Press 3x12 ",
        "Reverse Curls 3x8",
        "Diamond Push-ups 3x15",
        "Wrist Curls 3x15",
        "EZ-Bar Curls 3x12",
        "Kickbacks 3x12",
        "Forearm Plank 30s",
        "Barbell Wrist Curls 3x12",
        "Spider Curls 3x12",
        "Dumbbell Hammer Curls 3x12",
        "Overhead Tricep Extension 3x12 ",
        "Zottman Curls 3x12",
        "Standing Tricep Extensions 3x15" 
        ],

    legs: [
        "Squats 3x5",
        "Lunges 3x12",
        "Deadlifts 3x5",
        "Leg Press 3x8",
        "Step-Ups 3x8",
        "Box Jumps 3x8",
        "Calf Raises 3x12",
        "Romanian Deadlifts 3x5",
        "Bulgarian Split Squats 3x8",
        "Hack Squats 3x8",
        "Front Squats 3x5",
        "Sumo Deadlifts 3x5",
        "Glute Bridges 3x8",
        "Hamstring Curls 3x8",
        "Wall Sits 3x8",
        "Pistol Squats 3x5",
        "Leg Extensions 3x8",
        "Walking Lunges 3x12",
        "Seated Calf Raises 4x12",  
    ],

    back: [
        "Pull-up 3x8",
        "Lat Pulldown 3x12",
        "Deadlifts 3x5",
        "Bent-Over Rows 3x8",
        "T-Bar Rows 3x8",
        "Seated Cable Rows 3x8",
        "Face Pulls 3x12",
        "Hyperextensions 3x8",
        "Chin-up 3x8",
        "Single-Arm Dumbbell Rows 3x8",
        "Machine Rows 3x8",
        "Pulldown with Resistance Bands 3x12",
        "Meadows Rows 3x8",
        "Barbell Shrugs 3x12",
        "Dumbbell Shrugs 3x12",
        "Inverted Rows 3x8",
        "Wide-Grip Pull-ups 3x12",
        "Close-Grip Pull-ups 3x12",
        "Renegade Rows 3x8",
        "Cable Face Pulls 3x12",
        "Cable Pullovers 3x12",
    ],

    chest: [
        "Bench Press 4x8",
        "Incline Bench Press 4x8",
        "Decline Bench Press 4x8",
        "Dumbbell Press 4x8",
        "Incline Dumbbell Press 3x8",
        "Decline Dumbbell Press 3x8",
        "Push-ups 3x12",
        "Chest Flyes 3x12",
        "Dips 3x12",
        "Machine Chest Press 3x8",
        "Cable Crossovers 3x12",
        "Pec Deck Flyes 3x12",
        "Close-Grip Bench Press 3x12",
        "Wide-Grip Bench Press 3x8",
        "Smith Machine Bench Press 3x8",
        "Barbell Pullovers 3x12",
    ],

    arms: [
        "Bicep Curls 3x8",
        "Tricep Dips 3x12",
        "Hammer Curls 3x12",
        "Tricep Pushdowns 3x12",
        "Preacher Curls 3x8",
        "Skull Crushers 3x8",
        "Concentration Curls 3x12",
        "Close-Grip Bench Press 3x12 ",
        "Reverse Curls 3x8",
        "Diamond Push-ups 3x15",
        "Wrist Curls 3x15",
        "EZ-Bar Curls 3x12",
        "Kickbacks 3x12",
        "Forearm Plank 30s",
        "Barbell Wrist Curls 3x12",
        "Spider Curls 3x12",
        "Dumbbell Hammer Curls 3x12",
        "Overhead Tricep Extension 3x12 ",
        "Zottman Curls 3x12",
        "Standing Tricep Extensions 3x15"
      ]
};

  
  // Example usage
 


function generateRandomExercises() {
    const muscleGroupInput = document.getElementById("muscleGroupInput").value.toLowerCase();
    const textarea = document.getElementById("exerciseResults");

    if (exerciseDatabase[muscleGroupInput] && exerciseDatabase[muscleGroupInput].length > 0) {
        const exercises = exerciseDatabase[muscleGroupInput];
        let resultText = "";

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * exercises.length);
            const randomExercise = exercises[randomIndex];
            resultText += `${i + 1}. ${randomExercise}\n`;
        }

        textarea.value = resultText;
    } else {
        textarea.value = `No exercises found for "${muscleGroupInput}". Please enter a valid body part.`;
    }
}
const generateExerciseButton = document.getElementById("generateExerciseButton");
generateExerciseButton.addEventListener("click", generateRandomExercises);