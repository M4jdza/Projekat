import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const Tabela = ({ contacts, setContacts }) => {
    const handleDragEnd = (results) => {
        if (!results.destination) return
        let tempContacts = [...contacts];
        let [selectedRow] = tempContacts.splice(results.source.index, 1);
        tempContacts.splice(results.destination.index, 0, selectedRow);
        setContacts(tempContacts);
    }

    return (
        <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
            <div className='app-container'>
                <table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Rn br</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <Droppable droppableId='tbody '>
                        {(provided) => (
                            <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                {contacts.map((contact, index) => (
                                    <Draggable draggableId={contact.id} index={index} key={contact.id}>
                                        {(provided) => (
                                            <tr  {...provided.draggableProps} ref={provided.innerRef} onClick={() => {
                                                setContacts(contacts.filter(con => con !== contact))
                                            }}>
                                                <td {...provided.dragHandleProps}> = </td>
                                                <td> {index + 1} </td>
                                                <td> {contact.ime} </td>
                                                <td> {contact.prezime} </td>
                                                <td> {contact.email} </td>
                                            </tr>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </table>
            </div>
        </DragDropContext>
    );
}

export default Tabela;