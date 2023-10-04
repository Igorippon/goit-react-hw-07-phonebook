import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";

import { getContact, getError, getFilter, getIsLoading } from "redux/selectors";
import { deleteContact, fetchContacts } from "redux/operations";
import { useEffect } from "react";

export const ContactList = () => {
    const contacts = useSelector(getContact);
    const filter = useSelector(getFilter);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const visibilContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <>
            {isLoading && !error && <b>Request in progress...</b>}
            <List>
                {visibilContact.map(({ id, name, number }) => (
                    <Item key={id}>
                        <p>{name} : {number}</p>
                        <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                    </Item>

                ))}
            </List>
        </>
    );
};

