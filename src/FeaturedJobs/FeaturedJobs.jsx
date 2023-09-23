import { useEffect, useState } from "react"
import Job from "../Job/Job"

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
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
                {jobs.map((job) =><Job job={job} key={job.id}></Job>)}
            </div>
        </div>
    )
}

export default FeaturedJobs