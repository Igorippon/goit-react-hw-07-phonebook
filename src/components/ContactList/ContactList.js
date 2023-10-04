import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";
import { selectError, selectIsLoading, selectVisibleContacts } from "redux/selectors";
import { deleteContact, fetchContacts } from "redux/operations";
import { useEffect } from "react";

export const ContactList = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const visibilContact = useSelector(selectVisibleContacts);
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

