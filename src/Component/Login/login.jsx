import {Button, Card, Input} from "antd";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isSubmit,setIsSubmit]=useState(false);
    const navigate=useNavigate() //help to navigate from one page to another


    /**
     * Storing -> redux,localstorage
     */
    const handleSubmit=()=>{
        localStorage.setItem("loginTest",JSON.stringify({email:email,password:password})); //store string object
    }

    /**
     * Executes  function whenever change in variable happens
     */
    useEffect(() => {
        if(isSubmit){
            handleSubmit();
            navigate('/'); //use to send us from login to home page

        }
    }, [isSubmit]);

    /**
     * Will only run Once when page is loaded
     */
    useEffect(()=>{
        let data=localStorage.getItem('loginTest');
        if(data){
           data= JSON.parse(data); //converting string to object
            setEmail(data?.email);
            setPassword(data?.password)
        }
    },[])


        return <div style={{width:'100%',height:'100vh', display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Card title={"Login"} style={{height:'500px',width:'700px'}}>
                    <div style={{padding:'10px',margin:'10px'}}>
                        <p>Email</p>
                        {/* Val is a synthetic event*/}
                        <Input value={email} onChange={(val)=>setEmail(val.target.value)} placeholder="Enter Email"/>
                        <p>Password</p>
                        <Input value={password} onChange={(val)=>setPassword(val.target.value)} placeholder="Enter Password"/>

                    </div>
                    <div style={{padding:'10px',margin:'10px'}}>
                        <Button onClick={()=>setIsSubmit(true)} >Submit</Button>
                    </div>
                </Card>
        </div>
}

export default Login;