import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5" style={{ marginleft: "20rem", width: "15rem", height: "15rem" }}>
			<h1>Inicio</h1>
			<img src="https://cdn-icons-png.flaticon.com/512/5995/5995295.png" className="card-img-top" alt="Contact" />
		</div>
	);
}; 

export default Home;