import React from 'react'

type Props = {}

const SelectPosition = (props: Props, ) => {
    const seats = [];

    // Tạo 100 ghế bán vé
    for (let i = 1; i <= 200; i++) {
      seats.push(
        <div className="seat-cell seat-used seat-for-way seat-normal" key={i}>
          {`J${i}`}
        </div>
      );
    }
  return (
    <>
     <div className="col-lg-8 col-md-8 col-12">
                <div className="blink py-2" style={{ textAlign: 'center', color: 'red', marginBottom: '10px', backgroundColor: 'rgb(243, 230, 192)' }}>
                    Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 18  tuổi.
                </div>
                <div className="row note-seat-status">
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span className="note-seat-status-label">Ghế trống</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-select-normal.png" />
                        <span className="note-seat-status-label">Ghế đang chọn</span>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-select-normal.png" />
                        <span className="note-seat-status-label">Ghế đang được giữ</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-buy-normal.png" />
                        <span className="note-seat-status-label">Ghế đã bán</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-set-normal.png" />
                        <span className="note-seat-status-label">Ghế đặt trước</span>
                    </div>
                </div>
                <div className='py-4'>
                    <div className="seat-diagram">
                        <img width="100%" height="100%" src="https://www.betacinemas.vn/Assets/global/img/booking/ic-screen.png" alt="" className="img-responsive" />
                    </div>
                    <div className="check-show">
                        <div className="full-width">
                            {seats}
                        </div>
                    </div>
                </div>
                <div className='row seat-type-panel'>
                    <div className="col-lg-2">
                        <img className="seat-type-image" style={{ width: '100%', maxWidth: '50px' }} src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span>Ghế thường</span>
                    </div>
                    <div className="col-lg-2">
                        <img className="seat-type-image" style={{ width: '100%', maxWidth: '50px' }} src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span>Ghế vip</span>
                    </div>
                    <div className="col-lg-2">
                        <img className="seat-type-image" style={{ width: '100%', maxWidth: '50px' }} src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span>Ghế đôi</span>
                    </div>
                    <div className="col-lg-2">
                        <span>Tổng tiền</span>
                    </div>
                    <div className="col-lg-3">
                        <span>Thời gian còn lại</span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SelectPosition