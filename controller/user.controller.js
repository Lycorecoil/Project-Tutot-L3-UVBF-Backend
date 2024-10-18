const UserService = require ('../services/user.servises');

exports.register = async(req,res,next) =>{
	try{
        const {email,password}= req.body;
		const sucessRes = await UserService.registerUser(email,password)
		res.json({status : true,sucess:"User Register Successfully"})
	}catch(error){
		throw error 
	}
}