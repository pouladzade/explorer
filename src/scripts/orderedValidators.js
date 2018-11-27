import { shuffle, orderBy } from "lodash"
export default function(validators) {
  // let validatorsWithAvatars = []
  // let validatorsWithoutAvatars = []
  let orderedValidators = []
  if (validators && validators.length > 0) {
    orderedValidators = orderBy(
      validators,
      [i => i.description.moniker.toLowerCase()],
      "asc"
    )
    /*
    validatorsWithAvatars = orderedValidators.filter(
      v => (v = v.description.identity)
    )
    validatorsWithoutAvatars = orderedValidators.filter(
      v => (v = !v.description.identity)
    )
    orderedValidators = validatorsWithAvatars.concat(validatorsWithoutAvatars)
    */
  }
  return shuffle(orderedValidators)
}
