const API_URL = 'https://65728909d61ba6fcc0152a25.mockapi.io/api/v1/invoices/'

export const fetchInvoices = async () => {
    const url = `${API_URL}`

    const response = await fetch(url)

    const data = response.json()

    return data
  }