import React from 'react';

export default function Forma({ handleAddFormChange, handleEventSubmit }) {

    return (
        <>
            <form className="form" onSubmit={handleEventSubmit}>
                <div className="title">Unesi podatke!</div>
                    <div className="input-container ic1">
                        <input
                            id="firstname"
                            className="input"
                            type="text"
                            placeholder=" "
                            name="ime"
                            required
                            onChange={handleAddFormChange}
                        />
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder">Ime</label>
                    </div>

                    <div className="input-container ic2">
                        <input
                            id="lastname"
                            className="input"
                            type="text"
                            placeholder=" "
                            name="prezime"
                            required
                            onChange={handleAddFormChange}
                        />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Prezime</label>
                    </div>

                    <div className="input-container ic2">
                        <input
                            id="email"
                            className="input"
                            type="email"
                            placeholder=" "
                            name="email"
                            required
                            onChange={handleAddFormChange}
                        />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder">Email</label>
                    </div>
                    
                <button type="submit" className="submit">Potvrdi</button>
            </form>

        </>
    )
}