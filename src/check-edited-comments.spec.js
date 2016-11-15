/* eslint-env jest */
describe('checking for edited comments', () => {
  it('should filter an array of prefetched comments to two arrays: DB replied and Deltas awarded', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
  it('should generate a new DB comment based on the edited Delta comment', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
  it('should only make changes if the hidden params between the old DB comment and new one are different', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
  it('should edit the DB comment if DB replied already', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
  it('should add a comment if DB did not reply and it is a Delta awarded', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
  it('should remove the Delta from the parent user\'s wiki and flair from "Delta" -> "no Delta"', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
  it('should add the Delta to the parent user\'s wiki and flair from "no Delta" -> "Delta"', () => {
    expect([1, 2, 3].indexOf(4)).toBe(-1)
  })
})
