export enum UserTypes {
    'CHANGE_USERNAME' = '@types/CHANGE_USERNAME',
    'CHANGE_NAME' = '@types/CHANGE_NAME'
}
  
export interface UserData {
    username: string,
    name: string
}