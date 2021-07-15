Title: Salt Your Passwords
Date: 2020-12-12
Modified: 2020-12-12
Tags: Personal
Slug: salt-your-passwords
Authors: Theerawat Kiatdarakun

Salting is the act of putting some random characters into a password. This puts another protective layer to all of your passwords, a cracker has to know both your password and salt. You might not find the merit of salting if you use one or a few passwords across the web but salt is actually a very nice addition to a password manager where you put only one part to the password manager and another salt part remains only in your head or somewhere else. If you are paranoid about putting everything into some companies' servers without actually understanding and knowing how they are encrypted, salting is a way to go.

### A Little Caveat

1. Some password manager web extensions have access to your clipboard and the final password after clicking 'submit'. So think carefully before copy as they might know the salt part easily. Being open-source doesn't help much if a malicious update can happen. I deal with this part by using the desktop version only to sandbox the permission.

2. Some websites truncate the password when it is more than the maximum length and accepts it without notifying you. A salt is therefore lost in the process. After registration or changing the password, it is important to check that password without salt doesn't work while the same password with salt works.

Bonus: I don't recommend using a dollar sign in your password since it has special meaning in some applications like Mutt.
