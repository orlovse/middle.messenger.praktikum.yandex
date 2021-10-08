export type SignupDataType = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SigninDataType = {
  login: string;
  password: string;
};

export type UsersForChatType = {
  users: number[];
  chatId: number;
};

export type ProfileDataType = Omit<SignupDataType, 'password'> & {
  display_name: string;
};

export type PasswordDataType = {
  oldPassword: string;
  newPassword: string;
};

export type ConnectSocketDataType = {
  userId: number;
  chatId: number;
  token: string;
};
