import React, {useState} from 'react'

export default function ChatSettings(props) {
    const [open, setOpen] = useState(false)
    return (
          <div className="blocks-1">
            <div className="settings">
              <button className="btn-nobg" onClick={() => setOpen(!open)}>
                <i className="fa fa-cog"></i>
              </button>
              {open && props.children}
            </div>
          </div>
    )
}
