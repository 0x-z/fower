import { styli } from '@styli/core'
import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-ellipsis', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, handleAtom } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('ellipsis')).toEqual(true)
    expect(isMatch!('ellipsis1')).toEqual(true)
    expect(isMatch!('ellipsis-100')).toEqual(true)
    expect(isMatch!('ellipsis2-200')).toEqual(true)
  })

  it('handleAtom', () => {
    const atom1 = { propKey: 'ellipsis', propValue: true } as Atom
    const newAtom1 = {
      propKey: 'ellipsis',
      propValue: true,
      style: {
        maxWidth: 100,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    }
    expect(handleAtom!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = { propKey: 'ellipsis1', propValue: true } as Atom
    const newAtom2 = {
      propKey: 'ellipsis1',
      propValue: true,
      style: {
        maxWidth: 100,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    }
    expect(handleAtom!(atom2, parser)).toMatchObject(newAtom2)

    const atom3 = { propKey: 'ellipsis-300', propValue: true } as Atom
    const newAtom3 = {
      propKey: 'ellipsis-300',
      propValue: true,
      style: {
        maxWidth: '300',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    }
    expect(handleAtom!(atom3, parser)).toMatchObject(newAtom3)

    const atom4 = { propKey: 'ellipsis2', propValue: true } as Atom
    const newAtom4 = {
      propKey: 'ellipsis2',
      propValue: true,
      style: {
        maxWidth: 100,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: 2,
      },
    }
    expect(handleAtom!(atom4, parser)).toMatchObject(newAtom4)

    const atom5 = { propKey: 'ellipsis6-500', propValue: true } as Atom
    const newAtom5 = {
      propKey: 'ellipsis6-500',
      propValue: true,
      style: {
        maxWidth: '500',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: 6,
      },
    }
    expect(handleAtom!(atom5, parser)).toMatchObject(newAtom5)
  })
})
