export const checkLinkUrl = (url: string) => url[0] === '/' ? url : `/${url}`;

export const FormattersHelper = {
    checkLinkUrl
}