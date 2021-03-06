/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/attributes': {
    get: operations['getAttributes']
  }
  '/collections': {
    get: operations['getCollections']
  }
  '/market': {
    get: operations['getMarket']
  }
  '/orders': {
    get: operations['getOrders']
    post: operations['postOrders']
  }
  '/owners': {
    get: operations['getOwners']
  }
  '/sales': {
    get: operations['getSales']
  }
  '/stats': {
    get: operations['getStats']
  }
  '/tokens': {
    get: operations['getTokens']
  }
  '/transfers': {
    get: operations['getTransfers']
  }
  '/collections/{collection}': {
    get: operations['getCollectionsCollection']
  }
  '/execute/bid': {
    get: operations['getExecuteBid']
  }
  '/execute/build': {
    get: operations['getExecuteBuild']
  }
  '/execute/buy': {
    get: operations['getExecuteBuy']
  }
  '/execute/cancel': {
    get: operations['getExecuteCancel']
  }
  '/execute/fill': {
    get: operations['getExecuteFill']
  }
  '/execute/list': {
    get: operations['getExecuteList']
  }
  '/execute/sell': {
    get: operations['getExecuteSell']
  }
  '/liquidity/collections': {
    get: operations['getLiquidityCollections']
  }
  '/liquidity/users': {
    get: operations['getLiquidityUsers']
  }
  '/orders/all': {
    get: operations['getOrdersAll']
  }
  '/orders/build': {
    get: operations['getOrdersBuild']
  }
  '/orders/executed': {
    get: operations['getOrdersExecuted']
  }
  '/orders/fill': {
    get: operations['getOrdersFill']
  }
  '/tokens/details': {
    get: operations['getTokensDetails']
  }
  '/tokens/floor': {
    get: operations['getTokensFloor']
  }
  '/collections/{collection}/attributes': {
    get: operations['getCollectionsCollectionAttributes']
  }
  '/collections/{collection}/top-buys': {
    get: operations['getCollectionsCollectionTopbuys']
  }
  '/users/{user}/tokens': {
    get: operations['getUsersUserTokens']
  }
  '/users/{user}/positions': {
    get: operations['getUsersUserPositions']
  }
  '/users/{user}/collections': {
    get: operations['getUsersUserCollections']
  }
  '/apikey': {
    /** The API key can be used optionally in every route, set it as a request header **x-api-key** */
    post: operations['postApikey']
  }
  '/order': {
    post: operations['postOrder']
  }
  '/admin/contracts': {
    post: operations['postAdminContracts']
  }
  '/attributes/refresh': {
    post: operations['postAttributesRefresh']
  }
  '/admin/disable/orders': {
    post: operations['postAdminDisableOrders']
  }
  '/admin/fetch/blocks': {
    post: operations['postAdminFetchBlocks']
  }
  '/admin/fix/cache': {
    post: operations['postAdminFixCache']
  }
  '/admin/index/metadata': {
    post: operations['postAdminIndexMetadata']
  }
  '/admin/sync/events': {
    post: operations['postAdminSyncEvents']
  }
  '/admin/sync/orders': {
    post: operations['postAdminSyncOrders']
  }
  '/admin/index/metadata/fast': {
    post: operations['postAdminIndexMetadataFast']
  }
}

export interface definitions {
  Model1: {
    value?: string
    count?: number
  }
  values: definitions['Model1'][]
  Model2: {
    key?: string
    kind?: string
    values?: definitions['values']
  }
  attributes: definitions['Model2'][]
  getAttributesResponse: {
    attributes?: definitions['attributes']
  }
  collection: {
    id?: string
    name?: string
    description?: string
    image?: string
    tokenSetId?: string
  }
  royalties: {
    recipient?: string
    bps?: number
  }
  sampleImages: string[]
  lastBuy: {
    value?: number
    block?: number
  }
  token: {
    contract?: string
    tokenId?: string
    name?: string
    image?: string
  }
  floorSell: {
    hash?: string
    value?: number
    maker?: string
    validFrom?: number
    validUntil?: number
    token?: definitions['token']
    source?: string
  }
  topBuy: {
    hash?: string
    value?: number
    maker?: string
    validFrom?: number
    validUntil?: number
  }
  market: {
    floorSell?: definitions['floorSell']
    topBuy?: definitions['topBuy']
  }
  set: {
    tokenCount?: number
    onSaleCount?: number
    sampleImages?: definitions['sampleImages']
    lastBuy?: definitions['lastBuy']
    market?: definitions['market']
  }
  Model3: {
    collection?: definitions['collection']
    royalties?: definitions['royalties']
    set?: definitions['set']
  }
  collections: definitions['Model3'][]
  getCollectionsResponse: {
    collections?: definitions['collections']
  }
  Model4: {
    value?: number
    quantity?: number
  }
  buys: definitions['Model4'][]
  Model5: {
    buys?: definitions['buys']
    sells?: definitions['buys']
  }
  Model6: {
    market?: definitions['Model5']
  }
  data: { [key: string]: unknown }
  schema: {
    data?: definitions['data']
    kind?: string
  }
  metadata: {
    collectionName?: string
    tokenName?: string
  }
  royaltyInfo: definitions['royalties'][]
  Model7: {
    hash?: string
    status?: string
    tokenSetId?: string
    schema?: definitions['schema']
    metadata?: definitions['metadata']
    kind?: string
    side?: string
    maker?: string
    price?: number
    value?: number
    validFrom?: number
    validUntil?: number
    sourceInfo?: string
    royaltyInfo?: definitions['royaltyInfo']
    rawData?: definitions['data']
  }
  orders: definitions['Model7'][]
  getOrdersResponse: {
    orders?: definitions['orders']
  }
  ownership: {
    tokenCount?: number
    onSaleCount?: number
    floorSellValue?: number
    topBuyValue?: number
    totalBuyValue?: number
    lastAcquiredAt?: number
  }
  Model8: {
    address?: string
    ownership?: definitions['ownership']
  }
  owners: definitions['Model8'][]
  getOwnersResponse: {
    owners?: definitions['owners']
  }
  Model9: {
    id?: string
    name?: string
  }
  Model10: {
    contract?: string
    name?: string
    image?: string
    tokenId?: string
    collection?: definitions['Model9']
  }
  Model11: {
    token?: definitions['Model10']
    from?: string
    to?: string
    amount?: number
    txHash?: string
    block?: number
    timestamp?: number
    price?: number
  }
  sales: definitions['Model11'][]
  getSalesResponse: {
    sales?: definitions['sales']
  }
  getStatsResponse: {
    stats?: definitions['set']
  }
  Model12: {
    contract?: string
    name?: string
    image?: string
    tokenId?: string
    collection?: definitions['Model9']
    topBuyValue?: number
    floorSellValue?: number
  }
  tokens: definitions['Model12'][]
  getTokensResponse: {
    tokens?: definitions['tokens']
  }
  getTransfersResponse: {
    transfers?: definitions['sales']
  }
  Model13: {
    value?: number
    timestamp?: number
  }
  Model14: {
    id?: string
    name?: string
    description?: string
    image?: string
    tokenSetId?: string
    lastBuy?: definitions['Model13']
    lastSell?: definitions['Model13']
  }
  Model15: {
    collection?: definitions['Model14']
    royalties?: definitions['royalties']
    set?: definitions['set']
  }
  getCollectionResponse: {
    collection?: definitions['Model15']
  }
  Model16: {
    action: string
    description: string
    status: 'complete' | 'incomplete'
    kind: 'request' | 'signature' | 'transaction'
    data?: string
  }
  steps: definitions['Model16'][]
  getExecuteBidResponse: {
    steps?: definitions['steps']
    query?: string
    error?: string
  }
  Model17: {
    action: string
    description: string
    status: 'complete' | 'incomplete'
    kind: 'order-signature' | 'transaction'
    data?: string
  }
  Model18: definitions['Model17'][]
  getExecuteBuildResponse: {
    steps?: definitions['Model18']
    error?: string
  }
  Model19: {
    action: string
    description: string
    status: 'complete' | 'incomplete'
    kind: 'transaction' | 'confirmation'
    data?: string
  }
  Model20: definitions['Model19'][]
  getExecuteBuyResponse: {
    steps?: definitions['Model20']
    error?: string
  }
  Model21: {
    id?: string
    name?: string
    image?: string
  }
  Model22: {
    collection: definitions['Model21']
    tokenCount?: number
    liquidity?: number
    uniqueTopBuyers?: number
    topLiquidityProvider?: string
  }
  liquidity: definitions['Model22'][]
  getCollectionsLiquidityResponse: {
    liquidity?: definitions['liquidity']
  }
  Model23: {
    user?: string
    rank?: number
    tokenCount?: number
    liquidity?: number
    maxTopBuyValue?: number
    wethBalance?: number
  }
  Model24: definitions['Model23'][]
  getUsersLiquidityResponse: {
    liquidity?: definitions['Model24']
  }
  sourceInfo: {
    id?: string
    bps?: number
  }
  Model25: {
    hash?: string
    tokenSetId?: string
    schema?: definitions['schema']
    metadata?: definitions['metadata']
    kind?: string
    side?: string
    maker?: string
    price?: number
    value?: number
    validFrom?: number
    validUntil?: number
    sourceInfo?: definitions['sourceInfo']
    royaltyInfo?: definitions['royaltyInfo']
    createdAt?: string
    rawData?: definitions['data']
  }
  Model26: definitions['Model25'][]
  getOrdersAllResponse: {
    orders?: definitions['Model26']
    continuation?: string
  }
  params: {
    exchange: string
    maker: string
    taker: string
    makerRelayerFee: number
    takerRelayerFee: number
    feeRecipient: string
    side: 0 | 1
    saleKind: 0 | 1
    target: string
    howToCall: 0 | 1
    calldata: string
    replacementPattern: string
    staticTarget: string
    staticExtradata: string
    paymentToken: string
    basePrice: string
    extra: string
    listingTime: number
    expirationTime: number
    salt: string
    v: number
    r: string
    s: string
  }
  order: {
    params?: definitions['params']
  }
  getOrdersBuildResponse: {
    order?: definitions['order']
  }
  Model27: {
    params?: definitions['params']
    buildMatchingArgs?: definitions['sampleImages']
  }
  getOrdersFillResponse: {
    order?: definitions['Model27']
  }
  Model28: {
    key?: string
    value?: string
  }
  Model29: definitions['Model28'][]
  Model30: {
    contract?: string
    kind?: string
    name?: string
    description?: string
    image?: string
    tokenId?: string
    collection?: definitions['Model9']
    lastBuy?: definitions['Model13']
    lastSell?: definitions['Model13']
    owner?: string
    attributes?: definitions['Model29']
  }
  Model31: {
    token?: definitions['Model30']
    market?: definitions['market']
  }
  Model32: definitions['Model31'][]
  getTokensDetailsResponse: {
    tokens?: definitions['Model32']
  }
  getTokensFloorResponse: {
    tokens?: {
      string?: number
    }
  }
  lastSells: definitions['lastBuy'][]
  floorSellValues: number[]
  Model33: {
    hash?: string
    value?: number
    maker?: string
    validFrom?: number
  }
  Model34: {
    key?: string
    value?: string
    tokenCount?: number
    onSaleCount?: number
    sampleImages?: definitions['sampleImages']
    lastSells?: definitions['lastSells']
    lastBuys?: definitions['lastSells']
    floorSellValues?: definitions['floorSellValues']
    topBuy?: definitions['Model33']
  }
  Model35: definitions['Model34'][]
  getCollectionAttributesResponse: {
    attributes?: definitions['Model35']
  }
  getCollectionTopBuysResponse: {
    topBuys?: definitions['buys']
  }
  Model36: {
    hash?: string
    value?: number
    schema?: string
  }
  Model37: {
    contract?: string
    name?: string
    image?: string
    tokenId?: string
    collection?: definitions['Model9']
    topBuy?: definitions['Model36']
  }
  Model38: {
    tokenCount?: number
    onSaleCount?: number
    floorSellValue?: number
    lastAcquiredAt?: number
  }
  Model39: {
    token?: definitions['Model37']
    ownership?: definitions['Model38']
  }
  Model40: definitions['Model39'][]
  getUserTokensResponse: {
    tokens?: definitions['Model40']
  }
  Model41: {
    id?: string
    schema?: string
    metadata?: string
    sampleImages?: definitions['sampleImages']
    image?: string
    floorSellValue?: number
    topBuyValue?: number
  }
  primaryOrder: {
    value?: number
    expiry?: number
    hash?: string
    status?: string
  }
  Model42: {
    set?: definitions['Model41']
    primaryOrder?: definitions['primaryOrder']
    totalValid?: number
  }
  positions: definitions['Model42'][]
  getUserPositionsResponse: {
    positions?: definitions['positions']
  }
  Model43: {
    id?: string
    name?: string
    image?: string
    floorSellValue?: number
    topBuyValue?: number
  }
  Model44: {
    tokenCount?: number
    onSaleCount?: number
    liquidCount?: number
    lastAcquiredAt?: number
  }
  Model45: {
    collection?: definitions['Model43']
    ownership?: definitions['Model44']
  }
  Model46: definitions['Model45'][]
  getUserCollectionsResponse: {
    collections?: definitions['Model46']
  }
  getNewApiKeyResponse: {
    key: string
  }
  attribute: {
    collection: string
    key: string
    value: string
  }
  Model47: {
    kind: 'wyvern-v2.3'
    /** @default reservoir */
    orderbook?: 'reservoir' | 'opensea'
    source?: string
    attribute?: definitions['attribute']
  }
  Model48: {
    order?: definitions['Model47']
  }
  Model49: {
    kind: 'wyvern-v2.3'
    attribute?: definitions['attribute']
  }
  Model50: definitions['Model49'][]
  Model51: {
    orders?: definitions['Model50']
  }
  contracts: string[]
  Model52: {
    contracts?: definitions['contracts']
  }
  hashes: string[]
  Model53: {
    hashes?: definitions['hashes']
  }
  Model54: {
    fromBlock: number
    toBlock: number
  }
  Model55: {
    kind?: 'tokens-floor-sell' | 'tokens-top-buy' | 'token-sets-top-buy'
    contracts?: definitions['contracts']
  }
  Model56: {
    collection: string
  }
  Model57: string[]
  Model58: {
    contractKind: 'erc20' | 'erc721' | 'erc1155' | 'wyvern-v2' | 'wyvern-v2.3'
    contracts?: definitions['Model57']
    fromBlock: number
    toBlock: number
    blocksPerBatch?: number
    handleAsCatchup?: boolean
  }
  Model59: {
    fromBlock: number
    toBlock: number
    blocksPerBatch?: number
  }
}

export interface operations {
  getAttributes: {
    parameters: {
      query: {
        collection: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getAttributesResponse']
      }
    }
  }
  getCollections: {
    parameters: {
      query: {
        community?: string
        collection?: string
        name?: string
        sortBy?: 'id' | 'floorCap'
        sortDirection?: 'asc' | 'desc'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getCollectionsResponse']
      }
    }
  }
  getMarket: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributes?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['Model6']
      }
    }
  }
  getOrders: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributeKey?: string
        attributeValue?: string
        maker?: string
        hash?: string
        includeInvalid?: boolean
        side?: 'sell' | 'buy'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getOrdersResponse']
      }
    }
  }
  postOrders: {
    parameters: {
      body: {
        body?: definitions['Model51']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  getOwners: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        owner?: string
        attributes?: string
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getOwnersResponse']
      }
    }
  }
  getSales: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributes?: string
        user?: string
        direction?: 'from' | 'to'
        side?: 'buy' | 'sell'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getSalesResponse']
      }
    }
  }
  getStats: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributes?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getStatsResponse']
      }
    }
  }
  getTokens: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributes?: string
        tokenSetId?: string
        onSale?: boolean
        sortBy?: 'tokenId' | 'floorSellValue' | 'topBuyValue'
        sortByAttribute?: string
        sortDirection?: 'asc' | 'desc'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getTokensResponse']
      }
    }
  }
  getTransfers: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributes?: string
        user?: string
        direction?: 'from' | 'to'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getTransfersResponse']
      }
    }
  }
  getCollectionsCollection: {
    parameters: {
      path: {
        collection: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getCollectionResponse']
      }
    }
  }
  getExecuteBid: {
    parameters: {
      query: {
        source?: string
        contract?: string
        tokenId?: string
        collection?: string
        attributeKey?: string
        attributeValue?: string
        maker: string
        price: string
        orderbook?: 'reservoir' | 'opensea'
        disableRoyalties?: boolean
        fee?: string
        feeRecipient?: string
        v?: number
        r?: string
        s?: string
        listingTime?: string
        expirationTime?: string
        salt?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBidResponse']
      }
    }
  }
  getExecuteBuild: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributeKey?: string
        attributeValue?: string
        maker: string
        side: 'sell' | 'buy'
        price: string
        fee: string
        feeRecipient: string
        listingTime?: string
        expirationTime?: string
        salt?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBuildResponse']
      }
    }
  }
  getExecuteBuy: {
    parameters: {
      query: {
        contract: string
        tokenId: string
        taker: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBuyResponse']
      }
    }
  }
  getExecuteCancel: {
    parameters: {
      query: {
        hash: string
        maker: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBuyResponse']
      }
    }
  }
  getExecuteFill: {
    parameters: {
      query: {
        contract: string
        tokenId: string
        taker: string
        side?: 'sell' | 'buy'
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBuyResponse']
      }
    }
  }
  getExecuteList: {
    parameters: {
      query: {
        source?: string
        contract?: string
        tokenId?: string
        maker: string
        price: string
        orderbook?: 'reservoir' | 'opensea'
        disableRoyalties?: boolean
        fee?: string
        feeRecipient?: string
        v?: number
        r?: string
        s?: string
        listingTime?: string
        expirationTime?: string
        salt?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBidResponse']
      }
    }
  }
  getExecuteSell: {
    parameters: {
      query: {
        contract: string
        tokenId: string
        taker: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getExecuteBuyResponse']
      }
    }
  }
  getLiquidityCollections: {
    parameters: {
      query: {
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getCollectionsLiquidityResponse']
      }
    }
  }
  getLiquidityUsers: {
    parameters: {
      query: {
        collection?: string
        user?: string
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getUsersLiquidityResponse']
      }
    }
  }
  getOrdersAll: {
    parameters: {
      query: {
        side?: 'buy' | 'sell'
        sortDirection?: 'asc' | 'desc'
        continuation?: string
        limit?: number
        /** Needs to be a unix timestamp */
        startTime?: string
        /** Needs to be a unix timestamp and must be a later timestamp than startTime */
        endTime?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getOrdersAllResponse']
      }
    }
  }
  getOrdersBuild: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributeKey?: string
        attributeValue?: string
        maker: string
        side: 'sell' | 'buy'
        price: string
        fee: string
        feeRecipient: string
        listingTime?: string
        expirationTime?: string
        salt?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getOrdersBuildResponse']
      }
    }
  }
  getOrdersExecuted: {
    parameters: {
      query: {
        hash: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: string
      }
    }
  }
  getOrdersFill: {
    parameters: {
      query: {
        tokenId: string
        contract: string
        side?: 'sell' | 'buy'
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getOrdersFillResponse']
      }
    }
  }
  getTokensDetails: {
    parameters: {
      query: {
        contract?: string
        tokenId?: string
        collection?: string
        attributes?: string
        tokenSetId?: string
        onSale?: boolean
        source?: string
        sortBy?: 'tokenId' | 'floorSellValue' | 'topBuyValue'
        sortByAttribute?: string
        sortDirection?: 'asc' | 'desc'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getTokensDetailsResponse']
      }
    }
  }
  getTokensFloor: {
    parameters: {
      query: {
        collection: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getTokensFloorResponse']
      }
    }
  }
  getCollectionsCollectionAttributes: {
    parameters: {
      path: {
        collection: string
      }
      query: {
        attribute?: string
        sortBy?: 'value' | 'floorSellValue' | 'floorCap' | 'topBuyValue'
        sortDirection?: 'asc' | 'desc'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getCollectionAttributesResponse']
      }
    }
  }
  getCollectionsCollectionTopbuys: {
    parameters: {
      path: {
        collection: string
      }
      query: {
        attributes?: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getCollectionTopBuysResponse']
      }
    }
  }
  getUsersUserTokens: {
    parameters: {
      path: {
        user: string
      }
      query: {
        community?: string
        collection?: string
        hasOffer?: boolean
        sortBy?: 'acquiredAt' | 'topBuyValue'
        sortDirection?: 'asc' | 'desc'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getUserTokensResponse']
      }
    }
  }
  getUsersUserPositions: {
    parameters: {
      path: {
        user: string
      }
      query: {
        side: 'buy' | 'sell'
        status: 'valid' | 'invalid'
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getUserPositionsResponse']
      }
    }
  }
  getUsersUserCollections: {
    parameters: {
      path: {
        user: string
      }
      query: {
        community?: string
        collection?: string
        offset?: number
        limit?: number
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getUserCollectionsResponse']
      }
    }
  }
  /** The API key can be used optionally in every route, set it as a request header **x-api-key** */
  postApikey: {
    parameters: {
      formData: {
        /** The name of the app */
        appName: string
        /** Your e-mail address so we can reach you */
        email: string
        /** The website of your project */
        website: string
      }
    }
    responses: {
      /** Successful */
      200: {
        schema: definitions['getNewApiKeyResponse']
      }
    }
  }
  postOrder: {
    parameters: {
      body: {
        body?: definitions['Model48']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminContracts: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model52']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAttributesRefresh: {
    parameters: {
      query: {
        contract: string
        tokenId: string
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminDisableOrders: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model53']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminFetchBlocks: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model54']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminFixCache: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model55']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminIndexMetadata: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model56']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminSyncEvents: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model58']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminSyncOrders: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model59']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
  postAdminIndexMetadataFast: {
    parameters: {
      header: {
        'x-admin-api-key': string
      }
      body: {
        body?: definitions['Model56']
      }
    }
    responses: {
      /** Successful */
      default: {
        schema: string
      }
    }
  }
}

export interface external {}
