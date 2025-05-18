export default interface RouteInterface {
    index?: any
    // index?: false
    path?: string
    element: any
    children?: RouteInterface[]
    redirect?: string
    caseSensitive?: boolean
    needAuthenticating?: boolean
}
