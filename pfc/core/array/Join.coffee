group
  name: 'array.join'

group
  name: 'array.join.str'

test
  name: 'small -default-token'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e']
  run: ->
    @arr.join()

test
  name: 'small -custom-token'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e']
  run: ->
    @arr.join('.-.')

test
  name: 'standard'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  run: ->
    @arr.join()

test
  name: 'big'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  run: ->
    @arr.join()

test
  name: 'big -no-token'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  run: ->
    @arr.join('')

group
  name: 'array.join.recursive'

test
  name: 'small'
  before: ->
    @arr = [['a', 'b', 'c', 'd']]
  run: ->
    @arr.join()

test
  name: 'standard'
  before: ->
    @arr = ['a', ['b', 'c', 'd'], 'e']
  run: ->
    @arr.join()
    
test
  name: 'recursive -big'
  before: ->
    @arr = ['a', ['b', 'c', 'd', 'e'], 'f', 'g', ['h', 'i', 'j', 'k', 'l']]
  run: ->
    @arr.join()

group
  name: 'array.join.int'

test
  name: 'one-only'
  before: ->
    @arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 10]
  run: ->
    @arr.join()

test
  name: 'all-ints'
  before: ->
    @arr = [1,2,3,4,5,6,7,8,9,10]
  run: ->
    @arr.join()
