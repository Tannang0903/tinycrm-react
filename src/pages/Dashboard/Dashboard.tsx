import LineChart from 'src/components/LineChart'

const Dashboard = () => {
  return (
    <div>
      <div className='flex pt-[16px] pb-[40px]'>
        <h2 className='text-[24px] text-gray-900 font-bold'>Dashboard</h2>
      </div>
      <div className='grid grid-cols-2 xl:grid-cols-4 gap-8'>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-1 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <p className='font-semibold text-gray-600 text-[14px] '>Open Leads</p>
          <p className='text-[32px]'>24</p>
        </div>
        <div className='col-span-2 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <LineChart />
        </div>
        <div className='col-span-2 p-6 bg-white rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <LineChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
