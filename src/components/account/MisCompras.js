import { Card } from "react-bootstrap";

export const MisCompras = () => {
  const date = new Date();

  return (
    <div className="account__main-aside">
      <h1 className="account__title account__header">Mis Compras</h1>

      <div className="account__grilla-productos">
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
          <Card.Body>
            <div className="producto__header">
              <Card.Title>Producto</Card.Title>
              <Card.Text>$1000</Card.Text>
            </div>

            <Card.Text>
              Comprado el{" "}
              {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
