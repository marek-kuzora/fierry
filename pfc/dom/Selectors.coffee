#
# GetElementById is 75x faster than the others.
#
group '/dom.selectors'

test 'getElementById',
  run: ->
    document.getElementById('stub')

test 'getElementsByTagName',
  run: ->
    document.getElementsByTagName('div')

test 'querySelector',
  run: ->
    document.querySelector('#stub')

test 'querySelectorAll',
  run: ->
    document.querySelectorAll('#stub')