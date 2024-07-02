//import {Link} from 'react-router-dom'
import {Link} from '../../components'

export default function NavagationBar() {
  return (
    <div className="flex p-4 navbar bg-base-200">
      <Link to="/" className="btn btn-link">
        Home
      </Link>
      <Link to="/board" className="ml-4 btn btn-link">
        Board
      </Link>
    </div>
  )
}
