
sendbtn.onclick = async () => {
    event.preventDefault()
    
    let formdata = new FormData()

    for(let file of inputfile1.files) {
        formdata.append('files', file)
    }
    
    let response = await request('/file/multiple', 'POST', formdata)

    let linkk = await response.link

    let message = await response.message
    if(message) {
        return alert(message)
    }
    
    if(linkk.split('.')[linkk.split('.').length - 1].toLowerCase() == 'pdf') {

        let fileId = await response.fileId
        let numpagess = await response.numpages
        let fileSize = await response.fileSize

        id.textContent = 'File id: ' + fileId
        numpages.textContent = 'Number of pages: ' + numpagess
        link.setAttribute('href', backendApi + linkk)
        size.textContent = 'Size of file: ' + fileSize

        objectfile.data = backendApi + linkk
    }
    else if(linkk.split('.')[linkk.split('.').length - 1].toLowerCase() == 'xls' || linkk.split('.')[linkk.split('.').length - 1].toLowerCase() == 'xlsx') {
        
        let fileId = await response.fileId
        let rows = await response.rows
        let fileSize = await response.fileSize

        id.textContent = 'File id: ' + fileId
        numpages.textContent = 'Number of rows: ' + rows
        link.setAttribute('href', backendApi + linkk)
        size.textContent = 'Size of file: ' + fileSize
        
        objectfile.data = backendApi + linkk
    }
    
}