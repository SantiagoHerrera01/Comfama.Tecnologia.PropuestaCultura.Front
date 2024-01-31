import { useEffect, useState } from 'react'
import { getMunicipalities } from '../services/municipalities.services';

interface Municipality {
    id: string;
    name: string;
    // Agrega otros campos según la estructura de tus municipios
}

export default function ProposalDetails() {

    const [municipalities, setMunicipalities] = useState<Municipality[]>([]);


    useEffect(() => {
        const fetchMunicipalities = async () => {
            const data = await getMunicipalities();
            setMunicipalities(data);
        };
        fetchMunicipalities();
        console.log(municipalities)
    }, [])



    return (
        <>

            <form action="" className='formUserData'>
            <h2 className='title'>Propuesta</h2>
            <div className="formUserData__Space">
                <div>
                    <label htmlFor="">Nombre evento: </label>
                    <div>
                        <input type="text" className="inputForm" placeholder='Nombre evento' />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Fecha: </label>
                    <div>
                        <input className="inputForm" type="date" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Municipio: </label>
                    <div>
                        <select className="inputForm" name="" id="">
                            <option value="" disabled selected>Seleccionar... </option>
                            {municipalities.map((municipality) => (
                                <option key={municipality.id} value={municipality.id}>
                                    {municipality.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Descripcion Porpuesta: </label>
                    <div>
                        <textarea name="" id="" cols={30} rows={5}></textarea>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Publico Beneficiado: </label>
                    <div className="inputContent">
                        <input type="text" className="inputForm" placeholder='Publico Beneficiado' />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Actividades del evento</label>
                    <div>
                    <input type="text" className="inputForm" placeholder='Actividades'/>
                    </div>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                </div>
            </form>
        </>
    )
}
