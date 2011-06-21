#
# Unshift operation seams extemally slow.
# Working together, they get around 10k ops/ms that is 4x slower than push-pop handling.
#
group
  name: 'array.shift-unshift'
  before: ->
    @i = 0
    @empty = []
    @full = gen.int_array(10000000, 5, true)


test
  name: '-shift-only'
  run: ->
    @full.shift()

test
  name: '-unshift-only'
  run: ->
    @empty.unshift(@i++)

test
  name: ' 5 chars'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e']
  run: ->
    @arr.unshift('f')
    @arr.shift()

test
  name: '10 chars'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  run: ->
    @arr.unshift('k')
    @arr.shift()

test
  name: '50 chars'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  run: ->
    @arr.unshift('k')
    @arr.shift()
