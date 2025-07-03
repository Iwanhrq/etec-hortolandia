import './App.css'

function App() {

  return (
    <>
      <section className="bg-blue-100 border border-blue-400 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Home</h2>
        <p className="text-blue-700">Bem-vindo à página inicial!</p>
      </section>

      <section className="bg-green-100 border border-green-400 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Cursos</h2>
        <p className="text-green-700">Veja nossos cursos disponíveis.</p>
      </section>

      <section className="bg-purple-100 border border-purple-400 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">DS</h2>
        <p className="text-purple-700">Conteúdo exclusivo do curso de Desenvolvimento de Sistemas.</p>
      </section>
    </>
  )
}

export default App
