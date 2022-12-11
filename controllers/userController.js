//Get All users Information
const getAllUsers = (req,res)=>{
    res.send('Get All Users')
}

//Get single user information
const getUser = (req,res)=>{
    res.send(`Get user with the id ${req.params.id}`)
}

module.exports = {
    getAllUsers,
    getUser
}