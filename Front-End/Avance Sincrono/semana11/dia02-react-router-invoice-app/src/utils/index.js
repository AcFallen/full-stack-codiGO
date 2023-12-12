export const formatNumber = (number) => {
    const localDefault = 'en-US'
    const options = {
        minimumFractionDigits: 2
    }

    return new Intl.NumberFormat(localDefault, options).format(number)
} 

export const generateCode = () => {
    return crypto.randomUUID().split('-').at(0).slice(0, 6)
}