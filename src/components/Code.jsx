import React from 'react'
import Editor from './Editor'
import { Box,styled } from '@mui/material'
import { useContext } from 'react'

import { DataContext } from './context/DataProvider';

const Container=styled(Box)`
display:flex;
 background-color:#060606;
`

const Code = () => {

  const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);

  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#05c608"  value={html} onChange={setHtml}/>
      <Editor heading="CSS" icon="#" color="#0ebeff" value={css} onChange={setCss}/>
      <Editor heading="JAVASCRIPT" icon="{ }" color="#fcd000" value={js} onChange={setJs}/>
    </Container>
  )
}

export default Code