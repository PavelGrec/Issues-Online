import './Header.css'

//start
export const Header = () => {
  return (
    <header className='flexwidth'>
        <div className="width between x">
            <div className="left">
                <input id='logo' type="text" placeholder='ISSUES...' autoFocus/>
            </div>
            <div className="right flex x">
                <div className="portrait"></div>
                <p className='white'>Mr. Name</p>
            </div>
        </div>
    </header>
  )
}
