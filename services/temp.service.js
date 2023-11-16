import { BaseError } from '../config/error.js';
import { status } from '../config/response.status.js';
import {flagResponseDTO} from '../dtos/temp.response.dto.js';

export const getTempData = () =>{
    return flagResponseDTO("This is TEST >.0");
}

export function CheckFlag(flag){
    if(flag==1)
        throw new BaseError(status.BAD_REQUEST);
    else
        return flagResponseDTO(flag);
}