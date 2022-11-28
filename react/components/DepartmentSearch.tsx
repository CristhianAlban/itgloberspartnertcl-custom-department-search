import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

//import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {

  const { data, loading }= useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log("Mi eslug selecionado es:", slug)
  return loading
  ?
    <div>Loading...</div>
  :
    <>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
    </>
}

export default DepartmentSearch
