import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useTansack from "../../Hooks/useTansack";
import Payment from "./Payment";

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const {title,image,date,slots,short_description, _id,time,price} = details || {}
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
const axiosSecure = useAxiosSecure();
const [,refetch] = useTansack();

    const handleSlot = slot =>{
        if(user && user.email){
         console.log(slot, user.email);
         const slotItem = {
            slotId:_id,
            email: user.email,
            title,date,time, price
         }
         axiosSecure.post('/slots',slotItem)
         .then(res=>
            {console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your appontment has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
  })
    }
        // console.log(slot, user.email);
        else{
            Swal.fire({
                title: "you are not logged in ",
                text: "please login to book a appointment",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state:{from:location}})
                }
              }); 
        }

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-auto mb-5 mt-5">
  <figure><img className="w-1/2" src={image}alt={id}/></figure>
  <div className="card-body">
  <h2 className="card-title text-2xl font-semibold">{title}</h2>
    <p>{short_description}</p>
    <p >Date:<span className="bg-pink-400 rounded-sm p-1 font-bold">{date}</span></p>
    <p>Slots: <span className="bg-pink-400 rounded-sm p-1 font-bold">{slots}</span></p>
    <p>Time: <span className="bg-pink-400 rounded-sm p-1 font-bold">{time}</span></p>
    <p>Price: <span className="bg-pink-400 rounded-sm p-1 font-bold">{price}</span></p>

   
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>BOOK NOW</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the Cancel button to close</p>
    <p><Payment></Payment></p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Cancel</button>
        <button  onClick={()=>handleSlot(details)} className="btn">Confirm</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
        </div>
    );
};

export default Details;