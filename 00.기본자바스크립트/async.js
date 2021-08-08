function findAndSaveUser(Users) {
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.findOne({ gender: 'm'});
    })
    .then((users) => {

    })
    .catch((err) => {
        console.error(err);
    });
}        //  프로미스 사용한 코드


async function findAndSaveUser(Users) {
    try{
        let user = await Users. findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });

    } catch (error) {
        console.error(error);
    }
}        // async function으로 교체한 후, 프로미스 앞에 await 붙였지만 에러처리는 따로 해줘야 함

