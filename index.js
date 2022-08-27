
const answer = ["You Should do it now!", 
"Not yet", 
"drink water then do it!", 
"comeback after 1 hour then click me again",
"Trust me I know you can do it",
"Take a breathe then decide",
"DO IT!!! JUUSSTT! DOOO IT!!!",
"YOU ONLY LIVE ONCE THERE IS NO RETRY",
"Pm me char haha",
"yes but no! lol i hope it helps",
"Remember once in. Never go out"
]

const btn = document.getElementById("btn")

let decide = document.getElementById("decide")

let extend = document.getElementById("extend")

btn.addEventListener('click', function(){
  let decider = randomChose()
  decide.textContent = answer[decider]
})

function randomChose(){
  return Math.floor(Math.random() * answer.length)
}


