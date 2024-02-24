import { NavLink } from 'react-router-dom';
import './RapPage.scss';

const RapPage: React.FC = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 content">
          <h2 className='py-2'>Beta Thai Nguyen</h2>
          <div className="box-content">
            <img className='py-6' src="https://betagroup.vn/Data/Sites/1/News/2573/1.png" alt="" />
            <p className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptatem! Blanditiis consectetur sunt harum nam dolorem repellendus ea exercitationem necessitatibus maiores, molestias dolores tempore molestiae minima aperiam obcaecati iusto provident officia earum repudiandae. Iusto ad molestiae at voluptatibus. Ut vero perspiciatis obcaecati? Fuga facilis, repellat repellendus dolore corrupti ut omnis officiis mollitia vel maiores reprehenderit, perspiciatis delectus suscipit enim corporis ea sunt animi eligendi ipsam quia consectetur culpa! Quas ipsa dicta doloribus corrupti deserunt odio? Necessitatibus amet sequi adipisci laborum exercitationem dolore eius vel quasi! Accusamus harum delectus iusto, quisquam repellendus vel excepturi. Fuga accusantium iusto mollitia ut quis atque!
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 sidebar">
          <h2 className='text-center py-2 fw-bold'>PHIM ĐANG HOT</h2>
          <div className="row box-sidebar">
            <NavLink to="" className="col-lg-6 col-md-6 box-sidebar-item text-decoration-none">
              <img className='w-100 rounded-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-bMs-qZWNOYG94201mk8dcjAGSxc9BPMAw&usqp=CAU" alt="" />
              <p className='text-center'><span className='fw-bold' style={{ fontSize: '22px' }}>Trà</span></p>
            </NavLink>
            <NavLink to="" className="col-lg-6 col-md-6 box-sidebar-item text-decoration-none">
              <img className='w-100 rounded-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-bMs-qZWNOYG94201mk8dcjAGSxc9BPMAw&usqp=CAU" alt="" />
              <p className='text-center'><span className='fw-bold' style={{ fontSize: '22px' }}>Trốn tìm với quỷ</span></p>
            </NavLink>
            <NavLink to="" className="col-lg-6 col-md-6 box-sidebar-item text-decoration-none">
              <img className='w-100 rounded-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-bMs-qZWNOYG94201mk8dcjAGSxc9BPMAw&usqp=CAU" alt="" />
              <p className='text-center'><span className='fw-bold' style={{ fontSize: '22px' }}>Trốn tìm với quỷ</span></p>
            </NavLink>
            <NavLink to="" className="col-lg-6 col-md-6 box-sidebar-item text-decoration-none">
              <img className='w-100 rounded-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-bMs-qZWNOYG94201mk8dcjAGSxc9BPMAw&usqp=CAU" alt="" />
              <p className='text-center'><span className='fw-bold' style={{ fontSize: '22px' }}>Trốn tìm với quỷ</span></p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapPage;
