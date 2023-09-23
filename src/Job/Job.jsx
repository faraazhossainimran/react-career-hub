import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({ job }) => {
  console.log(job);
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt={`logo of ${company_name}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="mr-4 px-5 py-2 font-extrabold border rounded border-[#7E70FE] text-[#7E70FE]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E70FE] text-[#7E70FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-6">
            <div>
              <h2 className="flex">
                <MdLocationOn className="text-2xl" />
                <p className="text-xl">{location}</p>
              </h2>
            </div>
            <div>
              <h2 className="flex">
                <AiOutlineDollar className="text-2xl" />
                <p className="text-xl">{salary}</p>
              </h2>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
