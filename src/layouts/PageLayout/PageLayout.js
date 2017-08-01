import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Increment from '../../components/Increment/Increment.js';

export const PageLayout = ({ children }) => (
  <div className=''>
    <Increment />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
