type WrapperProps = {
    className?: string
    children: React.ReactNode
  }
  const Wrapper: React.FC<WrapperProps> = ({ className, children, ...props }) => {
    return (
      <div
        className={`flex flex-col justify-center w-full ${className})`}
        {...props}
      >
        {children}
      </div>
    )
  }
  export default Wrapper