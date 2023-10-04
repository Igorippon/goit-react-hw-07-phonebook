import { Formik } from "formik";
import * as Yup from 'yup';
import { Label, StyledForm, Button, ErrorMsg, Container, Input } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),
    number: Yup.number()
        .min(5, 'Too Short!')
        .positive()
        .required('Required'),
})

export const ContactForm = () => {
    const contacts = useSelector(state => state.contacts.list);
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        const contactName = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        if (contactName) {
            alert(`${values.name} is already contacts.`)
            return
        };
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <>
            <h1>Phonebook</h1>
            <Container>
                <Formik
                    initialValues={{ name: "", number: '' }}
                    validationSchema={ContactSchema}
                    onSubmit={handleSubmit}
                >
                    <StyledForm>
                        <Label>Name
                            <Input name="name" type="text" />
                            <ErrorMsg name="name" component="div" />
                        </Label>
                        <Label>Number
                            <Input name="number" type="tel" />
                            <ErrorMsg name="number" component="div" />
                        </Label>
                        <Button type="submit">Add contact</Button>
                    </StyledForm>
                </Formik>
            </Container>
        </>
    );
};

