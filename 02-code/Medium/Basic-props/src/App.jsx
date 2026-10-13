// import { useState } from 'react'
// import BasicProps from "./compnents/BasicProps.jsx"
// import ChildrenProps from './compnents/ChildrenProps.jsx'
// import RefProps from './compnents/RefProps.jsx'
// import ThemeToggler from './compnents/ThemeToggler.jsx'
// import ComplexProps from './compnents/ComplexProps.jsx'
// import './App.css'


// function Navigation(){
//   const isDark=true;
//   const sections=[
//     {id:"basic",label:"Basic Props", icon:""},
//     {id:"ref",label:"ref Props", icon:""},
//     {id:"children",label:"children Props", icon:""},
//     {id:"complex",label:"complex Props", icon:""},
//     {id:"theme",label:"theme Props", icon:""}
//   ]
//   return (
//     <nav className={`sticky top-0 z-50 shadow-md`}>
//       <div>
//         <div>
//           {sections.map((section)=>(
//             <button
//             className={`px-4 py-2 rounded-lg font-medium bg-blue-500`}
//              key={section.id}>
//               <span className={`mr-2`}>{section.icon}</span>
//               {section.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
    
//   )
// }

// function AppContent(){
//   return (

//   <>
 
//   <div className={`min-h-screen bg-gray-800  text-white`}>
//    < Navigation />
//    <h1>hello</h1></div></>
//   )
// }


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <AppContent />
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import BasicProps from "./compnents/BasicProps.jsx"
import ChildrenProps from './compnents/ChildrenProps.jsx'
import RefProps from './compnents/RefProps.jsx'
import ThemeToggler from './compnents/ThemeToggler.jsx'
import ComplexProps from './compnents/ComplexProps.jsx'
import './App.css'

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "" },
    { id: "ref", label: "ref Props", icon: "" },
    { id: "children", label: "children Props", icon: "" },
    { id: "complex", label: "complex Props", icon: "" },
    { id: "theme", label: "theme Props", icon: "" }
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          {sections.map((section) => (
            <button
              className="rounded-xl border border-gray-700 bg-gray-800 px-5 py-2.5 font-medium text-gray-300 shadow-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              key={section.id}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-700 text-black">
      <Navigation />

      {/* <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 px-6 py-12 text-center shadow-2xl sm:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hello
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Explore React props and build your understanding of reusable components.
          </p>
        </div>
      </main> */}
      <div className="container mx-auto px-4 py-8 "></div>
      <header>
        <h1>React props explained</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ratione quo
           quam! Cum voluptates facilis facere iste dolores praesentium labore!</p>
      </header>
      <div className="space-y-8">
        <div id="basic" className="scroll-mt-200">
        <BasicProps/>
        </div>
         {/* <div id="basic" className="scroll-mt-200">
        <RefProps/>
        </div> */}
        <div id="basic" className="scroll-mt-200">
        <ChildrenProps/>
        </div>
        <div id="basic" className="scroll-mt-200">
        <ComplexProps/>
        </div>
        <div id="basic" className="scroll-mt-200">
        <RefProps/>
        </div>
        <div id="basic" className="scroll-mt-200">
        <ThemeToggler/>
        </div></div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppContent />
    </>
  )
}

export default App
