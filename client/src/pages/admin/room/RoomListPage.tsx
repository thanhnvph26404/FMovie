import { DeleteIcon, EditIcon } from "lucide-react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
    useDeleteRoomMutation,
    useGetRoomListQuery,
} from "@/services/rooms/rooms.services";
import { deleteRoom, loadRoomList } from "@/services/rooms/roomsSlices";
import { toastError, toastSuccess } from "@/hook/Toast";

const RoomsPage = () => {

    const dispatch = useAppDispatch();
    const roomState = useAppSelector(
        (state) => state.rooms.rooms
    );

    const tHead = ["STT", "Rạp phim", "Số lượng", "Tình Trạng", ""];

    const {
        data: room,
        isLoading: isRoomListLoading,
        isSuccess: isRoomListSuccess,
    } = useGetRoomListQuery([]);

    const [deleteRoomApi, { isError: isDeleteRoomError }] =
    useDeleteRoomMutation();

    useEffect(() => {
        dispatch(loadRoomList(room?.data));
    }, [isRoomListSuccess]);


    const handleDelete = async (id: string | number) => {
        try {
          await deleteRoomApi(id).unwrap().then(() => {
            dispatch(deleteRoom(id))
          }).then(() => {
            toastSuccess('Xóa phòng chiếu thành công')
          })
        } catch (error) {
          toastError('Xóa phòng chiếu thất bại')
        }
      };
    return (
        <div>
            <div className="mx-auto mt-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                                Danh sách phòng chiếu
                            </h1>
                        </div>
                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button
                                type="button"
                                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Link
                                    to="/admin/room/add"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    Thêm phòng chiếu
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flow-root overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <table className="w-full text-left ">
                        <thead className="bg-white">
                            <tr className="border-t border-b">
                                {tHead.map((item, index) => (
                                    <th
                                        key={index}
                                        scope="col"
                                        className=" py-3 px-3 text-left text-base font-semibold text-gray-900"
                                    >
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {roomState?.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-3 text-base font-medium text-gray-900">
                                        {index + 1}
                                    </td>
                                    <td className="hidden px-3 py-2 text-base text-gray-500 sm:table-cell">
                                        {item?.id_cinema}
                                    </td>
                                    <td className="hidden px-3 py-2 text-base text-gray-500 sm:table-cell">
                                        {item?.quantity}
                                    </td>
                                    <td className="relative py-2 pl-3 text-right text-base font-medium flex">
                                        <Link
                                            to={`/admin/rooms/edit/${item?.id}`}
                                            className="text-indigo-600 hover:text-indigo-900  p-2 mr-5 cursor-pointer"
                                        >
                                            <EditIcon />
                                        </Link>
                                        <div
                                            onClick={() =>
                                                handleDelete(item.id!)
                                            }
                                            className="p-2 text-red-400 cursor-pointer"
                                        >
                                            <DeleteIcon />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RoomsPage;
