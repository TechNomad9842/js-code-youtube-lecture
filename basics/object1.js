// constructor method
// object.create 
//literal method
const mysym = Symbol("key1")
const Jsuser = {
    name : "Aditya",
    fullname : "AdityaNarainTiwari",
    [mysym] : "mykey1",
    age : 18,
    ismale : true,
    lastvisited :['monday','tuesday']

}
console.log(Jsuser.name)
console.log(Jsuser["fullname"])
console.log(Jsuser[mysym])
Jsuser.age = 21
console.log(Jsuser.age)
//Object.freeze(Jsuser)
Jsuser.greeting = function(){
    console.log("hello sir")
}
console.log(Jsuser.greeting()) 
