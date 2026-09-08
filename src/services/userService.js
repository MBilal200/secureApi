class UserService {
        constructor(userModel) {
            this.userModel = userModel;
           }
        createUser=async(userData)=>{
            const user = new this.userModel(userData);
            await user.save();
            return user;
        }
        readUser=async()=>{
            const users=await this.userModel.find();
            return users;

        }
        readUserById=async(id)=>{
            const user=await this.userModel.findById(id);
            return user;
        }
        readUserByEmail=async(email)=>{
            const user=await this.userModel.findOne({email});
            console.log(user)
            return user;
        }
        updateUser=async(id,userData)=>{
            const user=await this.userModel.findByIdAndUpdate(id,userData,{new:true});  

        }
        deleteUser=async(id)=>{
            const user=await this.userModel.findByIdAndDelete(id);
            return user;
        }


}

export default UserService