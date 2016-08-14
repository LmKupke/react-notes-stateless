import React from 'react';
import Folder from './Folder'

const FolderList = props => {
  let folders = props.folders.map(folder => {
    return (
      <Folder
        key={folder.id}
        name={folder.name}
        notes={folder.notes}
        />
    )
  })
}

export default FolderList;
