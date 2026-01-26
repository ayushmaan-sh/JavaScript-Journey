function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Server Connected...")
            }else{
                reject("Error while connecting to the server!")
            }
        },3000)
    })
}

//consuming promise
fetchData()
    .then((data)=>{
        console.log(data)
        return `ayushmaan.dev`
    })
    .then((value)=>{
        console.log(value); //ayushmaan.dev
    })
    .catch((error)=>{console.log(error)})
