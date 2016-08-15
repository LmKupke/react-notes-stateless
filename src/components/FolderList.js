import React from 'react';
import Folder from './Folder'

const FolderList = props => {
  let folders = props.folders.map(folder => {
    return (
      <button onClick={event=> alert('Folder Created') }>
      <Folder
        key={folder.id}
        name={folder.name}
        notes={folder.notes}
      />
    </button>
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
