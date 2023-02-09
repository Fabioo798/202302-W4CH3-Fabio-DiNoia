import { Card } from "../card/card"
import { MOCK_CARDS } from "../card/mocks/cards"

export function Cards() {
  return (
    <ul className="characters-list row list-unstyled">
      {MOCK_CARDS.map((character, index) => (
        <li key={index} className="col-md-3">
          <Card character={character} />
          </li>
      ))}
    </ul>
  )
}