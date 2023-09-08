interface Props {
  children?: React.ReactNode
}

const LoginLayout = ({ children }: Props) => {
  return <div className='flex justify-center items-center h-screen'>{children}</div>
}

export default LoginLayout
