import { useContext } from "react";
import { DataContext } from "../../Provider/AuithProvider/AuthProvider";



const Home = () => {
    
const user = useContext(DataContext)
console.log(user)
    return (
        <div>
            <h1>THIS IS HOME</h1>
           
        </div>
    );
};

export default Home;