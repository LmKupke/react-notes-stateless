import React from 'react';

const FolderList = props => {
  let folders = props.folders.map(folder => {
    return (
      <Folder
        key=folder.id,
        name=folder.name,
        notes=folder.notes
        />


    )
  })
}


export default FolderList;
