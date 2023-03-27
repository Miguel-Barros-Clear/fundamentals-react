export default function Random(props) {
  const random = parseInt(Math.random() * (props.max - props.min)) + props.min;

  const { min, max } = props;

  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Maximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {random}
      </p>
    </div>
  );
}
