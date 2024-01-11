
const petData=[
    {
        name:"Dog",
        description:
        "A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals",
        image:
        "data:image/jpeg;base64,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",
        link:
        "https://www.youtube.com/watch?v=lOKASgtr6kU&pp=ygUKZG9nIHZpZGVvcw%3D%3D"
    },
    {
        name:"Cat",
        description:
        "A cat is a furry animal that has a long tail and sharp claws. Cats are often kept as pets. Cats are lions, tigers, and other wild animals in the same family.",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbU8nMhBct2M7qtZRElIque1PVlxpD2ChSAQ&usqp=CAU",
        link:
        "https://www.youtube.com/shorts/5WqLjXTuvyU"
    }
];

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