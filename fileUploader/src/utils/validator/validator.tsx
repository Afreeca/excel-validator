import { ALLOWED_HEADERS } from 'utils';

type Records = {
    File_ID: string;
    Aminet_ID: string;
    BR: string; 
    CA: string;
    ACO_Status: string,
    ACO_Email: string,
    Caf_Competition_Code: string,
}

type H_Result = {
    field: string;
    message: string;
}

type R_Result = {
    User: string;
    FileName: string;
    TotalRow: string;
    ValidRecords: string;
    FailingRecords: string;
    Status: object;
    DateTimeStamp: string;
}

type InvalidRecord = {
    FileID: string;
    AminetID: string;
    message: string;
}

export const validateRecords = (records: Records[]): R_Result => {
    // iterate the records and call isValidRecord for individual validation

    return {
        User: "",
        FileName: "",
        TotalRow: "",
        ValidRecords: "",
        FailingRecords: "",
        Status: {},
        DateTimeStamp: "",
    }
}

export const isValidHeader = (header: string): boolean => ALLOWED_HEADERS.includes(header);

export const validateHeadersPresence = (headers: string[]): H_Result[] => {
    const validationArray = ALLOWED_HEADERS.filter(allowedHeader => !headers.includes(allowedHeader))
    .map(allowedHeader => {
        return {field: allowedHeader, message: "missing"}
    });
    
    headers.forEach(allowedHeader => {
        if(!ALLOWED_HEADERS.includes(allowedHeader)){
            validationArray.push({field: allowedHeader, message: "unknow column"})
        }
    })

    return validationArray;

}

export const isValidRecord = (obj: Records): InvalidRecord[] | undefined => {

    let invalidRecords: InvalidRecord[] = [];

    if (!AC1_rule(obj.ACO_Email)) {
        invalidRecords.push({ 
             FileID: "11111",
             AminetID: "Asasas",
             message: `obj.Foo must be of type string but was`
        })
    }

    if (!AC2_rule(obj.ACO_Email)) {
        invalidRecords.push({ 
             FileID: "11111",
             AminetID: "Asasas",
             message: `obj.Foo must be of type string but was`
        })
    }
    return invalidRecords;
}


    
    const AC1_rule = (aco_status: string): boolean | void =>{
        return aco_status === "" 
    }

    const AC2_rule = (aco_status: string): boolean =>{
        return aco_status === "" 
    }

    const AC3_rule = (aco_status: string): boolean =>{
        return aco_status === "" 
    }

    const AC4_rule = (aco_status: string): boolean =>{
        return aco_status === "" 
    }

    const AC5_rule = (aco_status: string): boolean =>{
        return aco_status === "" 
    }
