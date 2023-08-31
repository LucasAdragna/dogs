/** @format */

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { dogsId } from "../../redux/action";
import style from "./detail.module.css";
import { useDispatch } from "react-redux";

const Detail = () => {
  const dog = useSelector((state) => state.newdogs);

  const { id } = useParams();
  const dispatch = useDispatch();
  const props = dog;

  useEffect(() => {
    dispatch(dogsId(id));
  }, [dispatch, id]);

  return (
    <div className={style.cardDetail}>
      <section className={style.detail}>
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name} />
        <p>
          Altura aprox: <span>{props.height}</span>
        </p>

        <p>
          Peso aprox: <span>{props.weight}</span>
        </p>

        <p>
          Años de vida: <span>{props.life_span}</span>
        </p>

        <p> Temperamentos: {props.temperament}</p>
      </section>
    </div>
  );
};

export default Detail;
