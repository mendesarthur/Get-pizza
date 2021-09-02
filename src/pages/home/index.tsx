import GlobalMenu from "../../components/GlobalMenu";
import logo from "../../assets/images/ferrari.jpg";

const Home = () => {
    return(
       <>
        <GlobalMenu /> 
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus totam natus temporibus dolor magni deleniti expedita, at, molestias non officiis debitis, fugit aspernatur quam vel culpa quibusdam mollitia. Quibusdam.</p>
        <img src={logo} alt="ferrari vermelha" />
        </>
    );
}

export default Home;