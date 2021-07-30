import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api';
import './styles.css';
import GlobalMenu from "../../components/GlobalMenu";


interface Iproduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const Products = () => {
    const [products, setprtoducts] = useState<Iproduct[]>([]);

    const loadingproducts = async () => {
        const results = await api.get(`/?apikey=2bf89052&s=batman`);
        setprtoducts(results.data.Search);
    };

    useEffect(() => {
        loadingproducts();
    }, []);

    return (
        <>
            <GlobalMenu />
            <h1>produtos</h1>
            <ul>
                {products.map(p => {
                    return (
                        <ProductCard
                            Title={p.Title}
                            Year={p.Year}
                            imdbID={p.imdbID}
                            Type={p.Type}
                            Poster={p.Poster}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Products