const ErrorExample = () => {
  const count = 0;

  const handleclick =()=>{
    count = count + 1;
    console.log(count);    
  }


  return <div>
    <h2>{count}</h2>
    <button onClick={handleclick}>icrement</button>
  </div>

};

export default ErrorExample;
