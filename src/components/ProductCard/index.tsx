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
            <div>
                <h1>{props.Title}</h1>
                <h2>{props.Year}</h2>
            </div>
             
        </div>
    )
}

export default ProductCard;