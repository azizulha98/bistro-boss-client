import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import loginImg from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Singin = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
              })} placeholder="password" className="input input-bordered" />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password  is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">password 6 caricature is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">password have 1 uppercase 1 lowercase 1 spinal caricature is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Logout" />
            </div>
            <p><small>Already have an account<Link to='/login' className='text-yellow-700 underline'> Please Login</Link></small></p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Singin;


