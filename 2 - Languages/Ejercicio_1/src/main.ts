import "./style.css";

// Array Operations
function head<T>([first]: T[]): T | undefined {
  return first;
}

function tail<T>([, ...rest]: T[]): T[] {
  return rest;
}

function init<T>(array: T[]): T[] {
  return array.slice(0, -1);
}

function last<T>(array: T[]): T {
  return array[array.length - 1];
}

const numeros = [1, 2, 3, 4];
const primerNumero = head(numeros);
const restoNumeros = tail(numeros);
const numerosInit = init(numeros);
const ultimoNumero = last(numeros);

console.log(numeros);
console.log(primerNumero);
console.log(restoNumeros);
console.log(numerosInit);
console.log(ultimoNumero);

// Concat

function concat<T>(array1: T[], array2: T[]): T[] {
  return [...array1, ...array2];
}

const numeros2 = [5, 6, 7, 8];
const numerosConcatenados = concat(numeros, numeros2);

console.log(numerosConcatenados);

// Clone Merge

function clone<T>(array: T[]): T[] {
  return [...array];
}

const numerosClonados = clone(numeros);
console.log(numeros === numerosClonados);

function merge<T>(array1: T[], array2: T[]): T[] {
  return [...array1, ...array2];
}

const numerosMerge = merge(numeros, numeros2);
console.log(numerosMerge);

// Read Books:

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string): boolean {
  return books.some((book) => book.title === titleToSearch && book.isRead);
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// Slot Machine

class SlothMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  private getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private play(): void {
    this.coins++;

    const first = this.getRandomBoolean();
    const second = this.getRandomBoolean();
    const third = this.getRandomBoolean();

    if (first && second && third) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }

  public playMachine(): void {
    this.play();
  }
}

const machine1 = new SlothMachine();
machine1.playMachine();
machine1.playMachine();
machine1.playMachine();
machine1.playMachine();
machine1.playMachine();
