// import React from 'react'


// function Card({children,title,color="blue"}){
//   const colorClasses={
//     blue:"border-blue-500 bg-blue-500",
//     green:"border-green-500 bg-green-500",
//     yellow:"border-yellow-500 bg-yellow-500"
//   }

//   return (
//     <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
//       {title && (
//         <h3 className="text-xl font-bold mb-3 to-gray-500">{title}</h3>
//       )}
//       <div className="text-gray-700">{children}</div>
//     </div>
//   )
// }

// function Container({children,layout='horizontal'}){
//   const layoutClasses={
//     vertical:"flex flex-col space-y-4",
//     horizontal:"flex flex-row flex-wrap gap-4"
//   };
//   return <div classname={layoutClasses[layout]}> {children}</div>
// }

// function ChildrenProps() {
//   return (
//     <section className="p-8 bg-white rounded-2xl shadow-lg">
//       <h2>Children Props</h2>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//       <div className="space-y-6">
//         <div>
//           <h3>Card Component with children</h3>
//           <Container layout="horizontal">
//             <Card title="User Profile" color="green">
//               <p className="mb-2">
//                 <strong>Name:</strong>John Doe
//               </p>
//                <p className="mb-2">
//                 <strong>Email:</strong>JohnDoe@gamil.com
//               </p>
//                <p className="mb-2">
//                 <strong>Position:</strong>founder
//               </p>
//             </Card>

//               <Card title="User Profile" color="yellow">
//               <p className="mb-2">
//                 <strong>Name:</strong>John Doe
//               </p>
//                <p className="mb-2">
//                 <strong>Email:</strong>JohnDoe@gamil.com
//               </p>
//                <p className="mb-2">
//                 <strong>Position:</strong>founder
//               </p>
//             </Card>
//           </Container>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ChildrenProps


import React from 'react'

function Card({ children, title, color = 'blue' }) {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50/70',
    green: 'border-emerald-500 bg-emerald-50/70',
    yellow: 'border-amber-500 bg-amber-50/70',
  }

  const titleColors = {
    blue: 'text-blue-700',
    green: 'text-emerald-700',
    yellow: 'text-amber-700',
  }

  return (
    <div
      className={`w-full rounded-xl border-l-4 ${colorClasses[color]}
      p-6 shadow-sm ring-1 ring-gray-200/70
      transition-all duration-300 hover:-translate-y-1
      hover:shadow-lg`}
    >
      {title && (
        <h3
          className={`mb-5 border-b border-gray-200 pb-3
          text-xl font-bold tracking-tight ${titleColors[color]}`}
        >
          {title}
        </h3>
      )}

      <div className="space-y-3 text-sm leading-6 text-gray-600">
        {children}
      </div>
    </div>
  )
}

function Container({ children, layout = 'horizontal' }) {
  const layoutClasses = {
    vertical: 'flex flex-col gap-5',
    horizontal: 'grid grid-cols-1 gap-6 md:grid-cols-2',
  }

  return (
    <div className={layoutClasses[layout]}>
      {children}
    </div>
  )
}

function ChildrenProps() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">

        <header className="mb-10 text-center">
         

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Children Props
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Build reusable components by passing JSX content through the
            children prop.
          </p>
        </header>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800">
              Card Components
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Each card shares the same structure but displays different content and styling.
            </p>
          </div>

          <Container layout="horizontal">
            <Card title="User Profile" color="green">
              <p>
                <strong className="font-semibold text-gray-800">Name:</strong>{' '}
                John Doe
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Email:</strong>{' '}
                johndoe@gmail.com
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Position:</strong>{' '}
                Founder
              </p>
            </Card>

            {/* <Card title="User Profile" color="yellow">
              <p>
                <strong className="font-semibold text-gray-800">Name:</strong>{' '}
                John Doe
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Email:</strong>{' '}
                johndoe@gmail.com
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Position:</strong>{' '}
                Founder
              </p>
            </Card> */}
            <Card title="Team Information" color="yellow">
              <p>
                <strong className="font-semibold text-gray-800">Team:</strong>{' '}
                Royal Challengers Bengaluru
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Captain:</strong>{' '}
                Rajat Patidar
              </p>
              <p>
                <strong className="font-semibold text-gray-800">Trophies:</strong>{' '}
                1 IPL Title
              </p>

              <button
                onClick={() => alert('Team details clicked!')}
                className="mt-4 rounded-lg bg-amber-500 px-5 py-2.5
      font-semibold text-white shadow-sm transition
      duration-200 hover:bg-amber-600 hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-amber-400
      focus:ring-offset-2"
              >
                View Details
              </button>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default ChildrenProps
