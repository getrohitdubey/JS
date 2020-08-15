async function fn(){
    const userIDs = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const IDs=['123','456','789','654']
            resolve(IDs);
        },1500)
    })
    userIDs.then((resp)=>{
        console.log(resp)
    })
    console.log("Hello World");
}

fn();