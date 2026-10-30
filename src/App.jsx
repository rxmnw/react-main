import React, { useReducer } from 'react'

const emptyForm = {name: '', age: '', city: '', description: ''}

const colors = [
  'bg-rose-100 text-rose-600',
  'bg-amber-100 text-amber-600',
  'bg-emerald-100 text-emerald-600',
  'bg-sky-100 text-sky-600'
]

const initialState = {
  form: emptyForm,
  editId: null,
  open: false,
  search: '',
  info: null,
  data: [
    {id: 1, name: "Ahmad", age: 18, city: "Dushanbe", description: "Frontend developer"},
    {id: 2, name: "Alisher", age: 15, city: "Khujand", description: "Student"},
    {id: 3, name: "Abdullo", age: 19, city: "Kulob", description: "Businessman"},
    {id: 4, name: "Qrbon", age: 22, city: "Vahdat", description: "Backend Developer"}
  ]
}

const countReducer = (state, action) => {
  if (action.type === 'delete') {
    return {...state, data: state.data.filter((el) => el.id !== action.id)}
  }

  if (action.type === 'search') {
    return {...state, search: action.value}
  }

  if (action.type === 'info') {
    return {...state, info: action.user}
  }

  if (action.type === 'closeInfo') {
    return {...state, info: null}
  }

  if (action.type === 'openAdd') {
    return {...state, open: true, editId: null, form: emptyForm}
  }

  if (action.type === 'edit') {
    return {...state, open: true, editId: action.user.id, form: action.user}
  }

  if (action.type === 'changeValue') {
    return {...state, form: {...state.form, [action.field]: action.value}}
  }

  if (action.type === 'close') {
    return {...state, open: false, editId: null, form: emptyForm}
  }

  if (action.type === 'submit') {
    return {
      ...state,
      data: state.editId !== null
        ? state.data.map((el) => el.id === state.editId ? {...el, ...state.form} : el)
        : [...state.data, {...state.form, id: Date.now()}],
      open: false,
      editId: null,
      form: emptyForm
    }
  }

  return state
}

const App = () => {
  const [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div className='min-h-screen bg-stone-100 px-4 py-10'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-wrap items-end justify-between gap-4 mb-8'>
          <div>
            <h1 className='text-4xl font-black tracking-tight text-stone-900'>Users</h1>
           </div>

          <div className='flex gap-3'>
            <div className='relative'>
               <input
                type='search'
                placeholder='Search by name'
                className='w-[240px] bg-white pl-11 pr-4 py-3 rounded-2xl shadow-sm outline-none ring-1 ring-stone-200 focus:ring-2 focus:ring-stone-900 transition'
                value={state.search}
                onChange={(e) => dispatch({type: 'search', value: e.target.value})}
              />
            </div>
            <button
              className='bg-stone-900 hover:bg-stone-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-sm transition'
              onClick={() => dispatch({type: 'openAdd'})}
            >
              + New user
            </button>
          </div>
        </div>

        <div className='bg-white rounded-3xl shadow-sm ring-1 ring-stone-200 overflow-hidden'>
          <table className='w-full text-left'>
            <thead>
              <tr className='text-xs uppercase tracking-wider text-stone-400'>
                <th className='px-6 py-4 font-medium'>Name</th>
                <th className='px-6 py-4 font-medium'>Age</th>
                <th className='px-6 py-4 font-medium'>City</th>
                <th className='px-6 py-4 font-medium text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-stone-100'>
              {state.data
                .filter((el) => el.name.toLowerCase().includes(state.search.toLowerCase()))
                .map((el) => (
                  <tr key={el.id} className='hover:bg-stone-50 transition'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-4'>
                        
                        <span className='font-semibold text-stone-900'>{el.name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-stone-600'>{el.age}</td>
                    <td className='px-6 py-4'>
                      <span className='bg-stone-100 text-stone-700 text-sm font-medium px-3 py-1 rounded-lg'>
                        {el.city}
                      </span>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-1'>
                        <button
                          className='px-3 py-1.5 rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-900 font-medium transition'
                          onClick={() => dispatch({type: 'info', user: el})}
                        >
                          Info
                        </button>
                        <button
                          className='px-3 py-1.5 rounded-lg text-sky-600 hover:bg-sky-50 font-medium transition'
                          onClick={() => dispatch({type: 'edit', user: el})}
                        >
                          Edit
                        </button>
                        <button
                          className='px-3 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 font-medium transition'
                          onClick={() => dispatch({type: 'delete', id: el.id})}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {state.info && (
        <div className='fixed inset-0 bg-stone-900/40 backdrop-blur-[2px] flex justify-center items-center p-4'>
          <div className='bg-white p-8 rounded-3xl shadow-2xl w-[380px]'>
            <div className={`w-16 h-16 rounded-2xl font-bold text-2xl flex items-center justify-center ${colors[state.info.id % colors.length]}`}>
              {state.info.name[0]}
            </div>
            <h2 className='text-2xl font-black text-stone-900 mt-5'>{state.info.name}</h2>
            <p className='text-stone-500 mt-1'>{state.info.age} years · {state.info.city}</p>
            <p className='text-stone-700 mt-5 leading-relaxed'>{state.info.description}</p>
            <button
              className='mt-8 w-full bg-stone-900 hover:bg-stone-700 text-white font-semibold py-3 rounded-2xl transition'
              onClick={() => dispatch({type: 'closeInfo'})}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {state.open && (
        <div className='fixed inset-0 bg-stone-900/40 backdrop-blur-[2px] flex justify-center items-center p-4'>
          <form
            className='bg-white p-8 rounded-3xl shadow-2xl flex flex-col gap-5 w-[400px]'
            onSubmit={(e) => {
              e.preventDefault()
              dispatch({type: 'submit'})
            }}
          >
            <h2 className='text-2xl font-black text-stone-900'>
              {state.editId !== null ? 'Edit user' : 'New user'}
            </h2>

            {Object.keys(emptyForm).map((field) => (
              <label key={field} className='flex flex-col gap-1.5'>
                <span className='text-sm font-medium text-stone-500 capitalize'>{field}</span>
                <input
                  required
                  type={field === 'age' ? 'number' : 'text'}
                  className='bg-stone-50 px-4 py-3 rounded-xl outline-none ring-1 ring-stone-200 focus:ring-2 focus:ring-stone-900 transition'
                  value={state.form[field]}
                  onChange={(e) => dispatch({type: 'changeValue', field, value: e.target.value})}
                />
              </label>
            ))}

            <div className='flex gap-3 mt-2'>
              <button
                type='button'
                className='flex-1 py-3 rounded-2xl font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 transition'
                onClick={() => dispatch({type: 'close'})}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='flex-1 py-3 rounded-2xl font-semibold text-white bg-stone-900 hover:bg-stone-700 transition'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default App