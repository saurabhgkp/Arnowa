import React, { useEffect ,useState} from "react";
import { useHistory } from "react-router";
import { PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar,} from "recharts";

const About = () => {
    const [userData,setUserData]=useState();
    const history=useHistory();
const callAboutPage = async () =>{
    try{
const res= fetch('/about',{
method:"GET",
Headers: {
    Accept:"application/json",
    "Content-Type":"application/json" },
    credentials:"include"
});
const Data = await res.json();
setUserData(Data);
if(!res.status===200){
    const error= new Error(res.error);
    throw error;
}
    } catch(err){ console.log(err)
    history.push('/Login')
    }
}


    useEffect(()=>{
        callAboutPage();
    },[]);

    const [name,email,password,india, oman,  us,  growth,   loss]= userData;
  const data = [
    { name:"india", users:india },
    { name: "oman", users: oman },
    { name: "us", users: us }

  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default About;
