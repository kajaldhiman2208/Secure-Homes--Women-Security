// /* eslint no-restricted-globals: 0 */
// import React, { useEffect } from 'react';
// // import './healthtracker.css';
// import '../css/healthtracker.css'

// function Healthtracker() {

//     // script.js 

//     const editIcon = `<i class="fas fa-edit"></i>`

//     const deleteIcon = `<i class="fas fa-trash"></i>`

//     function clearInputs() {
//         wInput.value = ""
//         eInput.value = ""
//         bInput.value = ""
//     }

//     function addToLocalStorage() {
//         localStorage.setItem("date", JSON.stringify(date))
//         localStorage.setItem("water", JSON.stringify(water))
//         localStorage.setItem("exercise", JSON.stringify(exercise))
//         localStorage.setItem("bloodsugar", JSON.stringify(bloodsugar))
//     }

//     function activateEdit(i) {
//         wInput.value = water[i]
//         eInput.value = exercise[i]
//         bInput.value = bloodsugar[i]
//         editIndex = i
//         submitButton.classList.add("hidden")
//         editSection.classList.remove("hidden")
//     }


//     function cancelEdit() {
//         clearInputs()
//         editIndex = -1
//         submitButton.classList.remove("hidden")
//         editSection.classList.add("hidden")
//     }

//     function editRow() {
//         if (editIndex === -1) return
//         water[editIndex] = wInput.value
//         exercise[editIndex] = eInput.value
//         bloodsugar[editIndex] = bInput.value
//         fillTable()
//         addToLocalStorage()
//         cancelEdit()
//     }

//     function deleteRow(i) {
//         if (!confirm(
//             `Confirm that you want to delete the entry: 
// 	\n ${date[i]}: ${water[i]}ml, ${exercise[i]}min, 
// ${bloodsugar[i]}mg/dL`))
//             return
//         date.splice(i, 1)
//         water.splice(i, 1)
//         exercise.splice(i, 1)
//         bloodsugar.splice(i, 1)
//         document.querySelector(`#output > tr:nth-child(${i + 1})`)
//             .classList.add("delete-animation")
//         addToLocalStorage()
//         setTimeout(fillTable, 500)
//     }

//     function fillTable() {
//         const tbody = document.getElementById("output")
//         const rows =
//             Math.max(water.length, exercise.length, bloodsugar.length)
//         let html = ""
//         for (let i = 0; i < rows; i++) {
//             let w = water[i] || "N/A"
//             let e = exercise[i] || "N/A"
//             let b = bloodsugar[i] || "N/A"
//             let d = date[i] || "N/A"
//             html += `<tr> 
//                 <td>${d}</td> 
//                 <td>${w}</td> 
//                 <td>${e}</td> 
//                 <td>${b}</td> 
//                 <td> 
//                     <button onClick="activateEdit(${i})" 
//                             class="edit">${editIcon} 
//                     </button> 
//                 </td> 
//                 <td> 
//                     <button  
//                         onClick="deleteRow(${i})" 
//                         class="delete">${deleteIcon} 
//                     </button> 
//                 </td> 
//             </tr>`
//         }
//         if (tbody) {
//             tbody.innerHTML = html;
//         }
//     }


//     let editIndex = -1;

//     let date =
//         JSON.parse(localStorage.getItem("date")) || []
//     let water =
//         JSON.parse(localStorage.getItem("water")) || []
//     let exercise =
//         JSON.parse(localStorage.getItem("exercise")) || []
//     let bloodsugar =
//         JSON.parse(localStorage.getItem("bloodsugar")) || []

//     const wInput = document.getElementById("water")
//     const eInput = document.getElementById("exercise")
//     const bInput = document.getElementById("bloodsugerlevel")

//     const submitButton = document.getElementById("submit")
//     const editSection = document.getElementById("editSection")

//     fillTable()

//     if (submitButton) {
//         submitButton.addEventListener("click", () => {
//             const w = wInput.value || null;
//             const e = eInput.value || null;
//             const b = bInput.value || null;
//             if (w === null || e === null || b === null) {
//                 alert("Please enter all the fields.")
//                 return
//             }
//             const d = new Date().toLocaleDateString()
//             date = [d, ...date]
//             water = [w, ...water]
//             exercise = [e, ...exercise]
//             bloodsugar = [b, ...bloodsugar]
//             clearInputs()
//             fillTable()
//             addToLocalStorage()
//         })
//     }

//     useEffect(() => {
//         const tbody = document.getElementById("output");
//         if (tbody) {
//             fillTable();
//         }
//     }, [date, water, exercise, bloodsugar]);



//     return (
//         <>
//             <div className="body">
//                 <div className="app">
//                     <h1>Health Tracker App</h1>
//                     <div className="inputs">
//                         <div>
//                             <label htmlFor="water">Water Intake (in ml)</label>
//                             <input id="water" type="number" />
//                         </div>
//                         <div>
//                             <label htmlFor="exercise">Exercise Duration (in min)</label>
//                             <input id="exercise" type="number" />
//                         </div>
//                         <div>
//                             <label htmlFor="bloodsugerlevel">Blood Sugar Level (in mg/dL)</label>
//                             <input id="bloodsugerlevel" type="number" />
//                         </div>
//                     </div>
//                     <button id="submit">Submit</button>
//                     <div id="editSection" className="hidden">
//                         <button id="cancelEdit" onClick="cancelEdit()">
//                             Cancel
//                         </button>
//                         <button id="updateEntry" onClick="editRow()">
//                             Update
//                         </button>
//                     </div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>
//                                     Water Intake <br /> (in ml)
//                                 </th>
//                                 <th>
//                                     Exercise Duration <br /> (in min)
//                                 </th>
//                                 <th>
//                                     Blood Sugar Level <br /> (in mg/dL)
//                                 </th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody id="output"></tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Healthtracker;



// // import React, { useState, useEffect } from 'react';
// // import '../css/healthtracker.css';

// // function HealthTracker() {
// //     const [entries, setEntries] = useState([]);

// //     useEffect(() => {
// //         const storedEntries = JSON.parse(localStorage.getItem("healthEntries")) || [];
// //         setEntries(storedEntries);
// //     }, []);

// //     const handleAddEntry = () => {
// //         // Add validation here if needed
// //         const newEntry = {
// //             date: new Date().toLocaleDateString(),
// //             water: parseInt(document.getElementById("water").value, 10) || 0,
// //             exercise: parseInt(document.getElementById("exercise").value, 10) || 0,
// //             bloodSugar: parseInt(document.getElementById("bloodsugerlevel").value, 10) || 0
// //         };
// //         const updatedEntries = [...entries, newEntry];
// //         setEntries(updatedEntries);
// //         localStorage.setItem("healthEntries", JSON.stringify(updatedEntries));
// //     };

// //     const handleDeleteEntry = (index) => {
// //         const updatedEntries = [...entries];
// //         updatedEntries.splice(index, 1);
// //         setEntries(updatedEntries);
// //         localStorage.setItem("healthEntries", JSON.stringify(updatedEntries));
// //     };

// //     return (
// //         <>
// //             <div className="body">
// //                 <div className="app">
// //                     <h1>Health Tracker App</h1>
// //                     <div className="inputs">
// //                         <div>
// //                             <label htmlFor="water">Water Intake (in ml)</label>
// //                             <input id="water" type="number" />
// //                         </div>
// //                         <div>
// //                             <label htmlFor="exercise">Exercise Duration (in min)</label>
// //                             <input id="exercise" type="number" />
// //                         </div>
// //                         <div>
// //                             <label htmlFor="bloodsugerlevel">Blood Sugar Level (in mg/dL)</label>
// //                             <input id="bloodsugerlevel" type="number" />
// //                         </div>
// //                     </div>
// //                     <button id="submit">Submit</button>
// //                     <div id="editSection" className="hidden">
// //                         <button id="cancelEdit" onClick="cancelEdit()">
// //                             Cancel
// //                         </button>
// //                         <button id="updateEntry" onClick="editRow()">
// //                             Update
// //                         </button>
// //                     </div>
// //                     <table>
// //                         <thead>
// //                             <tr>
// //                                 <th>Date</th>
// //                                 <th>
// //                                     Water Intake <br /> (in ml)
// //                                 </th>
// //                                 <th>
// //                                     Exercise Duration <br /> (in min)
// //                                 </th>
// //                                 <th>
// //                                     Blood Sugar Level <br /> (in mg/dL)
// //                                 </th>
// //                                 <th>Edit</th>
// //                                 <th>Delete</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody id="output"></tbody>
// //                     </table>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default HealthTracker;


import React, { useState, useEffect } from 'react';
import '../css/healthtracker.css';

function HealthTracker() {
    const [entries, setEntries] = useState([]);
    const [water, setWater] = useState('');
    const [exercise, setExercise] = useState('');
    const [bloodSugar, setBloodSugar] = useState('');

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem("healthEntries")) || [];
        setEntries(storedEntries);
    }, []);

    const handleAddEntry = () => {
        if (!water || !exercise || !bloodSugar) {
            alert("Please enter all the fields.");
            return;
        }

        const newEntry = {
            date: new Date().toLocaleDateString(),
            water: parseInt(water),
            exercise: parseInt(exercise),
            bloodSugar: parseInt(bloodSugar)
        };
        const updatedEntries = [...entries, newEntry];
        setEntries(updatedEntries);
        localStorage.setItem("healthEntries", JSON.stringify(updatedEntries));
        // Clear input fields
        setWater('');
        setExercise('');
        setBloodSugar('');
    };

    const handleDeleteEntry = (index) => {
        const updatedEntries = [...entries];
        updatedEntries.splice(index, 1);
        setEntries(updatedEntries);
        localStorage.setItem("healthEntries", JSON.stringify(updatedEntries));
    };

    return (
        <>
            <div className="body">
                <div className="app">
                    <h1>Health Tracker App</h1>
                    <div className="inputs">
                        <div>
                            <label htmlFor="water">Water Intake (in ml)</label>
                            <input id="water" type="number" value={water} onChange={(e) => setWater(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="exercise">Exercise Duration (in min)</label>
                            <input id="exercise" type="number" value={exercise} onChange={(e) => setExercise(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="bloodsugerlevel">Blood Sugar Level (in mg/dL)</label>
                            <input id="bloodsugerlevel" type="number" value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={handleAddEntry}>Submit</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Water Intake (in ml)</th>
                                <th>Exercise Duration (in min)</th>
                                <th>Blood Sugar Level (in mg/dL)</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.water}</td>
                                    <td>{entry.exercise}</td>
                                    <td>{entry.bloodSugar}</td>
                                    <td>
                                        <button onClick={() => handleDeleteEntry(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default HealthTracker;
