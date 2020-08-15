function func(){
    setTimeout(()=>{
        const IDs=['123','456','789','876']
        console.log(IDs)
            setTimeout( id=>{
                const user={userId:id,name:'Rohit'}
                console.log(user);
                setTimeout( name=>{
                    const userDetails={userName:name,city:'Bareilly',age:'29'}
                    console.log(userDetails);
                },1500,user.name)
            },1500,IDs[2])
    },1500)
}

func();
