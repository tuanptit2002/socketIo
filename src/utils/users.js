const users = [];

const addUser = ({id, username, room}) =>{

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room){
        return{
            error: 'Username and room are required!'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser){
        return{
            error: 'Username is in use'
        }
    }

    //store
    const user  = {id, username, room}
    users.push(user)
    
    return {user}
}


const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    
    if(index != -1){
        return users.splice(index, 1)[0]
    }
}


const getUser = (id) =>{
    // const userId  = users.findIndex((user) => user.id === id);

    // if(userId != -1){
    //     return users[userId];
    // }

    const user  = users.find((user) => user.id === id)
    return user
}

const getUsersInRoom = (room) =>{
    // const usersInRoom = [];
    //   users.find((user) => {
    //     const check = user.room === room;
    //     if(check === true){
    //         usersInRoom.push(user)
    //     }
    //   })

    //   return usersInRoom;
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room
    )
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}