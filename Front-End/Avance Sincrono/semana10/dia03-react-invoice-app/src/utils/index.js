export const formatNumber = (number) => {
    const localDefault = 'en-US'
    const options = {
        minimumFractionDigits: 2
    }

    return new Intl.NumberFormat(localDefault, options).format(number)
} 