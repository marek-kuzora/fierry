class Service

  services:
    actions: 'dj.actions'

  constructor: ->
    @_uids = {}
    
  #
  # Setups the service on application startup.
  #
  setup: ->
    @_retrospect_html(document.body)
  
  #
  # Traverse through the DOM hierarchy to retrieve & cache found ids.
  # @param HTMLElement e
  #
  _retrospect_html: (e) ->
    return if e instanceof Text

    if id = e.getAttribute('id')
      @_uids[id] =
        ref:  {nodes: []}
        live: [@_create_live(e)]

    @_retrospect_html(n) for n in e.childNodes
    return
  
  #
  # Creates ExistingDomAction from HTMLElement.
  # @param HTMLElement e
  #
  _create_live: (e) ->
    return @actions.get {type: 'existing_dom', dom: e}

  #
  # Caches reference structure by its id.
  # @param String id
  # @param Hash ref
  #
  cache_ref: (id, ref) ->
    assert !@_uids[id], "Uid entry for #{id} already defined"
    @_uids[id] = {ref: ref, live: []}

  #
  # Caches live structure by its id.
  # @param String id
  # @param Hash live
  #
  cache_live: (id, live) ->
    assert @_uids[id], "Uid entry for #{id} not found"
    @_uids[id].live.push(live)

  #
  # Retrieves reference structure by its id.
  # @param String id
  #
  get_ref: (id) ->
    assert @_uids[id], "Uid entry for #{id} not found"
    return @_uids[id].ref

  #
  # Retrieves live structure by its id.
  # @param String id
  #
  get_live: (id) ->
    assert @_uids[id], "Uid entry for #{id} not found"
    return @_uids[id].live

rtm.register_service('dj.uid', new Service())
