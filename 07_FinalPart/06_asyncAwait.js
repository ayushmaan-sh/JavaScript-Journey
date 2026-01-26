function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name:"ayushmaan", url:"https://ayushmaan.com"})
        },3000)
    })
}

async function getUserData(params) {
    try {   //resolve status
        console.log('Fetching user data...');
        const userData = await fetchUserData()
        console.log("User data: ", userData);
        
    } catch (error) { //reject status
        console.log("Error fetching data", error);
    }
}

getUserData()
