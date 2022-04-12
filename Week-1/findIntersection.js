function FindIntersection(strArr) { 

 
  const splitted= strArr.map((st)=> st.split(', '))
  let string_1=splitted[0];
  let string_2=splitted[1];
  const result=[];
  let hash= {}
  string_1.map((num)=> hash[num]=true)
  for(let i=0; i<string_2.length; i++){
      if(hash[string_2[i]]){
result.push(string_2[i])
      }
  }
  if (result.length>0) {
return result.join(',');
  } else {
    return false;
  }

}