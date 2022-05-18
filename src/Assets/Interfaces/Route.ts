export default interface RouteInterface {
    index?: boolean
    path?: string
    element: any
    children?: RouteInterface[]
    redirect?: string
    caseSensitive?: boolean
    needAuthenticating?: boolean
}
