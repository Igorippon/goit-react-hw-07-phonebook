import { useDispatch, useSelector } from "react-redux";
import { Item, List, Button } from "./ContactList.styled";
import { deleteContact, getContactValue } from "redux/contactsSlice";
import { getFilterValue } from "redux/filterSlice";

export const ContactList = () => {
    const contacts = useSelector(getContactValue);
    const filter = useSelector(getFilterValue);
    const dispatch = useDispatch();
    console.log(contacts);
    const visibilContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <List>
            {visibilContact.map(({ id, name, number }) => (
                <Item key={id}>
                    <p>{name} : {number}</p>
                    <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                </Item>

            ))}
        </List>
    );
};

