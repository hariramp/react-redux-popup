import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink id="1" filter={ VisibilityFilters.SHOW_ALL }>
      All
    </FilterLink>
    {", "}
    <FilterLink id="2" filter={ VisibilityFilters.SHOW_ACTIVE }>
      Active
    </FilterLink>
    {", "}
    <FilterLink id="3" filter={ VisibilityFilters.SHOW_COMPLETED }>
      Completed
    </FilterLink>
  </p>
)

export default Footer
