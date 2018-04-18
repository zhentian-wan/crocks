/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import _mconcatMap from '../core/mconcatMap.js'
import curry from '../core/curry.js'
import isFoldable from '../core/isFoldable.js'
import isFunction from '../core/isFunction.js'
import isMonoid from '../core/isMonoid.js'

// mconcatMap : Monoid M => M -> (b -> a) -> ([ b ] | List b) -> M a
function mconcatMap(m, f, xs) {
  if(!isMonoid(m)) {
    throw new TypeError(
      'mconcatMap: Monoid required for first argument'
    )
  }

  if(!isFunction(f)) {
    throw new TypeError(
      'mconcatMap: Function required for second argument'
    )
  }

  if(!isFoldable(xs)) {
    throw new TypeError(
      'mconcatMap: Foldable required for third argument'
    )
  }

  return _mconcatMap(m, f, xs)
}

export default curry(mconcatMap)
