import Link from "next/link";

export default function Login() {
  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <div className="hero-content block ">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-5xl w-[300px] font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0  w-[400px] shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                defaultValue={"2kS9Z@example.com"}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                defaultValue={"123456"}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link href="/home" className="w-full">
                <button className="btn btn-primary w-full">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
