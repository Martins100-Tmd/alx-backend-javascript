import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  const promise3 = Promise.allSettled([promise1, promise2]);
  const test = await promise3.then((results) => results);

  const message = test[1].reason;
  delete (test[1].reason);
  test[1].value = message.toString();
  return test;
}
