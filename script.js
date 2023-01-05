let body = document.querySelector("body")
let div = document.querySelector("div")

function isPrime(n) {
    let count = 0;

    for (let i=1; i<=n; i++) {
        if (n % i == 0){
            count++;
        }
    }

    if (count == 2) {
        return true;
    }else{
        return false;
    }
}

for (let i = 0; i <= 100; i++) {
    let box = document.createElement("div")
    box.style.width = "150px";
        box.style.height = "120px"
        box.style.margin = "8px";
        box.textContent = i;
        box.style.color="whitesmoke"
        if(isPrime(i)){
            box.style.backgroundColor = "red"
        }
     else if (i % 2 === 0) {
        box.style.backgroundColor = "green"
    }
    else {
        box.style.backgroundColor = "rgb(239, 239, 33)"
    }
    div.appendChild(box)
}