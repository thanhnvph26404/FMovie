import React, { useState } from 'react'

type Props = {}

const SelectPosition = (props: Props, ) => {
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const toggleSeat = (seatNumber: number) => {
      // Kiểm tra xem ghế đã được chọn chưa
      const seatIndex = selectedSeats.indexOf(seatNumber);
      if (seatIndex === -1) {
        // Nếu chưa được chọn, thêm vào mảng
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        // Nếu đã được chọn, loại bỏ khỏi mảng
        setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
      }
    };
  
    const seats = [];
    for (let i = 1; i <= 200; i++) {
      const isSelected = selectedSeats.includes(i);
      seats.push(
        <div
          style={{ cursor: 'pointer', backgroundImage: isSelected ? 'url(https://www.betacinemas.vn/Assets/global/img/booking/seat-select-normal.png)' : 'url(https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png)' }}
          className={`seat-cell seat-used seat-for-way seat-normal ${isSelected ? 'selected' : ''}`}
          key={i}
          onClick={() => toggleSeat(i)}
        >
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