import React from 'react';
import Folder from './Folder'

const FolderList = props => {
  let folders = props.folders.map(folder => {
    return (
      <li id={props.id}>
        <button onClick={event=> alert('Folder Clicked') }>
        <Folder
          key={folder.id}
          name={folder.name}
          notes={folder.notes}
        />
      </button>
    </li>
    );
  });
  return (
    <div className="folderlists">
      <ul>
        {folders}
      </ul>
    </div>
  )
};

export default FolderList;
