import axios from 'axios'

class PurchaseService{
    public async getAllPurchases(){
       return await axios.get('https://localhost:7093/Ocelot/GetAllPurchases')
            .then(
                (data) => {
                    return data;
                },
                (err) => {
                    console.log(err);
                    return err;
                }
            )
    }
}

export default new PurchaseService();