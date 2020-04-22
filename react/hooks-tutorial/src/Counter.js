const listener = () =>{
    console.log("상태 업데이트")
}

const unsubscribe = store.subscribe(listener)