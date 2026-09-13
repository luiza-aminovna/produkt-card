import { comments } from "./comments.js"; // 6 задание

console.log(comments);



const numbers = [1,2,3,4,5,6,7,8,9,10]; // 2 задание

const result = numbers.filter(number => number >= 5);

console.log(result);



const furniture = ['Стол','стул','диван','кресло']; // 3 заание

const newArray = furniture.includes('стул');

console.log(newArray);



function reverseArray(array) { // 4 задание
  return array.reverse();
}
console.log(reverseArray(furniture));
console.log(reverseArray(numbers));



const filteredComments = comments.filter(comment => // 7 задание
  comment.email.includes(".com") // includes проверяем есть ли нужный текст
);

console.log(filteredComments);



const updatedUsers = comments.map(user => { // 8 задание
  if (user.id <= 5) {
    user.postId = 2;
  } else {
    user.postId = 1;
  }
  return user;
});

console.log(updatedUsers);




const userWithIdAndName = comments.map(user => { // 9 задание
  return {
    id: user.id,
    name: user.name
  };
});

console.log(userWithIdAndName);



const updateComments = comments.map(comment => { // 10 задание
  return {
    ...comment, 
    isInvalid: comment.body.length > 180 ? true : false
  }
});

console.log(updateComments);


const emails = comments.reduce((acc, comment) => { // 11 задани
  acc.push(comment.email);
  return acc;
}, []);

console.log(emails);



const emails2 = comments.map(comment => {
  return comment.email;
});

console.log(emails2);



const string = comments.toString(); // 12 задание

console.log(string);


const string2 = comments.join("-");

console.log(string2);