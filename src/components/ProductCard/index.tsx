interface Iproduct {
    Title: string ;
    Year: string;
    imdbID: string;
    Type: string;
    Poster:string; 
}

const ProductCard = (props: Iproduct) => {
    return (
        <div>
            <img src={props.Poster} alt={props.Title} />
             <h2>{props.Title}</h2>
             <h3>{props.Year}</h3>
        </div>
    )
}

export default ProductCard;