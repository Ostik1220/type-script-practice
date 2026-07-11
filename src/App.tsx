import "./App.css";
import {RPG} from "./rpg"
function App() {
  // впростому коді без реакту тайпскрипт треба компілювати в js, але я замітив в реакті тайпскрипт компілюється автоматично.
  // впростому коді він компілюєтся за командою tsc назвафайлу.ts і в індекс штмл треба додавати його js файл

  // const number: number = 5;
  // const something: undefined = undefined;
  // const string: string = "Hello, TypeScript!";
  // const any : any = "This can be any type"; //any - будь-який тип, можна присвоїти будь-яке значення і використовувати без перевірки типу
  // const unknown : unknown = "This can be any type"; //unknown - невідомий тип, можна присвоїти будь-яке значення, але не можна використовувати без перевірки типу

  type Departmet = "IT" | "HR" | "Sales"; //union type - обмежує значення до певних рядків

  interface User {
    name: string;
    age?: number; //не обовязкове
    department: Departmet; //використання union type в інтерфейсі
    skills: string[]; //не обовязкове, масив рядків
  }

  const user: User = {
    name: "John",
    department: "IT",
    skills: ["JavaScript", "TypeScript", "React"],
    age: 30,
    qwe: "qwe", //не можна додавати або забирати властивості, які не визначені в інтерфейсі User. Але їх можна додати нище
  };

  const users : User[] = [ // масив обєктів типу User
    {
      name: "Alice",
      department: "HR",
      age: 28,
      skills: ["Recruitment", "Employee Relations"],
      qwe: "qwe",
    },
    {
      name: "Bob",
      department: "Sales",
      age: 35,
      skills: ["Negotiation", "Customer Relationship Management"],
      qwe: "qwe",
    },
    {
      name: "Charlie",
      department: "IT",
      age: 25,
      skills: ["JavaScript", "TypeScript", "React"],
      qwe: "qwe",
    },
  ];

  interface User {
    name: string;
    age?: number;
    department: Departmet;
    qwe: string; // Додано нову властивість qwe
  }

  function calcAvrageAge (users: User[]): number {
    const totalAge = users.reduce((sum, user) => sum + (user.age || 0), 0);
    return totalAge / users.length;
  }

  let date: unknown = ""; //unknown - невідомий тип, можна присвоїти будь-яке значення, але не можна використовувати без перевірки типу
  let date2: any = ""; //any - будь-який тип, можна присвоїти будь-яке значення і використовувати без перевірки типу

  if (typeof date === "string") {
    date = date.toLowerCase(); // помилка, бо невідомий тип, треба перевірити тип перед використанням
  }

  date2 = date2.toLowerCase(); // працює, бо any - будь-який тип, можна використовувати без перевірки типу

  //uniontype
  type Arr = number[] | string[];
  //cortage
  type Arr2 = [number, number, number] | undefined;

  //litaral type - обмежує значення до певних рядків або чисел
  type Arr3 = "qwe" | "asd" | "zxc";

  // const arr = [1, 2, 3, 4, 5]; непідходить
  // const arr: Arr = [10, 20, 30, "hello"]; підходить для uniontype
  // const arr: Arr2 = [102, 3320, 35670]; підходить для cortage
  //const arr: Arr3 = "qwe"; підходить для litaral type


  const deliveryStatus  = {
    comleted: "Completed",
    pending: "Pending",
    inProgress: "In Progress",
  } as const; //as const - робить обєкт константою, тобто його властивості не можна змінювати

  enum ROLES{
    ADMIN = "ADMIN",
    USER = "USER",
    MODERATOR = "MODERATOR"
  }

  console.log(ROLES.ADMIN); 
  console.log(ROLES.USER);
  console.log(ROLES.MODERATOR);

  type callback = (users:User[], department:Departmet) => User[]

  const sortUsers : callback =(users, department) => {
    return users.filter((user) => user.department === department).sort((a, b) => a.name.localeCompare(b.name));
  }

  const ErrorHandler = (message:string) => {
    throw new Error(message);
  }
  //never - ніколи не получется таке значення

  const typeMessage = (message:string) => {
     console.log(message)
  }
  //void - значення завжди буде пустим

  console.log(sortUsers(users, "HR"));
  console.log(calcAvrageAge(users));

  // console.log(ErrorHandler("this is wrong"), typeMessage("hello"))


   const input = document.querySelector<HTMLInputElement>("input")
  // const input = document.querySelector("input") as HTMLInputElement; //as HTMLInputElement - робить елемент input типу HTMLInputElement, тобто можна використовувати властивості input, які не доступні для HTMLElement

  console.log(input?.value); 
  type ElementType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement; //union type - обмежує значення до певних типів елементів

  function takeElement<T extends ElementType>(selector:string){
const element = document.querySelector<T>(selector);
if(!element){
  throw new Error(`Element with selector ${selector} not found`);
}
return element;
  }

  const inputValue = takeElement<HTMLInputElement>("input").value; //використання generic типу для функції takeElement, щоб повернути елемент типу HTMLInputElement
   
  console.log(inputValue);

  type arrayUser = string | number | boolean | User; //union type - обмежує значення до певних типів

  const array: Array<arrayUser> = ["hello", 42, true, user];
  return (
    <>
      <div className="hero">
        {/* <h1>{user.name}</h1> */}
        {/* <p>Age: {user.age}</p> */}
        
      </div>
      input: <input type="text" />
      <ul>
        {/* {users.map((user, index) => (
          <li key={index}>
            <h2>{user.name}</h2>
            <p>Department: {user.department}</p>
            <p>Skills: {user.skills.join(", ")}</p>
          </li>
        ))} */}
      </ul>
      <RPG />
    </>
  );
}

export default App;
