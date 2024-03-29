// Create a new project sub-directory in your workspace/javascript directory.
// Paste the array of student objects above into your JavaScript file.

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
// Copy the createStudentComponent function into your code.
// Add the following styles to your CSS.

const createStudentComponent = (students, className) => {
    return `
        <div class="student">
            <h1 class=${className}>${students.name}</h1>
            <section>${students.name}</section>
            <aside>${students.info}</aside>
        </div>
    `
}
// let createStudentComponent = (students) => `
//     <div id="student">
//         ${h1(students.name)}
//         ${section(students.subject)}
//         ${aside(students.info)}
//     </div>`


// student inputs
 // Add a container article to your HTML.

    // <article id="container"></article>

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

for (let i = 0; i < students.length; i++) {
    let studentComponent = ""
    if (students[i].score >= 60) {
        studentComponent = createStudentComponent(students[i], "passing") 
    } else {
        studentComponent = createStudentComponent(students[i], "failing")
    console.log(studentComponent)
   }
   const container = document.querySelector("#container")
   container.innerHTML += studentComponent
   }

// Write functions that build the sub-components of the larger student component.

// h1
// section
// aside

// const container2 = (students) =>
// `     <div class="div__container">
// <h1 class="xx-large passing">${students.name}</h1>
// <section class="bordered dashed section--padded">${students.subject}</section>
// <aside class=${students.info}</aside>
// </div>`

//  container2.innerHTML= document.querySelector("")

// let createStudentComponent = (students) => `
//     <div id="student">
//         ${h1(students.name)}
//         ${section(students.subject)}
//         ${aside(students.info)}
//     </div>`
