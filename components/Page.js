import Link from 'next/link'
import { connect } from 'react-redux'


const Page = ({ AccountId }) => (
  <div>
    <h1>Id From Server = {AccountId}</h1>
    {/* <h1>HI</h1> */}
    {/* <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <AddCount />
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav> */}
  </div>
)

export default connect((state) => state)(Page)
