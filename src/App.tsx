import "./App.css";
function App() {
  // впростому коді без реакту тайпскрипт треба компілювати в js, але я замітив в реакті тайпскрипт компілюється автоматично.
  // впростому коді він компілюєтся за командою tsc назвафайлу.ts і в індекс штмл треба додавати його js файл

  // const number: number = 5;
  // const something: undefined = undefined;
  // const string: string = "Hello, TypeScript!";

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
  type Arr = 10 | 20 | 30;
  //cortage
  type Arr2 = [number, number, number] | undefined;

  // const arr = [1, 2, 3, 4, 5]; непідходить
  // const arr: Arr = [10, 20, 30]; підходить для uniontype
  // const arr: Arr2 = [102, 3320, 35670]; підходить для cortage

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

  abstract class Character {
    private lvl: number = 1;
    constructor(public name: string, protected health: number, protected damage: number, public readonly id: number) {


      if(health <= 0){
        throw new Error("Health must be greater than 0");
      }
    }
      showInfo = () =>{
    console.log(`Name: ${this.name}, Health: ${this.health}, Damage: ${this.damage}, ID: ${this.id}, Level: ${this.lvl}`);
  }

  
  checkHealth = () => {
          if(this.health <= 0){
            this.health = 0;
       console.log(`${this.name} is dead, health: ${this.health}`);
      } else {
        console.log(`${this.name} is alive, health: ${this.health}`);
      }
  }

  dealDamage = (target: Character) => {
target.health -= this.damage;}
  }

  class Warrior extends Character {
    constructor(name: string, health: number, damage: number, id: number) {
      super(name, health, damage, id);
    }

   public override dealDamage = (target: Character) => {
    // target.health -= this.damage;
    // console.log('Warrior is dealing damage with sword!');
    this.dealDamage(target);
    }
  }

  const player = new Warrior("John", 100, 25, 1);
  const enemy = new Warrior("Enemy", 80, 15, 2);

  player.dealDamage(enemy);
    player.dealDamage(enemy);
      player.dealDamage(enemy);
  enemy.checkHealth();

  // console.log(player.name);
  // console.log(player.id);
  // console.log(player.lvl);

  player.health = 999; // помилка, бо health - protected, доступний тільки в класі і його наслідникахq
  player.damage = 999; // помилка, бо damage - private, доступний тільки в класі

player.id = 1029384756; // помилка, бо id - readonly, його можна тільки читати, але не змінювати

  player.showInfo(); // помилка, бо showInfo - не визначений в класі Character, треба додати його в клас

  console.log(player); // помилка, бо damage - private, доступний тільки в класі
  return (
    <>
      <div className="hero">
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
      </div>
      <ul>
        {/* {users.map((user, index) => (
          <li key={index}>
            <h2>{user.name}</h2>
            <p>Department: {user.department}</p>
            <p>Skills: {user.skills.join(", ")}</p>
          </li>
        ))} */}
      </ul>
    </>
  );
}

export default App;
