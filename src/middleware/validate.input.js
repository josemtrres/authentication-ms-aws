function VerifyInput(req, res, next){
    try{
        const {username, password} = req.body;

        const regex = /^[a-zA-Z@$+*?.\d]+$/;
        const regex_password = /^[a-zA-Z@$+*?.\d]+$/; //const regex_password = /^[a-zA-Z@$+*?.\d]{8,20}$/;
        
        if(!regex.test(username) || !regex_password.test(password)){
            throw new Error("Invalid input");
        }
        
        next();
    }catch(error){
        return res.status(401).json({message: error.message})
    }
}
export default VerifyInput;