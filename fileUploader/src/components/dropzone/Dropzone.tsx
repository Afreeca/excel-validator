import React, { CSSProperties, useCallback, useMemo } from 'react'
import {useDropzone} from 'react-dropzone'
import { MAX_FILE_SIZE, convertExcelToJson, validateHeadersPresence } from 'utils';

const styles:{ [key: string]: CSSProperties } = {
    baseStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        fontSize: "20px",
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#dedede',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    },
        
    activeStyle: {
        borderColor: '#2196f3'
    },
        
    acceptStyle: {
        borderColor: '#00e676'
    },
        
    rejectStyle: {
        borderColor: '#ff1744'
    },
}
  
interface Props {
    setInfo: (arg:{
      message: string,
      status: string,
      data: {}
    }) => void;
}

export const Dropzone: React.FC<Props> = ({setInfo}) => {

    const onDropRejected = useCallback(() => {
        setInfo({message:"File format validation failed", status:"Failed" ,data:{}});
    },[setInfo])

    const onDrop = useCallback((file: File[]) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (event) => {
        
       let bufferArray = event.target?.result;
      console.log(bufferArray);
      
        const dataJson = convertExcelToJson(bufferArray);

        const headerValidResult = validateHeadersPresence(dataJson.headers);

        if(headerValidResult.length === 0)
          setInfo({message:"Validation Successful", status:"successful", data:headerValidResult})
        else
          setInfo({message:"You file can't be uploaded because it contains errors", status:"failed", data:headerValidResult})
      }
      
      reader.readAsArrayBuffer(file[0])
    
  }, [setInfo])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
    } = useDropzone({
      onDrop,
      onDropRejected,
      multiple: false,
      minSize: 0,
      maxSize: MAX_FILE_SIZE,
      accept: "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })

    const style = useMemo(() => ({
      ...styles.baseStyle,
      ...(isDragActive ? styles.activeStyle : {}),
      ...(isDragAccept ? styles.acceptStyle : {}),
      ...(isDragReject ? styles.rejectStyle : {})
    }), [
      isDragActive,
      isDragReject,
      isDragAccept
    ]);
    
  return (
    <div {...getRootProps({style})}>
      <input {...getInputProps()} />
        {!isDragActive && (<p>Click here or drop a file to upload!</p>)}
        {isDragActive && !isDragReject && (<p>Drop the file!</p>)}
        {isDragReject && <p>File type not supported, sorry</p>}
    </div>
  )
}
