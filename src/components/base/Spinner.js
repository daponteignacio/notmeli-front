import { Spinner as BSpinner } from "react-bootstrap";

export const Spinner = () => {
  return (
    <div className="spinner">
        <h1>Cargand</h1>
        <BSpinner variant="primary" animation="border"/>
    </div>
  )
}
