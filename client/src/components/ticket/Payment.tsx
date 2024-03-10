

const Payment = () => {
    return(
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-8">
                <h6 className="bg-gray-100 p-3">Chọn phương thức thanh toán</h6>
                <div className="border p-3 rounded">
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="payment_method" id="credit_card" />
                        <label className="form-check-label" htmlFor="credit_card">
                            Thẻ tín dụng / Ghi nợ
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="payment_method" id="atm_card" />
                        <label className="form-check-label" htmlFor="atm_card">   
                            Thẻ ATM / Tài khoản ngân hàng
                            <i className="fas fa-credit-card me-2"></i>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="payment_method" id="qr_code" />
                        <label className="form-check-label" htmlFor="qr_code">
                            Thanh toán mã QR với Ứng dụng di động
                            <i className="fas fa-qrcode me-2"></i>
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <h6 className="bg-gray-100 p-3">Thông tin đơn hàng</h6>
                <div className="border p-3 rounded">
                    <p className="mb-2">Đơn vị chấp nhận thanh toán</p>
                    <p className="mb-2">Beta Cinemas</p>
                    <p className="mb-2">Mã đơn hàng</p>
                    <p className="mb-2">TN-3743402023021960</p>
                    <hr />
                    <p className="mb-2">Số tiền thanh toán</p>
                    <h4 className="text-danger">60.000 VND</h4>
                    <button className="btn btn-danger w-100 mt-3">Thanh toán</button>
                    <button className="btn btn-light w-100 mt-2">Hủy giao dịch</button>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Payment