import { useState } from "react";
import { data } from '../../../data'

const UserChallenge = () => {


  const [name, setName] = useState('')
  const [users, setUsers] = useState(data);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const fakeID = Date.now();
    const newUser = { id: fakeID, name: name }
    const updatedUser = [...users, newUser]
    setUsers(updatedUser)
    setName("")
    console.log(fakeID);
    console.log("form submited");
  }

  const removeUser = (id) => {
    const updatedUser = users.filter((person) => person.id !== id)
    setUsers(updatedUser)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit} >
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}

      <h2>Users</h2>
      {users.map((user) => {
        const { id, name } = user
        return (
          <div key={id} >
            <h4>{name}</h4>
            <button className="btn" onClick={() => { removeUser(user.id) }} >remove</button>
          </div>
        )
      })}

    </div>
  );
};
export default UserChallenge;
