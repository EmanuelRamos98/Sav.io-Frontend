export const getAuthenticatedHeaders = () => {
    const accessToken = sessionStorage.getItem('accesToken')
    return {
        'Authorization': `Bearer ${accessToken}`,
        'content-Type': 'application/json'
    }
}