

const UserData = () => {

  return (
    <>
    
      <form className="formUserData">
      
      <h2 className="title">Datos Principales</h2>
    
        <div className="input--space">
          <label htmlFor="">Nombre Proponente: </label>
          <div>
            <input type="text" className="inputForm" placeholder="Nombre organizacion o persona a cargo" />
          </div>
        </div>

        <div className="formUserData__spaceName">
          <div>
            <label htmlFor="" >Nombres: </label>
            <div>
              <input type="text" className="inputForm inputForm--size" placeholder='Nombres' />
            </div>
          </div>

          <div>
            <label htmlFor="">Apellidos: </label>
            <div>
              <input type="text" className="inputForm inputForm--size" placeholder="Apellidos" />
            </div>
          </div>
        </div>
        <div className="formUserData__Space">
          <div>
            <label htmlFor="">Tipo Documento: </label>
            <div>
              <select className="inputForm">
                <option value="" disabled selected>Seleccionar...</option>
                <option value="">CC</option>
                <option value="">CE</option>
                <option value="">NIT</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="">Numero Documento: </label>
            <div>
              <input type="text" className="inputForm" placeholder="Numero Documento" />
            </div>
          </div>
          <div>
            <label htmlFor="">Telefono Fijo: </label>
            <div>
              <input type="text" className="inputForm" placeholder="Telefono Fijo" />
            </div>
          </div>
          <div>
            <label htmlFor="">Telefono Celular: </label>
            <div>
              <input type="text" className="inputForm" placeholder="Celular" />
            </div>
          </div>
          <div>
            <label  htmlFor="">Correo: </label>
            <div>
              <input type="Email" className="inputForm" placeholder="Correo" />
            </div>
          </div>

        </div>
        <div className="button__position">
          <input type="submit" className="sendButton" value={"Siguiente"} />
        </div>
      </form>
    </>
  )
}

export default UserData
