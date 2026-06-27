
import './App.css'

function App() {

  // впростому коді без реакту тайпскрипт треба компілювати в js, але я замітив в реакті тайпскрипт компілюється автоматично. 
  // впростому коді він компілюєтся за командою tsc назвафайлу.ts і в індекс штмл треба додавати його js файл

  // const number: number = 5;
  // const something: undefined = undefined;
  // const string: string = "Hello, TypeScript!";

  interface User {
    name: string;
    age?: number;//не обовязкове
  }

  const user: User = {
    name: "John",
    qwe:"qwe" //не можна додавати або забирати властивості, які не визначені в інтерфейсі User. Але їх можна додати нище
  };

interface User {
      name: string;
    age?: number;
    qwe: string; // Додано нову властивість qwe
}








//uniontype
  type Arr = 10 | 20 | 30 
//cortage
  type Arr2 = [number,number,number] | undefined

  // const arr = [1, 2, 3, 4, 5]; непідходить
  // const arr: Arr = [10, 20, 30]; підходить для uniontype
  // const arr: Arr2 = [102, 3320, 35670]; підходить для cortage

  return (
    <>
      
        <div className="hero">
          <h1>{user.name}</h1>
          <p>Age: {user.age}</p>
        </div>
    </>
  )
}

export default App
