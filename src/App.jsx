import { useState } from 'react';
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const [dummy, setDummy] = useState(0);
  const btnClick = () => {
    console.log(`Clik me invoked !`);
    setDummy(dummy + 1);
    console.log(`Clicked the Button !`)
  }
  return (
    <>
      <div>
        <FirstComponent n={dummy} />
        <button onClick={() => { btnClick() }}>Click Me !</button>
      </div>
    </>
  )
}

export default App;





// import { useState } from 'react';
// import FirstComponent from './components/FirstComponent';

// const App = () => {

//   let n = 'Data passed from parent to Child';
//   let ary = [1, 2, 3, 4, 5];

//   return (
//     <>
//       <FirstComponent ary={ary} />
//     </>
//   )
// }

// export default App;









// const App = () => {
//   const [dummy, setDummy] = useState(0);
//   const btnClick = () => {
//     console.log(`Clik me invoked !`);
//     setDummy(dummy + 1);
//     console.log(`Clicked the Button !`)
//   }
//   return (
//     <>
//       <div>
//         <h1>{dummy}</h1>
//         <br />
//         <button onClick={() => { btnClick() }}>Click Me !</button>
//       </div>
//     </>
//   )
// }

// export default App;






// const App = () => {

//   const btnClick = () => {
//     console.log(`This is baalu`);
//   }

//   return (
//     <>
//       <div>
//         <button onClick={() => { btnClick() }}>Click Me !</button>
//       </div>
//     </>
//   )
// }

// export default App;







// const App = () => {

//   let name = "baalut";

//   return (
//     <>
//       <div>
//         {name.length > 5 ? <h2>Baalu is here</h2> : <h2>Baalu is not here</h2>}
//       </div>
//     </>
//   )
// }

// export default App;



// const App = () => {
//   let x = "Hi this is Baalu !";
//   let ary = ["firstname", "lastname"]
//   return (
//     <>
//       <div>
//         <h1>{x}</h1>
//         {ary.map((lable) => {
//           return <h2>{lable}</h2>
//         })}
//       </div>
//     </>
//   )
// }

// export default App;


// Semvar
// Export / default, Import
// Hooks
// Props