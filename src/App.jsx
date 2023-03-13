import React, { useState, useEffect } from 'react';;
import Draggable from 'react-draggable';
import cx from 'classnames';
import RefreshIcon from '@mui/icons-material/Refresh';
import Popover from '@mui/material/Popover';
import './App.css';
import Command from './components/command/Command';
import { getCommands } from './api/spyder';
import { checkParent } from './utils/dom/document';

export default function App() {
  const [openForm, toggleForm] = React.useState(false);
  const [commands, setCommands] = React.useState([]);
  const [element, setElement] = useState(null);
  const isLocal = location.href.includes('localhost');

  const initiateMouseActions  = () => {
    document.addEventListener('mouseout', (e) => {
      const { target } = e;
      if (!checkParent(target) && !openForm) {
        target.style.outline = 'none';
        target.removeAttribute('beacon-marker');
      }
    });
    document.addEventListener('mouseover', (e) => {
        const { target } = e;
        if (!checkParent(target) && !openForm) {
          target.style.outline = '1px solid black';
          target.setAttribute('beacon-marker', 'marker')
        }
    });

    document.addEventListener('click', (e) => {
      const { target } = e;
      if (!checkParent(target) && !openForm) {
        const isExists = target.getAttribute('beacon-marker');
        e.stopPropagation();
        e.preventDefault();
        toggleForm(true);
        setElement(target);
        console.log(isExists);
      }
  });
  }

  useEffect(() => {
    (async () => {
      const c = await getCommands();
      setCommands(c);
    })();
    initiateMouseActions();
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  const refresh = () => {
    (async () => {
      const c = await getCommands();
      setCommands(c);
    })();
  };

  return (
      <>
        {isLocal && (
          <div className="content">
            <div className="icon" role="presentation" alt=""></div>
            <h1>You’ve gone Incognito</h1>
            <p id="subtitle">
              <span>Now you can browse privately, and other people who use this device won’t see your activity. However, downloads, bookmarks and reading list items will be saved.</span>
              <a className="learn-more-button" href="https://support.google.com/chrome/?p=incognito" aria-label="Learn more about Incognito">Learn more</a>
            </p>
            <div id="bulletpoints-wrapper">
              <div className="bulletpoints first">Chrome <em>won’t save</em> the following information:
                    <ul>
                      <li>Your browsing history
                      </li><li>Cookies and site data
                      </li><li>Information entered in forms
                    </li></ul></div>
              <div className="bulletpoints">Your activity <em>might still be visible</em> to:
                  <ul>
                    <li>Websites that you visit
                    </li><li>Your employer or school
                    </li><li>Your Internet service provider
                  </li></ul></div>
            </div>
            <div id="cookie-controls">
              <div id="cookie-controls-description">
                <em>Block third-party cookies</em>
                When on, sites can't use cookies that track you across the web. Features on some sites may break.
              </div>
              <cr-tooltip-icon id="cookie-controls-tooltip-icon" icon-aria-label="Block third-party cookies" icon-className="" tooltip-text="This setting is controlled in Cookie settings." role="link" hidden="">
              </cr-tooltip-icon>
              <cr-toggle id="cookie-controls-toggle" aria-label="Block third-party cookies" dark="" aria-pressed="false" tabindex="0" aria-disabled="false" role="button"></cr-toggle>
            </div>
            <a className="learn-more-button" href="https://support.google.com/chrome/?p=incognito" aria-label="Learn more about Incognito">Learn more</a>
          </div>
        )}
        <Draggable
          handle=".handle"
        >
          <div className={cx('editor')} id="beacon-editor">
            <div className={cx('handle', 'center')}>
              <div className='label'>Commands</div>
              <RefreshIcon onClick={refresh} />
            </div>
            <div className='commands'>
              {commands.map(x => (<Command key={x._id} command={x}/>))}
            </div>
          </div>
        </Draggable>
        {openForm && (
          <Popover
            id="popover"
            open={true}
            anchorEl={element}
            onClose={() => {
              toggleForm(false);
              setElement(null);
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            The content of the Popover.
          </Popover>
        )}
      </>
  );
}