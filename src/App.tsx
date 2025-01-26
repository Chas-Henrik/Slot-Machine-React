import './App.css'
import Machine from './Machine'

function GenerateRandomFruit(): string {
  //const fruits: string[] = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩", "🍌", "🍍", "🥭", "🍎", "🍐", "🍒", "🍓", "🥝", "🥥", "🫐"];
  const fruits: string[] = ["🍉", "🍌", "🍎",  "🍒", "🍓", "🥝"];
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function App() {
  return (
    <div className="container">
      <Machine fruit1={GenerateRandomFruit()} fruit2={GenerateRandomFruit()} fruit3={GenerateRandomFruit()}/>
      <Machine fruit1={GenerateRandomFruit()} fruit2={GenerateRandomFruit()} fruit3={GenerateRandomFruit()}/>
      <Machine fruit1={GenerateRandomFruit()} fruit2={GenerateRandomFruit()} fruit3={GenerateRandomFruit()}/>
    </div>
  )
}

export default App
