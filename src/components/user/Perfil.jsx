import { Button, Col, Form, Modal, Row } from "react-bootstrap"

export const Perfil = ({ isOpen, close, user }) => {
    console.log(user)
    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header >
                <Modal.Title>Perfil</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label>Nombre usuario</Form.Label>
                        <Form.Control
                            name="nombreUser"
                            type="text"
                            disabled
                            value={user.nombreUser}
                        />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            name="nombreCompleto"
                            type="text"
                            disabled
                            value={`${user.nombre} ${user.apellido}`}
                        />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            name="correo"
                            type="text"
                            disabled
                            value={user.correo}
                        />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label>Fono</Form.Label>
                        <Form.Control
                            name="fono"
                            type="text"
                            disabled
                            value={user.fono}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={close} >Cancelar</Button>
                    {/* <Button type="submit" variant="primary">Actualizar Categoría </Button> */}
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
