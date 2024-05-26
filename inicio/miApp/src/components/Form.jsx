import Google from './images/google-logo.png'
import Usuario from './images/usuario2-logo.png'
function App() {
  

  return (
    <>
    <div className="w-full h-screen flex flex-col items-center bg-blue-700 px-10 py-10 rounded-3xl border-2">
      <img className='w-28 h-28 rounded-3xl' src={Usuario}></img>
      <h1 className='text-slate-50 text-4xl  font-medium'>Iniciar sesión</h1>

      <div className='text-2xl mt-4'>
        <label className='text-slate-50'>Usuario*</label>
        <input className='form-input w-full border-2 text-1xl rounded-xl p-1 mt-1' placeholder="Introducir usuario"></input>
        <label className='text-slate-50'>Contraseña*</label>
        <input className='form-input w-full border-2 text-1xl rounded-xl p-1 mt-1' placeholder="Introducir contraseña"></input>
        <button className='text-yellow-200 mt-1'>¿Olvidaste la contraseña?</button>
      </div>

      <div className='mt-4'>
        <div className="flex justify-between items-center text-4xl text-slate-50 mt-6">
          <input className='text-3xl' type='checkbox' id='recordar' />
          <label className=''>Recordar cuenta</label>
        </div>
        <button className='bg-purple-50 btn btn-md p-4 text-3xl grid mt-6'>Iniciar sesión</button>
        <div className='text-slate-50 mt-10 text-3xl' >o Conectate con</div>
        <img className='w-10 h-10 rounded' src={Google}></img>
      </div>


      
    </div>
    </>
  )
}

export default App
