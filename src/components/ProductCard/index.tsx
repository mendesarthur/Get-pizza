import './styles.css';

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
                <h2>{props.Year} [{props.imdbID}]</h2>
                <h3>{props.Type}</h3>
            </div>
             
        </div>
    )
}

export default ProductCard;