//import React from 'react'

function FormComponent() {
  return (
    <div>
      <h1>Personal</h1>

      <form className="border border-1" style={{padding: "20px"}}>
        <div className="row">
        <div className="col">
            <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          
          <div className="col mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="col mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="col-1 mb-3 form-check" style={{marginTop: "40px"}}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Recordar</label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-outline-success float-end">Agregar nuevo empelado</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormComponent