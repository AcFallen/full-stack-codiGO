const API_URL = 'https://65728909d61ba6fcc0152a25.mockapi.io/api/v1'

export const fetchInvoices = async () => {
    const url = `${API_URL}/invoices`

    const response = await fetch(url)

    const data = response.json()

    return data
  } 

  export const getInvoice = async (id) => {
    const url = `${API_URL}/invoices/${id}`

    const response = await fetch(url)

    const data = response.json()

    return data
  }