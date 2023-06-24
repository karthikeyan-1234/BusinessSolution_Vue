import axios from 'axios'
import LoginModel from '../models/LoginModel';

class LoginService{
    public async Login(loginModel: LoginModel){
        console.log("The provided login details :")
        console.log(loginModel);
        return(
            await axios.post("https://localhost:7093/Ocelot/login",loginModel).then((res) => {
                return res.data;
            },(err)=>{
                return err;
            })
        )
    }
}

export default new LoginService();