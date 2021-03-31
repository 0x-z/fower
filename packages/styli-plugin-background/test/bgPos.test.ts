import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'
import './config'

describe('bgPos', () => {
  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('backgroundPosition')).toEqual(true)
  })

  describe('handleAtom', () => {
    it('<View backgroundPosition="bottom right"></View>', () => {
      const atom = { propKey: 'backgroundPosition', propValue: 'bottom right' } as Atom
      const finalAtom = {
        propKey: 'backgroundPosition',
        propValue: 'bottom right',
        style: { backgroundPosition: 'bottom right' },
      } as Atom
      expect(handleAtom!(atom, parser)).toMatchObject(finalAtom)
    })
  })
})
