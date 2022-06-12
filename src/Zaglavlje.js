import React/*, { useState } */ from 'react'
import { useNavigate } from 'react-router-dom';

export default function Zaglavlje(props) {

    //const [zaglavlje, setZaglavlje] = useState('');

    let naslov = "";

    const postaviZaglavlje = (e) => {
        naslov = e.target.value;
        //let ime = e.target.value;
        //setZaglavlje(ime);
        console.log(naslov);
    }



    const navigate = useNavigate();

    const Potvrda = (e) => {
        e.preventDefault();
        navigate("/", { state: { naslov: naslov } });
    }


    return (
        <>
            <form onSubmit={Potvrda}>
                <label>
                    Unesi tekst zaglavlja:
                    <input type="text" name="name" onChange={postaviZaglavlje} />
                </label>
                <br />
                <input type="submit" value="Potvrdi" />
            </form>

        </>
    )
}
