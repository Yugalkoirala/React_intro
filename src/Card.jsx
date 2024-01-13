import { petData } from "../petData";
const Card=()=>{
    return(
    <div className="card-container">
        {petData.map((item,index)=>{
            return (
                <div key={index} className="card">
                <img className="img" src={item.image}></img>
                <h4>{item.name}</h4>
                <p
                    style={{
                        color:"green",  //inline css
                        fontSize:"20px",
                    }}
                >
                    {item.description}
                </p>
                <a href={item.link} target="_blank" rel="noreferrer">Go To {item.name} Site</a>
            </div>
            );
        })}
    </div>
    );
};

export default Card;