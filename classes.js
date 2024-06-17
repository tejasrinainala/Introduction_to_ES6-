/***Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.*/




class player {
    constructor(name,country)
    {
        this.name=name;
        this.country=country;
    }
    getDetails()
    {
        console.log(`${player.name} was born in ${player.country}`);
    }
}
const person1=new player("Ram","India")
person1.getDetails()
class TennisPlayer extends player{
    constructor(name,country,age)
    {
        super(name,country);
        this.age=age;
    }
    print()
    {
        console.log(`${TennisPlayer.name} is ${TennisPlayer.age} years old and knows how to play Tennis.`)
    }
}
const person2=new TennisPlayer(34)
person2.print()




//output
Ram was born in India
34 is undefined years old and knows how to play Tennis.
