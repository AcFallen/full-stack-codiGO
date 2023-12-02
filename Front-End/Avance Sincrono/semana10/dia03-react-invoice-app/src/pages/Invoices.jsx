import InvoiceList from "../components/invoices/InvoiceList"
import Header from "../components/Header"

const Invoices = ({ invoices }) => {
    return (
        <>
            <Header title='Invoices' />

            <InvoiceList invoices={invoices} />
        </>
        
    )
}

export default Invoices