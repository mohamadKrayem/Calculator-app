import './Button.scss';

const Button = ( props ) => {
  const content = props.content;

  return (
    <div onClick={props.onClick} id={props.id} className="Button">
      {content}
    </div>
  )
}

export default Button