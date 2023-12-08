import InvoiceList from "../components/invoices/InvoiceList"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { fetchInvoices } from "../services/invoices"

const Invoices = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(()=> {
        fetchInvoices()
            .then(invoices => setInvoices(invoices))
    },[])


    return (
        <>
            <Header title='Invoices' />

            <InvoiceList invoices={invoices} />
        </>
        
    )
}

export default Invoices