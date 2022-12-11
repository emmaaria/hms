import {useState} from "react";
import $ from "jquery";

export default function PosPaymentModal({
                                            hidePayment,
                                            calculateDue,
                                            discountType,
                                            grandTotal,
                                            discountAmount,
                                            paid,
                                            handleForm,
                                            discount
                                        }) {
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const handlePaymentMethod = (event) => {
        $(`.paid`).each(function () {
            $(this).val('')
        })
        setPaymentMethod(event.target.value)
    }
    return (
        <div className="payment-modal">
            <div className="payment-modal-container">
                <div className="close">
                    <span className='fa-solid fa-close' onClick={hidePayment}></span>
                </div>
                <div className="title">
                    Make Payment
                </div>
                <hr/>
                <div className="row gx-5">
                    <div className="col-md-7">
                        <div className="form-group mb-3">
                            <label className={`form-label`}>
                                Payment Method
                            </label>
                            <select className={`paymentMethod form-control form-select`}
                                    value={paymentMethod} onChange={handlePaymentMethod}>
                                <option value="cash">Cash</option>
                                <option value="bkash">Bkash</option>
                                <option value="nagad">Nagad</option>
                                <option value="card">Card</option>
                                <option value="multiple">Multiple</option>
                            </select>
                        </div>
                        {
                            paymentMethod === 'cash' && (
                                <div className="form-group mb-3">
                                    <label className={`form-label`}>
                                        Cash
                                    </label>
                                    <input type="text" className={`form-control paid cash`}
                                           onKeyUp={calculateDue}
                                           onKeyDown={calculateDue} onChange={calculateDue}/>
                                </div>
                            )
                        }
                        {
                            paymentMethod === 'bkash' && (
                                <div className="form-group mb-3">
                                    <label className={`form-label`}>
                                        Bkash
                                    </label>
                                    <input type="text" className={`form-control paid bkash`}
                                           onKeyUp={calculateDue}
                                           onKeyDown={calculateDue} onChange={calculateDue}/>
                                </div>
                            )
                        }
                        {
                            paymentMethod === 'nagad' && (
                                < div className="form-group mb-3">
                                    <label className={`form-label`}>
                                        Nagad
                                    </label>
                                    <input type="text" className={`form-control paid nagad`}
                                           onKeyUp={calculateDue}
                                           onKeyDown={calculateDue} onChange={calculateDue}/>
                                </div>
                            )
                        }
                        {
                            paymentMethod === 'card' && (
                                <div className="form-group mb-3">
                                    <label className={`form-label`}>
                                        Card
                                    </label>
                                    <input type="text" className={`form-control paid card`}
                                           onKeyUp={calculateDue}
                                           onKeyDown={calculateDue} onChange={calculateDue}/>
                                </div>
                            )
                        }
                        {
                            paymentMethod === 'bank' && banks && banks.length > 0 && (
                                <>
                                    <div className="form-group mb-3">
                                        <label className={`form-label`}>
                                            Bank
                                        </label>
                                        <select className={`form-control form-select bankId`} required>
                                            <option value="">Select Bank</option>
                                            {
                                                banks.map(bank => (
                                                    <option key={bank.id} value={bank.id}>
                                                        {bank.name} ({bank.account_no})
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className={`form-label`}>
                                            Bank Paid Amount
                                        </label>
                                        <input type="text" className={`form-control paid bank`}
                                               onKeyUp={calculateDue}
                                               onKeyDown={calculateDue} onChange={calculateDue}/>
                                    </div>
                                </>
                            )
                        }
                        <div className="mb-3 mt-3">
                            <textarea id="note" rows="3" className={`note form-control`} placeholder='Note'/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <table className={`table table-bordered mb-0`}>
                                <tbody>
                                <tr>
                                    <td><strong>Subtotal</strong></td>
                                    <td>{grandTotal} Tk.</td>
                                </tr>
                                <tr>
                                    <td><strong>Discount</strong></td>
                                    <td>{discount} {discountType}</td>
                                </tr>
                                <tr>
                                    <td><strong>Discounted Amount</strong></td>
                                    <td>{discountAmount} Tk.</td>
                                </tr>
                                <tr className={`ttl`}>
                                    <td><strong>Grand Total</strong></td>
                                    <td>{grandTotal - discountAmount} Tk.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong className={`text-success`}>
                                            {
                                                (grandTotal - discountAmount) - paid < 0 && (
                                                    <>
                                                        Change
                                                    </>
                                                ) || (
                                                    <>
                                                        Due
                                                    </>
                                                )
                                            }
                                        </strong>
                                    </td>
                                    <td className={`text-success`}>{Math.abs((grandTotal - discountAmount) - paid).toFixed(2)} Tk.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <hr/>
                <button className={`btn btn-success mt-3 float-end`} onClick={handleForm}>Save</button>
            </div>
        </div>
    )
}