import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
const [user,setUser] = useState(null);
const [isLoading , setisLoading] = useState(true);
const [isError , setisError] = useState(false);

useEffect(()=> {
const fetchUser = async ()=>{
 try {
const response = await fetch(url);
if(!response.ok) {
  setisError(true);
  setisLoading(false);
}
const user = await response.json();
console.log(response);
setUser(user);
 } catch (error) {
  setisError(true);
 } 
 setisLoading(false);
}   
fetchUser();
},[])


if(isLoading){
  return <h2>...Loading</h2>  
}

if(isError){
  return <h2>There was an error...</h2>
}

const {avatar_url, name, company, bio, location} = user
  return (
    <div>
      <img 
      style={{width: '150px', borderRadius: '25px'}}
      src={avatar_url} 
      alt={name}/>
      <h2>{name}</h2>
      <h4> Works At: {company} </h4>
      <p>{bio}</p>
      <p>{location}</p>
    </div>
    
  )
};
export default MultipleReturnsFetchData;
