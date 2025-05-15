export const getContacts = async (dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/jacksama/contacts')

    if (!response.ok) {
        await createAgenda(dispatch)
        return
    }

    const data = await response.json();
    dispatch({ type: 'SET_CONTACTS', payload: data.contacts });
}

export const createAgenda = async (dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/jacksama', { method: 'POST' })
    getContacts(dispatch);
}

export const addContact = async (contact, dispatch, navigate) => {
    console.log(contact)
    const response = await fetch('https://playground.4geeks.com/contact/agendas/jacksama/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
        }
        ),
    });

    await getContacts(dispatch);
    navigate('/')
};

export const deleteContact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/jacksama/contacts/${id}`, {
        method: 'DELETE',
    });

    await getContacts(dispatch);
};


export const updateContact = async (id, formData, dispatch, navigate) => {

    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/jacksama/contacts/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
    })  
    
    await getContacts(dispatch);
        navigate('/')
        // return getContacts("jacksama")
    } catch (error) {

        console.log(error)
        
}
}



