export const RPG = () => {
  interface NewCharacter {
    name: string;
    id: number;
    dealDamage: (target: Character) => void;
  }

  abstract class Character {
    private lvl: number = 1;
    constructor(
      public name: string,
      protected health: number,
      protected damage: number,
      public readonly id: number,
    ) {
      if (health <= 0) {
        throw new Error("Health must be greater than 0");
      }
    }
    showInfo = () => {
      console.log(
        `Name: ${this.name}, Health: ${this.health}, Damage: ${this.damage}, ID: ${this.id}, Level: ${this.lvl}`,
      );
    };

    checkHealth = () => {
      if (this.health <= 0) {
        this.health = 0;
        console.log(`${this.name} is dead, health: ${this.health}`);
      } else {
        console.log(`${this.name} is alive, health: ${this.health}`);
      }
    };

    dealDamage(target: Character) {
      if (this.health <= 0) {
        console.log(`${this.name} is dead and cannot deal damage.`);
        return;
      } else if (target.health <= 0) {
        console.log(`${target.name} is already dead and cannot take damage.`);
        return;
      }
      target.health -= this.damage;
    }
  }

  interface NewWarrior extends NewCharacter {
    name: string;
    specialWarriorAttack?: (target: Character) => void;
  }

  class Warrior extends Character implements NewWarrior {
    constructor(name: string, health: number, damage: number, id: number) {
      super(name, health, damage, id);
    }

    specialWarriorAttack(target: Character) {
      console.log("Warrior is dealing special damage with sword!");
      this.damage *= 2;
      super.dealDamage(target);
      this.damage /= 2;
    }

    public override dealDamage(target: Character) {
      // target.health -= this.damage;
      console.log("Warrior is dealing damage with sword!");
      super.dealDamage(target);
    }
  }

  interface NewMage extends NewCharacter {
    specialMageAttack: (target: Character) => void;
  }

  class Mage extends Character implements NewMage {
    constructor(name: string, health: number, damage: number, id: number) {
      super(name, health, damage, id);
    }

    specialMageAttack(target: Character) {
      console.log("Mage is dealing special damage with spell!");
      this.damage *= 3;
      super.dealDamage(target);
      this.damage /= 3;
    }

    public override dealDamage(target: Character) {
      // target.health -= this.damage;
      console.log("Mage is dealing damage with spell!");
      super.dealDamage(target);
    }
  }

  interface NewBoss extends NewCharacter {
    specialBossAttack: (target: Character) => void;
    dealDamage: (targets: Character) => void;
    dealMassiveDamage: (targets: Character[]) => void;
  }

  class Dragon extends Character implements NewBoss {
    constructor(name: string, health: number, damage: number, id: number) {
      super(name, health, damage, id);
    }

    specialBossAttack(target: Character) {
      console.log("Dragon is dealing special damage with fire breath!");
      this.damage *= 3;
      super.dealDamage(target);
      this.damage /= 3;
    }

    public override dealDamage(target: Character) {
      console.log("Dragon is dealing damage with fire breath!");
      // super.dealDamage(target);
    }

    public dealMassiveDamage(targets: Character[]) {
      console.log("Dragon is dealing massive damage with fire breath!");
      this.damage *= 3;
      targets.forEach((target) => super.dealDamage(target));
      this.damage /= 3;
    }
  }
  const player = new Warrior("John", 1000, 250, 1);
  const enemy = new Warrior("Enemy", 800, 150, 2);
  const mage = new Mage("Gandalf", 500, 310, 3);
  const dragon = new Dragon("Smaug", 2000, 100, 4);

  player.specialWarriorAttack(enemy);
  player.dealDamage(enemy);
  enemy.checkHealth();

  mage.specialMageAttack(player);
  player.checkHealth();

  dragon.dealMassiveDamage([player, enemy, mage]);

  player.checkHealth();
  enemy.checkHealth();
  mage.checkHealth();

  player.dealDamage(dragon);

  // console.log(player.name);
  // console.log(player.id);
  // console.log(player.lvl);

  //   player.health = 999; // помилка, бо health - protected, доступний тільки в класі і його наслідникахq
  //   player.damage = 999; // помилка, бо damage - private, доступний тільки в класі

  // player.id = 1029384756; // помилка, бо id - readonly, його можна тільки читати, але не змінювати

  player.showInfo(); // помилка, бо showInfo - не визначений в класі Character, треба додати його в клас

  console.log(player); // помилка, бо damage - private, доступний тільки в класі

  return (
    <div>
      <h1>RPG Game</h1>
      <ul>
        <li>
            <p>{player.name}</p>
            <p>Health: {player.health}</p>
            <p>Damage: {player.damage}</p>
            <p>ID: {player.id}</p>
            <p>Level: {player.lvl}</p>
        </li>
        <li>
            <p>{enemy.name}</p>
            <p>Health: {enemy.health}</p>
            <p>Damage: {enemy.damage}</p>
            <p>ID: {enemy.id}</p>
            <p>Level: {enemy.lvl}</p>
        </li>
        <li>
            <p>{mage.name}</p>
            <p>Health: {mage.health}</p>
            <p>Damage: {mage.damage}</p>
            <p>ID: {mage.id}</p>
            <p>Level: {mage.lvl}</p>
        </li>
        <li>
            <p>{dragon.name}</p>
            <p>Health: {dragon.health}</p>
            <p>Damage: {dragon.damage}</p>
            <p>ID: {dragon.id}</p>
            <p>Level: {dragon.lvl}</p>
        </li>
      </ul>
    </div>
  );
};
