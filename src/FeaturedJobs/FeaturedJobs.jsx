import { useEffect, useState } from "react"
import Job from "../Job/Job"
import { data } from "autoprefixer"

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    // this is not teh best way to load show all data.
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-3xl">Featured Jobs {jobs.length}</h2>
            <p className="text-center">This is featured jobs</p>
            <div className="grid grid-cols-2 gap-4">
                {jobs.slice(0, dataLength).map((job) =><Job job={job} key={job.id}></Job>)}
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
            <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See all jobs</button>
            </div>
        </div>
    )
}

export default FeaturedJobs