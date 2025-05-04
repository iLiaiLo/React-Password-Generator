const formDataArray=(form)=>{
    const {upperCase,lowerCase,number,char}=form;
    const arr=[upperCase,lowerCase,number,char];
    return arr;
}

export default formDataArray;