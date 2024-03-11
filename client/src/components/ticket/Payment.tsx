import React, { useState } from 'react';
const Payment = () => {

    const [selectedInput, setSelectedInput] = useState(null);

    const handleInputChange = (inputId) => {
        setSelectedInput(inputId === selectedInput ? null : inputId);
    };

    return(
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-8">
                <h6 className="bg-gray-100 p-3">Chọn phương thức thanh toán</h6>
                <div className="border p-2 rounded">
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" 
                            name="payment_method" 
                            id="credit_card" 
                            onChange={() => handleInputChange("credit_card")}
                            checked={selectedInput === "credit_card"}
                        />
                        <label className="form-check-label" htmlFor="credit_card">
                            Thẻ tín dụng / Ghi nợ
                        </label>
                    </div>

                    {selectedInput === "credit_card" && (
                    <div>
                        <div className="text-center ml-10 mr-10 mb-2 pb-2" style={{borderBottom: "2px solid black", fontWeight: "bold"}}>
                            Quét mã QR
                        </div>
                        <div className="text-center">
                            <p>Vui lòng đăng nhập ứng dụng đã thêm thẻ UnionPay để quét mã QR và tiếp tục giao dịch</p>
                        </div>
                        <div className="text-center">
                            <div style={{ border: "1px solid #ccc", borderRadius: "12px", display: "inline-block", padding: "5px" }}>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo17eVU30taD4WtuJUFVZ9ymHpzBGrGwivbNQQL2hHA&s"
                                    alt="QR Code"
                                    id="qr_code"
                                    className="img-fluid"
                                />
                                <p>Còn 17:34</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className="border p-2 mt-2 rounded">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="payment_method" 
                            id="atm_card" 
                            onChange={() => handleInputChange("atm_card")}
                            checked={selectedInput === "atm_card"}
                        />
                        <label className="form-check-label" htmlFor="atm_card">   
                            Thẻ ATM / Tài khoản ngân hàng
                            <i className="fas fa-credit-card me-2 ml-2"></i>
                        </label>
                    </div>

                    {selectedInput === "atm_card" && (
                    <div>
                        <div style={{ position: "relative" }}>
                            <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", top: "17px", left: "12px" }}></i>
                            <input 
                                placeholder="Tìm kiếm ngân hàng" 
                                className="mt-2 py-1 w-full rounded-md bg-gray-100 pl-9"
                            />
                        </div>

                        <div className="d-flex mt-3 mb-3">
                            <img style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100px", height: "50px", padding: "5px" }}
                                src="data:image/jpeg;base64,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"
                                alt="VCB"
                                id="VCB"
                                className="img-fluid"
                            />
                            <img style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100px", height: "50px", padding: "5px", marginLeft: "8px" }}
                                src="data:image/png;base64,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"
                                alt="MB"
                                id="MB"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    )}
                </div>   
                <div className="border p-2 mt-2 rounded">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="payment_method" 
                            id="qr_code" 
                            onChange={() => handleInputChange("qr_code")}
                            checked={selectedInput === "qr_code"}
                        />
                        <label className="form-check-label" htmlFor="qr_code">
                            Thanh toán mã QR với Ứng dụng di động
                            <i className="fas fa-qrcode me-2 ml-2"></i>
                        </label>
                    </div>

                    {selectedInput === "qr_code" && (
                    <div>
                        <div style={{ position: "relative" }}>
                            <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", top: "17px", left: "12px" }}></i>
                            <input 
                                placeholder="Tìm kiếm ứng dụng" 
                                className="mt-2 py-1 w-full rounded-md bg-gray-100 pl-9"
                            />
                        </div>

                        <div className="mt-3">
                            Chọn ứng dụng ngân hàng
                        </div>

                        <div className="d-flex mt-2 mb-3">
                            <img style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100px", height: "50px", padding: "5px" }}
                                src="data:image/jpeg;base64,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"
                                alt="VCB"
                                id="VCB"
                                className="img-fluid"
                            />
                            <img style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100px", height: "50px", padding: "5px", marginLeft: "8px" }}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU8AAACWCAMAAABpVfqTAAAA0lBMVEX///8UHtLrLUsAANCuse3rKkkEFNHs7ftZXtwLF9FARtjrJ0frKUgQG9LqFDzqH0IADdHX2ffqGD7qDTn/+fr96+7+8/X73eG9v+/zkZ7z8/3f4Pj5y9H4vMT72N35xczxeIjvY3fGyPLm5/r1pa+Ul+f0mKR8gOIfKNT2rbZobN7yiJbsPlm0tu7609hLUdqbnunvXXHuUGfsOlbQ0vVvc+BgZd3wbX8tNdZXXNz1oq01PNftSWHvYXT4vsXxe4t5feKjpeqOkuaFieRHTdk6QdjNhjuWAAAQZElEQVR4nO1de1/ivBIW2OLyFlpsuYiigousiDdAV9f76uv3/0qnN9rMTFKSlPPjuCfPf2Jb2qeTzMwzk7C1ZWBgYGBgYGBgYGBgYGBgYGCwDhxNn59fDzZ9F38Luue+a9uus+hv+k7+CvR9uxyh7k82fS9/ATquVV7C7276br4+Bm5KZ9kebvpuvjz6fpmB1970/Xx1nNdZPh3jkorhwSsD+zRBUyG0IZ1l52jTd/S1ceciPs38WQRHPqTTft70HX1tlC3Ip4k/C6GHZk+THxUCcUa9Td/R18bMBnS6g03f0NfGiwPpnG/6hr42WtAZ2YvWpu/oa2MKQk/LNZFnIXThaHcuN31DXxxz4Ix8k7cXwwSYp/Ow6fv54uhYrDPyXjd9P18dwBm5iSrf+iIevrW3t7e9/WN//+bm5vh4N8Hx8c3+9t6avqLfGwzGCi7FZszTPo947A/L1nwdCeft7+8QVzsSZ+3hs75fEXJ2P/95PD1t1JoVIUqPV2/Xuz+KPcFhWPB1XX8uK2e0mdmzXo4ipZFvW5bt3xW7kwCtKkblu8RpJxVyGnkN3yq1WiNASYxGoxqyXTv7tq39BEfLgq/tSZpoJ9PpLCd6Cd3kE3+kfRsJtivkISkzFFXCUmUXH/ONXlpEa7VS+U7Ol0PbSQdv3e7InbNIq0Z+rMi/JhNqfaF3Exlu6ENXf6086w/nLfzBB8nzGX1r5fSbzgOwGrsr6anTcGlpj09Lggsr9Bech67srzqrRAdx8wMfpMZnqVSrfMpM3RAdkDf6zIifzBZPr5Mu12sPI0Itf5r8nSbzhSXla85DN29XnMRjilq1Kp8hoyeq998Hkbn9lP5jGHiYuus57mx8RI2u5zqeX17681aaLRWuGP9scp6rssLjnnJ8TO0TH6XOZ/DNq+caCCS7OUuH0ks/twPqzomhdvovGXWZwy9cMf5d5TxV8y33HN4cEcwA+DAdPktS0QWDI8hn2YldUguW2gJD9d1Zj2OoEQ7Ti7hFHTzP1IKnyg1f7mvcc3AAqsVnqbJqsoHAVQs3DiEPUelyaaiLweSQzqjZpOEWLXo0uXxS58Jgl88T8WJ6fJZooJALVLYo+9EwvuTwGcKyPd+e9VCgepC+FHug9OUEnPAzRIMYG4N/uOZZqhyj4zT5bOQPDgxsiXEI2RLwmRgqyqUe0iDBnql8N8WO4JlzHO2x6BQcPmryWWqeKT3CCFHnRerb1MMsQkqBgpzpI1bBgF4wdgPvIlRbrngeLKQBvwJdPiXiX4Apdkmh12nNHQuTyMJymVxqkM4ZlqX01QTCZxbOYiKLpkEBvXYDqiFNmrXGV1JzSbgNKWmLfSg7NqExA5tLMXOwK5myCnAiYoeGPwl+CcyzVP2NjiR8Nk6vL3aPd2Ic7357/3Va4fnD3NmbhydIXJKUbx3MfRfTmBmolY3A88yUCyacb7xwPkLlgnvCvnAQN+7RoYTP2j/kcjsfFc4dUG0lH50FaIu1yst/HA48VzTsncPlUS1Gri9YmRNaW6n2yD3hVvgCiEXL8Lm1tXdL31BuuMZD1wOsMVFke2w7dcJlxFyaH3UY3+W9KH41hCD2iYwExz8hBPFVfAIapXJ88uYcMnWsBOyDLztsOBQMe95EmtlnmznZK6bR89Oj+KH+5Rz/ITRPmvXL8kkHSYM/NvIwAYSiMPLyzqHDPvM8l0yA4I6Vv5rBHj89Svi5ocdXFI6X5pPMyY1T9UfpgagJV9TbPduDw97NahsvzHiXlVD5yBu+PF2Zp+5lfCIvIs3n1ieadXT4BCuJApeE4+fW5AnET4zSOWH4tAuVkMTeOiKIxNUcHZk5HCVI8nxiJ0e1PxnMQRWYI2z0h/5y2FusAfeYE+uF+uxEuWMMiQgd8Hmy4mghn1iEVfdHIVoLxv6ymIlFe2p7dr1uO2V2Jceru+o8WXCVzBREmeALdSn9P+HR8nyeIYekHC/FaLN1dUFg3pncnZ/fTcBs8MzOA3aRtgZOXY0Fsrh8ay5VkY4hzyeeRgS5xEqwjloh0XliPdXyvP7dojwb99XSz7zwJ0CjCY7mavkMXVfw4tJ8klGyqt4ixEEaNakIRaC1NvFT06jBwXW8p+mB/JsRp5vJg7EuRqiELNlHUaMsn3vYPKtX3ONkMF4S6sjHkR0Q7cdp00P6YsKa3vlgIlf3XGFxpRqbk4tTzYRPlHBK8rl9j29CNX1nMY2J8BI33T46eFlFRRtErlFFrgXDf8v1fHs4ulw5teLAj4B5tNxYNT4YJpxSfG5fV/A9cBMzaYw9x/P81+jR23fBH44zzy8Cd33CJ67yhZwGg9+e9fInVJJuYlNhht47poeolygcoHrd483Oj4zz7Z3dk98VmnEpyskYraNJMuO9JHm77ecOfljSc0JBZCJQ9wNO/aeR0ExbNfQwtTM8prOHw41d1e/4baDGJ6Ge3Iz6xyJw5hvFepwYl346aPP7vIB/98N38ULtM0XdKx8KLkSGcHUbM5zG9ISdyj4Wp5AiJYz+G3lddxW92JODc8bP5O68MGLYi8V9XIXGjAqm5B/oiYO8+R0ZaKqVPyLygpngO7Iu5Ef0+hnWRifYKyBfNsr0fSsJP3s5Bhr24PKvgyOgIOLBFJcq19GhpA8vIA87fDRStfpt1jXYwcY1AQO5aXm7nGSc9rJUsjX0+Sp0DIffloMTnjAix7lfovWQj+9pNoDSKQ0+dRMjDgZwwVZ+Wt4a+J4LW5wn5znlPIEKhROTUKHjGSJnpg0NCat3KO3Wss+PNfXUowaRlTJHezKdPkA/0+ep0Mnl+NkXTt+jQi32MtWwQwvXJKJpFZ+OEni9+bNBVWwdoJKnXt9Hu2fzjVTwerDziRQibjaNQyPukShP1OtnaJA+Ex1MkD/RLgsdzB1OzVkwHWPdsfkefopjmeBT0kYShaX4U1QS1e0PWQOhnTocqFSul8fhq+Nh3yQIF7CTiX05GdslkufHgi+ealGZQr/fhldZVcIrsim/UNtxZ4R9k0AMxDTFlrGNU8DmLVEsoicm4VYDXF2bz0azoFPqohax4juDHA1Z3+QLFnxiOSQJV4iQhOmsxYZIqk9QENHmU7XDjmCO+m/0asCd/ng6SQ0xrJDGl62nyxgwSAIeJzirhM5SEnXT2B8IIhw+G7VqtdlM28FwcptdqJCTP4DOSGO9a6s7eT13HNf1WFOczB0v+ORc2GOPFaLlxJXTNRKxkozHPa6XSsHRQ0qPV7/ePk6uQ5x8nF2dchWRQooy2crCVdyFsnM0fi47ad8TqOR3Jw8TcYMT5SMxi/wyXVp4I90Q0Kxk9M8fF794DWFSa/REgFtZqGy0Eprlwndctq6n0BFKk56lfeW04bCH4fEKBRFZff6MtwTqTZ4FBOiM7IVkRa19NJ5ZDqcdzxepcwTUnyzrYEQ7ZpFVx8n8C9Jv6Xocp8raqMk+BAFYoGDZMsW0w8AsHWiWTGwkvekiTdWXfObWNjIrvMd8AnVIvl78obcolwsgBVuehHGNyr64S1RlCSKpp2fxDtHpGdPJonYcb8EWenk+OfOLtnAHi78StjXLb7RnljCuAs3U06yMs+w4Peg6vcC/mE8gMCnwSUe87gQ6ZlVkmTh+Jm4Jj+iUnz45JYzsf1iOT8E2t2OBHi4kUOCTRLK6ERMoVKAafKd/dEmc00HeQqWy7Twp9H9j/bLB8ClMbljOcCMs7HBU4JMOeEG7+SoM2ZoRiOMPh47j+N4A+acnsQxvuf5QKe/H+jqbf+8J1rIAR4H1FNhxo8LnI/42rRZQ0PYN4/hRUjt2PUBRW1gnsjx7qrjWA8t14BkErU2gNRO360CjUuETRwqafDKhvP3ESnRMYxOYEHnrZqOz/cVEeSVSbhsrndIigBAz94Wo8LlHXp4en1nnIYzj2eIcKE7y+XT9Z52dvrE7qYFGF25vE+xRIsVlEIUr8EmXPdbwaiYppEU4y4YLXoGbYrx+hxbaLc991dv1Aoc7sC2Y2+0ZK/hLkHZ6INgp8PkveXc5c0MOlsPaQlEOXNTtdUT/CT36YqS75BA7AbRukteNDDszSdioyScnmMDNuZKIe+gtH63KWkDFiXH8cM9015kVWM9FimyQT85iDrTkgwaw23n/FfF5w1mFAweCNFoz33U90m4A+WSWcm1tvaYe3nKdgXzwzgHuY0UN8ETOW92hBARQWT4veIuatHtAL8fjCSm+DVH1mM0hp3EkZTvlcbG1xUS+xMsASN0DL3mlZU9WAJXjc+c3d42Y2iYNqzDCe6OziWj/2XMcb154T1UiIuExRvUnJFJQQYW1X9r/+bkNtlTc2999/+QL9JrpEUR3Mp0eRLbaslD92AIm3Op2i5lmBFHrVwakH5F16ZRPdpTy+z+rwTXv7x9PS42wjtQUyATkVhTRuhzdhUUL17GjSBL/VIcrKqkVAJWTsUaGGCGaDyncgVYEvgTQyMCnMr5QgT0sO0e9me0v1WErrr3jXUac9f9WBx3OuLsNJfFE46V8sm9Ev16svONFivbLNKxLAok+7jVCHZ20oandLrhBLR2tpFsQJJR0VSW1cFZQLsCnljfqTgaLYIgTwShpDhlAn4RWII+C11CeFppFqXcmMco+2D+F9BWRGRhECPp8VpSDz/bD0PY9fgHIS5rnZ6gjlDXHWbiJg+VaRXYPofI87RvaYUH+SyMENoLV5rOqnGtORcW0iM8kOGrBHkZ2BfJytyaF4gYFzRZV+7BIxA/mPV0+ayXV0T7PXT6Q5vKdMpgL/NQYO+ncKlNwEoGqGapdLoTPKrs7oiafNeX1R6+5dDI214U99angnC3fKhJHYbVNo0ZLMiBWoNfjs3mqGirhbjpEJ7u4BW7bkhrjZC37AZKtVNWDvtyMUofPRoXuu74KvZwKpevPgYt5YQlNu+DH2X6ABbZnIIuL1fkk6+vYNFGdzyBl0ii7z0XrMCzPI4LRA0uolxRA17MfIK6maUR9OMcBVQpVPoNs9KdO3HnOL1HazuKBE0+C3QOTZXPMfoAFtrsgBQ11PnEZDZRDVPhs1CqV+xM9TYlrn64zFLhqsMF6vI7oeS37AeIuT402a9z10Kgyl5DkM/pBiubViXaH4pTMn7bnTsX5ORvXxxusM0X4Aj+xjXaPDKDOZ94l/jA7Uy6R/T5F+Fe8xPjz7c9NkYZ5XKO0/fwfNmkxC2Xj+IiR7wvoJNsE673E3o+dm+Pdi29/rk/eP37+/Hl2e3v7a/nzKWe3bx/vfy6Od9awHo5dWmi53mBViwwT10eySIuZMMxPlocGtyQ09EESAzaL66OFmB3GRZmfLN+KlrO6dt12Hdk2hDSujwofa9xf8W9Btzd7mo3l576DeO8GN+oVWd/+iv+/mITFEP8pio7Y3Vf+G4WQ/wu0R9Np0ruwvv0VDUI8MPFB0Q39DWBCUBdsDWIgj8HKfS4NVAD2qyy4ob+BYL9KA20sOPtVGmijBfRTk8AXBdxczSTwRdGm+1UaFABnP1WDAmiB1hK/2A/MGCA92sTzhcE2RDiFf2HbgCnKe4qbtxhw8RD9sIdl+0atWw+6g7Ln2KKSvYEGCvd7GxgYGBgYGBgYGBgYGBgYGBj8j+M/VHVHnJSL2mMAAAAASUVORK5CYII="
                                alt="MB"
                                id="MB"
                                className="img-fluid"
                            />
                        </div>

                        <div className="mt-3">
                            Chọn ứng dụng Ví điện tử
                        </div>

                        <div className="d-flex mt-2 mb-3">
                            <img style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100px", height: "50px", padding: "5px" }}
                                src="https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png"
                                alt="VCB"
                                id="VCB"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    )}
                </div>
                <div className="mt-3 d-flex justify-content-end align-items-center">
                    <i className="fa-solid fa-xmark mr-1 mt-1"></i>
                    <a>Hủy giao dịch</a>
                </div>
            </div>
            <div className="col-4">
                <h6 className="bg-gray-100 p-3">Thông tin đơn hàng</h6>
                <div className="border p-3 rounded">
                    <p className="mb-2">Đơn vị chấp nhận thanh toán</p>
                    <p className="mb-2"><strong>Beta Cinemas</strong></p>
                    <p className="mb-2">Mã đơn hàng</p>
                    <p className="mb-2"><strong>TN-3743402023021960</strong></p>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="m-0">Số tiền thanh toán</p>
                        <h4 className="m-0 text-primary">60.000 VND</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Payment