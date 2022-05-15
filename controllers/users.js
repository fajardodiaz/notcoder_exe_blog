const pool = require("../database/connection");

//GET USER BY ID
exports.getUser = (req, res)=>{
    try {
        pool.query("SELECT * FROM users", (err, result)=>{
            if(err){
                throw err;
            }
            res.status(200).json(result.rows);
        })
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

//GET user by ID
exports.getUserByID = (req, res)=>{
    try {
        const { id } = req.params;
        pool.query("SELECT * FROM users WHERE id = $1", [id], (err, result)=>{
            if(err){
                throw err;
            };
            res.status(200).json(result.rows);
        });
    } catch (error) {
        throw error;
    };
};

// CREATE USER
exports.createUser = (req, res)=>{
    try {
        const {name, nickname, email, password} = req.body;
        pool.query("INSERT INTO users(name, nickname,email, password) VALUES($1, $2, $3, crypt($4, gen_salt('bf',8)))",[name, nickname, email, password],(err, result)=>{
            if(err){
                throw err;
            };
            res.status(200).json({"message":"User created succesfully!"});
        });
    } catch (error) {
        throw error;
    };
};

exports.updateUser = (req, res)=>{

};

exports.deleteUser = (req, res)=>{
    
};