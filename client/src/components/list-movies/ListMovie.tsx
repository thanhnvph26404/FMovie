import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FaTicketAlt, FaPlayCircle } from "react-icons/fa";

type Props = {};

const ListMovie = (props: Props) => {
    return (
        <div className="list-movies ">
            {/* nav */}
            <div className="flex justify-center">
                <ul className="list-movies__nav flex justify-center">
                    <li className="nav-item active">PHIM SẮP CHIẾU</li>
                    <li className="nav-item">PHIM ĐANG CHIẾU</li>
                    <li className="nav-item">SUẤT CHIẾU ĐẶC BIỆT</li>
                </ul>
            </div>
            {/* list movie */}
            <div className="list-movie flex ">
                <div className="movie-item">
                    <div className="movie-item__image">
                        <img
                            src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f31%2f400wx633h%2D111233%2D310124%2D12.jpg"
                            alt=""
                        />
                        <div className="movie-item__overlay flex items-center justify-center">
                            <div className="play-icon flex items-center justify-center">
                            <FaPlayCircle className="icon"/>
                        </div>
                        </div>
                    </div>
                    <div className="movie-item__bottom">
                        <Link className="movie-item__title" to={""}>
                            Gặp Lại Chị Bầu
                        </Link>
                        <p>
                            <strong>Thể loại:</strong>Tình cảm, Hài hước
                        </p>
                        <p>
                            <strong>Thời lượng:</strong> 114 phút
                        </p>
                        <button>
                            mua vé
                            <div className="icon-ticket flex items-center justify-center">
                            <FaTicketAlt className="icon"/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="movie-item">
                    <div className="movie-item__image">
                        <img
                            src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f31%2f400wx633h%2D111233%2D310124%2D12.jpg"
                            alt=""
                        />
                        <div className="movie-item__overlay flex items-center justify-center">
                            <div className="play-icon flex items-center justify-center">
                            <FaPlayCircle className="icon"/>
                        </div>
                        </div>
                    </div>
                    <div className="movie-item__bottom">
                        <Link className="movie-item__title" to={""}>
                            Gặp Lại Chị Bầu
                        </Link>
                        <p>
                            <strong>Thể loại:</strong>Tình cảm, Hài hước
                        </p>
                        <p>
                            <strong>Thời lượng:</strong> 114 phút
                        </p>
                        <button>
                            mua vé
                            <div className="icon-ticket flex items-center justify-center">
                            <FaTicketAlt className="icon"/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="movie-item">
                    <div className="movie-item__image">
                        <img
                            src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f31%2f400wx633h%2D111233%2D310124%2D12.jpg"
                            alt=""
                        />
                        <div className="movie-item__overlay flex items-center justify-center">
                            <div className="play-icon flex items-center justify-center">
                            <FaPlayCircle className="icon"/>
                        </div>
                        </div>
                    </div>
                    <div className="movie-item__bottom">
                        <Link className="movie-item__title" to={""}>
                            Gặp Lại Chị Bầu
                        </Link>
                        <p>
                            <strong>Thể loại:</strong>Tình cảm, Hài hước
                        </p>
                        <p>
                            <strong>Thời lượng:</strong> 114 phút
                        </p>
                        <button>
                            mua vé
                            <div className="icon-ticket flex items-center justify-center">
                            <FaTicketAlt className="icon"/>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListMovie;
