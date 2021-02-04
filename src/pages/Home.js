import React, { Component }  from 'react'
import { connect } from 'react-redux'
import '../assets/css/home.scss'

class Home extends Component {
  state = {
    view: 'unanswered'
  }

  render() {
    return (
        <div>
          <h1>Home</h1>
          <div className="toggle">
            <div>
              <label>Unanswered</label>
              <input id="unanswered" type="radio" name="view" value="unanswered" />
            </div>
            <div>
              <label>Unanswered</label>
              <input id="unanswered" type="radio" name="view" value="unanswered" />
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Home)
