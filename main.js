let x1 = "is it hot outside"
let y1 = 1       // Answer: Yes
let w1 = 5       // Weight of importance

let x2 = "is it raining"
let y2 = 0       // Answer: No
let w2 = 4       // Weight of importance

let x3 = "is it dusty"
let y3 = 0       // Answer: No
let w3 = 6       // Weight of importance

let t = 2        // Threshold or adjustment

let q1 = "should go for shopping today ?"
let q = (y1*w1) + (y2*w2) + (y3*w3) - t

console.log(q)   // Output: 3

