export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export namespace Login {
  export interface params {
    userName: string;
    userPwd: string;
  }
  export interface result {
    token: string;
    user: {
      _id: string;
      userId: string;
      userName: string;
      userEmail: string;
      deptId: string;
      state: string;
      mobile: string;
      job: string;
      role: string;
      roleList: string;
      createId: string;
      deptName: string;
      userImg: string;
      createdAt: string;
    };
  }
}
