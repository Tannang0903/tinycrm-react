import Header from 'src/components/Header'
import SideNav from 'src/components/SideNav'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className='flex flex-1'>
        <SideNav />
        <div className='flex-1 px-8 pt-6 pb-12 bg-[#f3f4f6]'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
