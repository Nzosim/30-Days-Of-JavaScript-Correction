//1
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length) // 3

//2
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length) // 3

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = sentence.replaceAll(/[%$@#&;]/g,'')
// I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30DaysOfJavaScript is also the result of love of teaching
let tableau = cleanSentence.split(' ')
let nbOccurence = 0, mot = "", nbOccurenceMot = 0
for(n in tableau){ 
    nbOccurence = 0
    for(i in tableau) {
        if(tableau[i] == tableau[n]) nbOccurence ++
    }
    if (nbOccurence > nbOccurenceMot) {
        nbOccurenceMot = nbOccurence 
        mot = tableau[n]
    } 
}
console.log(mot) // I








//4
let sum = "Il gagne 5000 euros de salaire par mois, 10000 euros de bonus annuel, 15000 euros de cours en ligne par mois.".match(/\d+/g)
let total = 0
for(n in sum) total += parseInt(sum[n])
console.log(total) // 30000