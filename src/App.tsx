import './App.css'
import Machine from './Machine'

function GenerateRandomFruit(): string {
  //const fruits: string[] = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩", "🍌", "🍍", "🥭", "🍎", "🍐", "🍒", "🍓", "🥝", "🥥", "🫐"];
  const fruits: string[] = ["🍉", "🍌", "🍎",  "🍒", "🍓", "🥝"];
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function App() {
  type Machine = {fruit1: string, fruit2: string, fruit3: string};
  const machines: Machine[] = [{fruit1: GenerateRandomFruit(), fruit2: GenerateRandomFruit(), fruit3: GenerateRandomFruit()},
                                {fruit1: GenerateRandomFruit(), fruit2: GenerateRandomFruit(), fruit3: GenerateRandomFruit()},
                                {fruit1: GenerateRandomFruit(), fruit2: GenerateRandomFruit(), fruit3: GenerateRandomFruit()}];
  return (
    <div className="container">
      {machines.map((machine, index) => <Machine key={index} fruit1={machine.fruit1} fruit2={machine.fruit2} fruit3={machine.fruit3}/>)}
    </div>
  )
}

export default App
