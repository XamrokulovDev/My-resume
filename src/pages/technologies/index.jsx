import { motion } from 'framer-motion';
import { technology } from "../../../data";
import Item from 'antd/es/list/Item';

const Technologies = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container h-[72vh] bg-white rounded-2xl overflow-y-scroll p-5"
    >
      <div className="my-5">
        <h1 className='text-2xl font-bold text-center'>Technologies I use</h1>
        <div className="">
          <h1 className='text-lg font-semibold mt-4'><span className='text-xl font-bold'>Frontend</span> - Here, I have shared the knowledge I gained in the frontend field.</h1>
          <div className="flex flex-col gap-3 mt-3">
            {
              technology?.map((item)=>(
                item.direction === "frontend" && (
                  <div className=''>
                    <h1 className='text-lg font-medium'><span className='font-bold'>{item.name}</span> - I know it at a <span className='font-bold'>{item.level}</span> level.</h1>
                  </div>
                )
              ))
            }
          </div>
        </div>
        <div className="my-5">
          <h1 className='text-lg font-semibold my-5'><span className='text-xl font-bold'>Backend</span> - Here, I have shared the knowledge I gained in the backend field.</h1>
          <div className="flex flex-col gap-3 mt-3">
            {
              technology?.map((item)=>(
                item.direction === "backend" && (
                  <div className=''>
                    <h1 className='text-lg font-medium'><span className='font-bold'>{item.name}</span> - I know it at a <span className='font-bold'>{item.level}</span> level.</h1>
                  </div>
                )
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Technologies;