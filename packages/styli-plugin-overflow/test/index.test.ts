import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-overflow', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as any

  it('isMatch', () => {
    expect(isMatch!('overflow')).toEqual(true)
    expect(isMatch!('overflowX')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = new Atom({
      propKey: 'overflow',
      propValue: 'scroll',
      key: 'overflow',
      style: {},
    })
    const newAtom1 = new Atom({
      propKey: 'overflow',
      propValue: 'scroll',
      style: { overflow: 'scroll' },
      key: 'overflow',
    })
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      propKey: 'overflowX',
      propValue: 'scroll',
      key: 'overflowX',
      style: {},
    })
    const newAtom2 = new Atom({
      propKey: 'overflowX',
      propValue: 'scroll',
      style: { overflowX: 'scroll' },
      key: 'overflowX',
    })
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)
  })
})
