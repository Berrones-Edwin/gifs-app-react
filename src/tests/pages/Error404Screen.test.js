import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import Error404Screen from 'pages/Error404Screen'

describe('Tests in page Error 404', () => {
  it('Should show title and subtitle', () => {
    render(
      <MemoryRouter>
        <Error404Screen />
      </MemoryRouter>
    )

    screen.getByRole('heading',{
        name:'404'
    })
    screen.getByRole('heading',{
        name:'Page Not Found!'
    })
  })
  it('Should show link go back home', () => {
    render(
      <MemoryRouter>
        <Error404Screen />
      </MemoryRouter>
    )

    screen.getByRole('link',{
        name:'Back to home page'
    })
   
  })
})
