
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return (
    <>
      <header>
        <div className='text-center bg-neutral-300 flex justify-between items-center px-2 py-1'>
          <Show when="signed-out">
            <button className='rounded-full w-8 h-8 bg-white text-white p-1'></button>
            
            <div className="flex gap-3">
              <span className='font-bold '><SignInButton /></span>
              <span className='font-bold'><SignUpButton/></span>
            </div>
            <div>
            <h1 className='text-center mt-20 font-semibold text-xl'>Login to access the content</h1>
            </div>
          </Show>

          <Show when="signed-in">
          <UserButton />
          <h2 className='font-semibold'>Welcome to Clerk Authentication</h2>
          </Show>
        </div>
        
        <Show when="signed-in">
          <h1 className='text-center mt-10 text-xl'>This is your Content ! 😄✌️</h1>
        </Show>
        
      </header>
    </>
  )
}

export default App