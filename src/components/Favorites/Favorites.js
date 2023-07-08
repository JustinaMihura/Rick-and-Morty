import { connect } from "react-redux"
import Card from "../Card/Card.jsx"
import style from "./Favorites.module.css"

function Favorites (props) {
    console.log(props);
    return (
        <div className={style.contenedor}>
            <h1>Mis favoritos: </h1>
            <br></br>
            {props.favorites?.map((pj) =>  (
             <Card
              key = {pj.id}
              name={pj.name}
              id={pj.id}
              image = {pj.image}
              /> 
            ))}
        </div>
    )
}
export function mapStateToProps (state) {
        return {favorites : state.myFavorites
        }
    }
export default connect(mapStateToProps)(Favorites)