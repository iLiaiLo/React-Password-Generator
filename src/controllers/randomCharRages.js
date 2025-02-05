function randomCharRages(formDataArray){
    const charCodes=[[65,90] , [97,122] , [48,57] , [[33,47],[58,64],[91,96],[123,126]]]
    const includedCharCodes=formDataArray.reduce((acc,curr,index)=>{
        if(curr){
        acc.push(charCodes[index])
        }
        return acc
    },[])
    return includedCharCodes
}
export default randomCharRages