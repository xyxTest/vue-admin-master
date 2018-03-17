import Mock from 'mockjs';
const LoginUsers = [

  {
    id: 1,
    username: 'sss',
    password: '123456',
    avatar: 'http://www.jasobim.com/files/userIcons//1b60b79c54e4e1593fa1a39e97f9a7ca.gif',
    name: '一条小鱼游啊游'
  },
  {
      id: 2,
      username: 'admin',
      password: '123456',
      avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
      name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
