import getRandom from "./randNumGen/getRandom.js";

const GeneratedPassword=(range,randomCharRages)=>{

    let Password="";

    const defautChars=randomCharRages.map((ranges)=>{
    
      
      if(ranges.length===4){
        const randChar=ranges[Math.floor(Math.random()*4)]
        const minChar=randChar[0];
        const maxChar=randChar[1];
        return String.fromCharCode(getRandom(minChar,maxChar))
      }
      return String.fromCharCode(getRandom(ranges[0],ranges[1]))
    })


    for(let i=0;i<defautChars.length;i++){
      Password+=defautChars[i];
    }

    for(let i=1;i<=range-defautChars.length;i++){
      const randElement=randomCharRages[Math.floor(Math.random()*randomCharRages.length)]
      const min=randElement[0];
      const max=randElement[1];
      if(randElement.length===4){
        const randChar=randElement[Math.floor(Math.random()*4)]
        const minChar=randChar[0];
        const maxChar=randChar[1];
        Password+=String.fromCharCode(getRandom(minChar,maxChar))
      }
      else{
        Password+=String.fromCharCode(getRandom(min,max))
      }
      
    }
    return Password;
}

export default GeneratedPassword;