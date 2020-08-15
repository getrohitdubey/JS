const getIDs= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const IDs=['234','345','456','789'];
        resolve(IDs);
    },1500)
})

getUser=ID=>{
    return new Promise((resolve,reject)=>{
        setTimeout(ID=>{
            const user={id:ID,name:"Rohit"}
            resolve(user)
        },1500,ID)
    })
}

getDetails=name=>{
    return new Promise((resolve,reject)=>{
        setTimeout(name=>{
            const userDetails={userName:name,city:'Bareilly',age:'29'}
            resolve(userDetails)
        },1500,name)
    })
}

getIDs.then((resp)=>{
    console.log(resp)
    return getUser(resp[1])
}).then((data)=>{
    console.log(data)
    return getDetails(data.name)
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("Eroor",err)
})