import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cards from '../Cards'
import intents from '../intents.json'

describe('Component should render correct info and feedback', () => {
  it('should display all intent names', () => {
    const { getByText } = render(<Cards />)
    intents.forEach((intent) => {
      expect(getByText(intent.name)).toBeInTheDocument()
    })
  })

  it('should have the right status after clicking on the button', () => {
    const { getByTestId } = render(<Cards />)
    userEvent.click(getByTestId('button-0'))
    expect(getByTestId('selected')).toBeInTheDocument()
  })

  it('should update all cards when bulk selection is clicked', () => {
    const { getByTestId, queryByTestId } = render(<Cards />)
    userEvent.click(getByTestId('bulk-button'))
    expect(queryByTestId('not-selected')).not.toBeInTheDocument()
  })
})
