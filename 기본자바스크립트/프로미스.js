// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if(conditioń) {
//         resolve('성공');
//     } else {
//         reject('실패'); 
//     }
// });

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('무조건');
//     });



// promise 
//     .then((message) => {
//         return new Promise((res, rej) => {
//             resolve(message);
//         });
//     })
//     .then((message2) => {
//         console.log(message2);
//         return new Promise((res, rej) => {
//             resolve(message2);
//         });
//     })
//     .then((message3) => {
//         console.log(message3);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// function findAndSaveUser(Users) {
//     Users.findOne({})
//     .then((user) => {
//         user.name = 'zero';
//         return user.save();
//     })
//     .then((user) => {
//         return Users.findOne({ gender: 'm' });
//     })
//     .then((user) => {

//     })
//     .catch(err => {
//         console.error(err);
//     });
// }


const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });