import { useCallback, useState } from 'react'
//import { shuffle } from '@/utils'
import Search from '../util/Search'

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
]

const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}

const UseCallbackEx = () => {
    const [users, setUsers] = useState(allUsers)

    const handleSearch = useCallback((text) => {
        console.log(users[0])
        const filteredUsers = allUsers.filter((user) => 
            user.includes(text),
        )
        setUsers(filteredUsers)
    }, []) // <--- empty dependency array

  return (
    <div className='card'>
        <div>
            <button onClick={() => setUsers(shuffle(allUsers))}>
                Shuffle
            </button>
              
            <Search onChange={handleSearch} />
        </div>
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))} 
        </ul>
    </div>
  )
}

export default UseCallbackEx