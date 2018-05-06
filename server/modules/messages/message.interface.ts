export interface Message {
  readonly userId?: string;
  readonly message: string;
  readonly nickname: string;
  readonly created?: any;
}