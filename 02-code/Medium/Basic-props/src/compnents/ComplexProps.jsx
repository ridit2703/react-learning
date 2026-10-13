
import React from 'react'

function UserProfileCard({ user, theme, actions }) {
  const isDark = theme.mode === 'dark'

  const cardStyle = {
    backgroundColor: theme.primaryColor,
    fontSize: theme.fontSize,
  }

  return (
    <div
      style={cardStyle}
      className={`rounded-xl border p-6 shadow-md transition
        duration-300 hover:-translate-y-1 hover:shadow-xl
        ${
          isDark
            ? 'border-slate-600 text-white'
            : 'border-gray-200 text-gray-800'
        }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{user.name}</h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isDark
              ? 'bg-slate-700 text-slate-200'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {theme.mode}
        </span>
      </div>

      <div className="space-y-2">
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>User ID:</strong> {user.id}
        </p>

        <p>
          <strong>Last Action:</strong> {actions.lastAction}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {actions.login && (
          <button
            className="rounded-lg bg-blue-600 px-4 py-2
              font-medium text-white hover:bg-blue-700"
            onClick={() => alert(`${user.name} login clicked`)}
          >
            Login
          </button>
        )}

        {actions.logout && (
          <button
            className="rounded-lg bg-red-600 px-4 py-2
              font-medium text-white hover:bg-red-700"
            onClick={() => alert(`${user.name} logout clicked`)}
          >
            Logout
          </button>
        )}

        <button
          className={`rounded-lg px-4 py-2 font-medium ${
            isDark
              ? 'bg-slate-700 text-white hover:bg-slate-600'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          onClick={() => alert(`Viewing ${user.name}'s profile`)}
        >
          View Profile
        </button>
      </div>
    </div>
  )
}

function ComplexProps() {
  const users = [
    {
      user: {
        id: 1,
        name: 'Rahul',
        email: 'rahul@gmail.com',
      },
      theme: {
        mode: 'dark',
        primaryColor: '#1E293B',
        fontSize: '16px',
      },
      actions: {
        login: true,
        logout: false,
        lastAction: 'login',
      },
    },
    {
      user: {
        id: 2,
        name: 'Priya',
        email: 'priya@gmail.com',
      },
      theme: {
        mode: 'light',
        primaryColor: '#F8FAFC',
        fontSize: '18px',
      },
      actions: {
        login: false,
        logout: true,
        lastAction: 'logout',
      },
    },
    {
      user: {
        id: 3,
        name: 'Amit',
        email: 'amit@gmail.com',
      },
      theme: {
        mode: 'blue',
        primaryColor: '#2563EB',
        fontSize: '14px',
      },
      actions: {
        login: true,
        logout: false,
        lastAction: 'viewProfile',
      },
    },
  ]

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          User Profiles
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Learning complex props and nested objects in React
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((item) => (
            <UserProfileCard
              key={item.user.id}
              user={item.user}
              theme={item.theme}
              actions={item.actions}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComplexProps

