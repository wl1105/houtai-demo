import styled from 'styled-components'

export const Container = styled.div`
  background-color:#eee;
`
export const Top = styled.div`
  display: flex;
  width:500px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`

export const Main = styled.section.attrs({
  className: 'aa'
})`
background-color:#eee;
padding:20px;
img {
  height: 30px;
}
`