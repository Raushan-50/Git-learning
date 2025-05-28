import { useState, useEffect } from "react"

function Body() {
    const [profile, setProfile] = useState([]);
    const [numberofprofile,setnumberofprofile]=useState("");
    // console.log("hello");

    async function generateProfile(count) {
        const ran=Math.floor(Math.random()*10000);
        
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
            
        setProfile(data);
    }

    useEffect(() => {
        generateProfile(10);
    }, []);
    return (
        <div className="but">
            <input type="number" className="input" placeholder="Search here" value={numberofprofile} onChange={(e)=>setnumberofprofile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofprofile))}>Search Profile</button>
        <div className="profile">
            {
                profile.map((value) => {

                    return <div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                })
            }
        </div>
        </div>
    )
}

export default Body;