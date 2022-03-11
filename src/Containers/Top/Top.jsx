import './Top.scss';
import ChangeTheme from '../../Components/Theme-changer/ChangeTheme';

const Top = () => {
  console.log(ChangeTheme)
  return (
    <div className="top">
      <h3 className="calc">calc</h3>
      <div>
        <h3>THEME</h3>
        <ChangeTheme />
      </div>
    </div>
  )
}

export default Top