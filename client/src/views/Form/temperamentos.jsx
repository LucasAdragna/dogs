/** @format */

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { dogTemperaments } from "../../redux/action";
// import style from "./temperamentos.module.css";
// import { validate } from "./validate";
// import { dogPost } from "../../redux/action";

// const TemperamentForm = () => {
//   const dispatch = useDispatch();

//   const tempForm = useSelector((state) => state.temperamentos);
//   console.log("state", tempForm);

//   const [form, setForm] = useState({
//     nombre: "",
//     alturaMax: "",
//     alturaMin: "",
//     pesoMax: "",
//     pesoMin: "",
//     añosdeVida: "",
//     image: "",
//     temperamentos: [],
//   });

//   const [error, setError] = useState({});

//   useEffect(() => {
//     dispatch(dogTemperaments());
//   }, [dispatch]);

//   const handleChangeForm = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//     setError(validate({ ...form, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(dogPost(form));
//     setForm({
//       nombre: "",
//       alturaMax: "",
//       alturaMin: "",
//       pesoMax: "",
//       pesoMin: "",
//       añosdeVida: "",
//       image: "",
//       temperamentos: [],
//     });
//   };
//   return (
//     <div>
//       <div className={style.formularioContainer}>
//         <form className={style.formulario} onSubmit={handleSubmit}>
//           <div className={style.inputForm}>
//             <label>
//               <b>Nombre: </b>
//             </label>
//             <input
//               type="text"
//               value={form.nombre}
//               onChange={handleChangeForm}
//               name="nombre"
//             />
//             <span>{error.nombre}</span>
//             <label>
//               <b>Altura Mínima: </b>
//             </label>
//             <input
//               type="number"
//               value={form.alturaMin}
//               onChange={handleChangeForm}
//               name="alturaMin"
//             />
//             <span>{error.alturaMin}</span>
//             <label>
//               <b>Altura Máxima: </b>
//             </label>
//             <input
//               type="number"
//               value={form.alturaMax}
//               onChange={handleChangeForm}
//               name="alturaMax"
//             />
//             <span>{error.alturaMax}</span>
//             <label>
//               <b> Peso Mínimo: </b>
//             </label>
//             <input
//               type="number"
//               value={form.pesoMin}
//               onChange={handleChangeForm}
//               name="pesoMin"
//             />
//             <span>{error.pesoMin}</span>
//             <label>
//               {" "}
//               <b>Peso Máximo:</b>{" "}
//             </label>
//             <input
//               type="number"
//               value={form.pesoMax}
//               onChange={handleChangeForm}
//               name="pesoMax"
//             />
//             <span>{error.pesoMax}</span>
//             <label>
//               <b>Url de la imagén</b>
//             </label>
//             <input
//               type="text"
//               value={form.image}
//               onChange={handleChangeForm}
//               name="image"
//             />
//             <span>{error.image}</span>
//             <label>
//               <b>Años de Vida:</b>
//             </label>
//             <input
//               type="number"
//               value={form.añosdeVida}
//               onChange={handleChangeForm}
//               name="añosdeVida"
//             />
//             <span>{error.añosdeVida}</span>
//             <br></br>{" "}
//             <label>
//               <b>Temperamentos: </b>
//             </label>
//             <input
//               type="text"
//               value={form.temperamentos}
//               onChange={handleChangeForm}
//               name="temperamentos"
//             />
//             <span>{error.temperamentos}</span>
//           </div>
//           {error.nombre || error.añosdeVida ? (
//             ""
//           ) : (
//             <button className={style.submitButton}>Crear Nueva Raza</button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TemperamentForm;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogTemperaments } from "../../redux/action";
import style from "./temperamentos.module.css";
import { validate } from "./validate";
import { dogPost } from "../../redux/action";

const TemperamentForm = () => {
  const dispatch = useDispatch();

  const tempForm = useSelector((state) => state.temperamentos);

  const [form, setForm] = useState({
    nombre: "",
    alturaMax: "",
    alturaMin: "",
    pesoMax: "",
    pesoMin: "",
    añosdeVida: "",
    image: "",
    temperament: [],
  });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(dogTemperaments());
  }, [dispatch]);

  const handleChangeForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError(validate({ ...form, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dogPost(form));
    setForm({
      nombre: "",
      alturaMax: "",
      alturaMin: "",
      pesoMax: "",
      pesoMin: "",
      añosdeVida: "",
      image: "",
      temperament: [],
    });
  };
  const handleTemperamentoChange = (temperamento) => {
    const updatedTemperamentos = form.temperament.includes(temperamento)
      ? form.temperament.filter((temp) => temp !== temperamento)
      : [...form.temperament, temperamento];
    setForm({ ...form, temperament: updatedTemperamentos });
  };

  return (
    <div>
      <div className={style.formularioContainer}>
        <form className={style.formulario} onSubmit={handleSubmit}>
          <div className={style.inputForm}>
            <label>
              <b>Nombre: </b>
            </label>
            <input
              type="text"
              value={form.nombre}
              onChange={handleChangeForm}
              name="nombre"
            />
            <span>{error.nombre}</span>
            <label>
              <b>Altura Mínima: </b>
            </label>
            <input
              type="number"
              value={form.alturaMin}
              onChange={handleChangeForm}
              name="alturaMin"
            />
            <span>{error.alturaMin}</span>
            <label>
              <b>Altura Máxima: </b>
            </label>
            <input
              type="number"
              value={form.alturaMax}
              onChange={handleChangeForm}
              name="alturaMax"
            />
            <span>{error.alturaMax}</span>
            <label>
              <b> Peso Mínimo: </b>
            </label>
            <input
              type="number"
              value={form.pesoMin}
              onChange={handleChangeForm}
              name="pesoMin"
            />
            <span>{error.pesoMin}</span>
            <label>
              {" "}
              <b>Peso Máximo:</b>{" "}
            </label>
            <input
              type="number"
              value={form.pesoMax}
              onChange={handleChangeForm}
              name="pesoMax"
            />
            <span>{error.pesoMax}</span>
            <label>
              <b>Url de la imagén:</b>
            </label>
            <input
              type="text"
              value={form.image}
              onChange={handleChangeForm}
              name="image"
            />
            <span>{error.image}</span>
            <label>
              <b>Años de Vida:</b>
            </label>
            <input
              type="number"
              value={form.añosdeVida}
              onChange={handleChangeForm}
              name="añosdeVida"
            />
            <span>{error.añosdeVida}</span>
            <label>
              <b>Selecciona los Temperamentos: </b>
            </label>
            <br></br>
            <div className={style.checkbox}>
              {tempForm.map((temperamento) => (
                <div key={temperamento}>
                  <input
                    type="checkbox"
                    checked={form.temperament.includes(temperamento)}
                    onChange={() => handleTemperamentoChange(temperamento)}
                  />
                  <span>{temperamento}</span>
                </div>
              ))}
            </div>
          </div>
          {error.nombre || error.añosdeVida ?
            ""
         : 
            <button className={style.submitButton}>Crear Nueva Raza</button>
        }
        </form>
      </div>
    </div>
  );
};

export default TemperamentForm;
