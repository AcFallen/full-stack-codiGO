import { Link, useNavigate } from "react-router-dom"

import { TbChevronLeft, TbTrashFilled } from "react-icons/tb"
import { useState } from "react"
import Swal from 'sweetalert2'

import BaseInput from "../components/shared/BaseInput"
import BaseSelect from "../components/shared/BaseSelect"
import BaseButton from "../components/shared/BaseButton"
import { generateCode } from "../utils"
import { createInvoice } from "../services/invoices"

const InvoiceNew = () => {

    const navigate = useNavigate()

  const DEFAULT_FORM_VALUE = {
    billFromStreetAddress: '',
    billFromCity: '',
    billFromPostCode: '',
    billFromCountry: '',
    billToClientName: '',
    billToClientEmail: '',
    billToClientStreetAddress: '',
    billToCity: '',
    billToPostCode: '',
    billToCountry: '',
    invoiceDate: '',
    paymentTerms: '',
    projectDescription: '',
    invoiceItems: []
  }

  const paymentTermsOptions = [
    { value: '1', label: 'Next 60 Days' },
    { value: '2', label: 'Next 30 Days' },
    { value: '3', label: 'Next 15 Days' }
  ]

  const [items, setItems] = [
    {
      id: 1,
      name: '',
      qty: 0.0,
      price: 0.0
    }
  ]

  const [form, setForm] = useState(DEFAULT_FORM_VALUE)

  const handleChange = (event) => {
    const { name, value} = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async () => {

    event.preventDefault()
    console.log('Listo para enviar',form)

    

    const newCode = generateCode()

    const newForm = {
        "code": newCode,
        "status": "draft",
        "bill": {
          "from": {
            "streetAddress": form.billFromStreetAddress,
            "city": form.billFromCity,
            "postCode": form.billFromPostCode,
            "country": form.billFromCountry
          },
          "to": {
            "client": {
              "name": form.billToClientName,
              "email": form.billToClientEmail
            },
            "streetAddress": form.billToClientStreetAddress,
            "city": form.billToCity,
            "postCode": form.billToPostCode,
            "country": form.billToCountry
          }
        },
        "invoice": {
          "date": form.invoiceDate,
          "paymentTerms": form.paymentTerms,
          "project": {
            "description": form.projectDescription
          },
          "grandTotal": 6000,
          "currency": {
            "symbol": "$"
          },
          "items": [
            {
              "name": "Banner Design",
              "qty": 2,
              "price": 2500,
              "total": 5000
            },
            {
              "name": "Email Design",
              "qty": 5,
              "price": 200,
              "total": 1000
            }
          ]
        }
      }

      console.log(newForm)
      
      const res = await createInvoice(newForm)

      if(res) {
        // Redireccionamos al listado de invoices

        Swal.fire({
            title: 'New Invoice',
            text: 'Se guardó correctamento!',
            icon: 'success'
        })

        navigate('/invoices')
      }else {
        // Mostramos un mensaje de error
      }
  }

  return (
    <main className="w-[740px] m-auto flex flex-col gacp-5">
      <Link
        to='/invoices'
        className="text-white font-bold flex gap-5 items-center"
      >
        <TbChevronLeft className="text-slate-400" />
        Go back
      </Link>

      <header
        className="pt-4 pb-8 rounded-lg"
      >
        <h1 className="text-4xl font-extrabold text-white">New Invoice</h1>
      </header>

       <pre className="text-white">{JSON.stringify(form, null, 2)}</pre> 

      <section>
        <form onSubmit={handleSubmit}>
          <h4 className="text-violet-500 font-bold mb-5">Bill From</h4>

          <BaseInput
            label='Street Address'
            placeholder='Codigo 234 Av.'
            name='billFromStreetAddress'
            value={form.billFromStreetAddress}
            onChange={handleChange}
          />

          <div className="flex justify-between gap-6">
            <BaseInput
              label="City"
              placeholder="Chiclayo"
              name='billFromCity'
              value={form.billFromCity}
              onChange={handleChange}
            />
            <BaseInput
              label="Post Code"
              placeholder="00000"
              name='billFromPostCode'
              value={form.billFromPostCode}
              onChange={handleChange}
            />
            <BaseInput
              label="Country"
              placeholder="Peru"
              name='billFromCountry'
              value={form.billFromCountry}
              onChange={handleChange}
            />
          </div>

          <h4 className="text-violet-500 font-bold mb-5">Bill From</h4>

          <BaseInput
            label="Client's Name"
            placeholder="Alyssa"
            name='billToClientName'
            value={form.billToClientName}
            onChange={handleChange}
          />

          <BaseInput
            label="Client's Email"
            placeholder="alyssa@email.com"
            name='billToClientEmail'
            value={form.billToClientEmail}
            onChange={handleChange}
          />

          <BaseInput
            label="Street Address"
            placeholder="Codigo 234 Av."
            name='billToClientStreetAddress'
            value={form.billToClientStreetAddress}
            onChange={handleChange}
          />

          <div className="flex justify-between gap-6">
            <BaseInput
              label="City"
              placeholder="Chiclayo"
              name='billToCity'
              value={form.billToCity}
              onChange={handleChange}
            />
            <BaseInput
              label="Post Code"
              placeholder="00000"
              name='billToPostCode'
              value={form.billToPostCode}
              onChange={handleChange}
            />
            <BaseInput
              label="Country"
              placeholder="Peru"
              name='billToCountry'
              value={form.billToCountry}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center  mt-10">
            <BaseInput
              type="date"
              label="Invoice Date"
              placeholder="YYYY-MM-DD"
              name='invoiceDate'
              value={form.invoiceDate}
              onChange={handleChange}
            />

            <BaseSelect
              label="Payment Terms"
              name='paymentTerms'
              value={form.paymentTerms}
              onChange={handleChange}
              options={paymentTermsOptions}
            />
          </div>

          <BaseInput
            label="Project Description"
            placeholder="Your project"
            name='projectDescription'
            value={form.projectDescription}
            onChange={handleChange}
          />

          <h5 className="text-violet-500 text-xl font-bold mb-5 mt-10">Item List</h5>

          <div class="text-white grid grid-cols-5 gap-4 mb-5 items-center">
            <div>Item Name</div>
            <div>Qty.</div>
            <div>Price</div>
            <div>Total</div>
            <div></div>
            <>
              <BaseInput
                name="name"
                placeholder=""
                // value={item.name}
                onChange={handleChange}
              />
              <BaseInput
                type="number"
                name="qty"
                placeholder="0"
                // value={item.qty}
                onChange={handleChange}
              />
              <BaseInput
                type="number"
                placeholder="0.00"
                // value={item.price}
                onChange={handleChange}
              />
              <div>156.01</div>
              <div>
                <TbTrashFilled className="text-lg" />
              </div>
              <BaseInput
                name="name"
                placeholder=""
                // value={item.name}
                onChange={handleChange}
              />
              <BaseInput
                type="number"
                name="qty"
                placeholder="0"
                // value={item.qty}
                onChange={handleChange}
              />
              <BaseInput
                type="number"
                placeholder="0.00"
                // value={item.price}
                onChange={handleChange}
              />
              <div>156.01</div>
              <div>
                <TbTrashFilled className="text-lg" />
              </div>
              <BaseInput
                name="name"
                placeholder=""
                // value={item.name}
                onChange={handleChange}
              />
              <BaseInput
                type="number"
                name="qty"
                placeholder="0"
                // value={item.qty}
                onChange={handleChange}
              />
              <BaseInput
                type="number"
                placeholder="0.00"
                // value={item.price}
                onChange={handleChange}
              />
              <div>156.01</div>
              <div>
                <TbTrashFilled className="text-lg" />
              </div>
            </>
          </div>

          <BaseButton
            classx='w-full'
            label='+ Add New Item'
            bgColor='bg-slate-800'
          >
            
          </BaseButton>

          <div class="flex justify-end gap-2 mt-10">
            {/* <BaseButton
              label='Cancel'
              bgColor='bg-slate-800'
            /> */}
            <BaseButton
              label='Save Changes'
              bgColor='bg-violet-500'
            />
          </div>
        </form>
      </section>
    </main>
  )
}

export default InvoiceNew