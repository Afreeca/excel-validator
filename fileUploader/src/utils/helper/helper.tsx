import * as XLSX from 'xlsx';

interface Result {
    headers: string[],
    records: object
}

export const convertExcelToJson = (file: string | ArrayBuffer | null | undefined): Result =>  {
    let workbook = XLSX.read(file, {type: "buffer"})
    const worksheet_name = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheet_name];
    const headers = getHeaders(worksheet);
    let records = XLSX.utils.sheet_to_json(worksheet)
    
    return {
        headers: headers,
        records: records
    }
}


export const getHeaders = (sheet: { [x: string]: any; }) => {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for(C = range.s.c; C <= range.e.c; ++C) {
        var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */
        var hdr="";

        if(cell && cell.t) 
            hdr = XLSX.utils.format_cell(cell).replace(/\s+/g, '');

        if(hdr)
            headers.push(hdr);
    }
    return headers;
}