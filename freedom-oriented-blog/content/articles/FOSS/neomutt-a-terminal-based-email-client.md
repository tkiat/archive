Title: Neomutt: A Terminal-Based Email Client
Date: 2021-01-08
Modified: 2021-01-08
Tags: FOSS
Slug: neomutt-a-terminal-based-email-client
Authors: Theerawat Kiatdarakun

At some point, I took a glance at the Linux kernel development so I dipped my toe in the water by reading the mailing list archive. I imagined being flooded with stream of emails and then realized the limitation of Tutanota email that I was using. They didn't support IMAP and they only provide their desktop client - not the most compact one. A terminal-based email client like Mutt is, in my opinion, more compact and efficient. An app like Mutt bundled with some useful patches, i.e. Neomutt (a fork of Mutt), is certainly better.

### The Setup

The setup was not automatic unlike Mozilla Thunderbird and I was overwhelmed at first by how IMAP and SMTP work in general. Basically, the email is sent via SMTP protocol whereas IMAP and POP protocols deal with how emails are retrieved from the server. When you click an email message, IMAP keeps that on the server while POP usually deletes from the server. I opted for IMAP which is a more popular protocol. I could use external IMAP and SMTP server/utilities but Neomutt itself supports those so I decided to manually configure IMAP and SMTP settings in neomuttrc. The values such as the port number and the server name are provided by the email provider, alternatively, you can try to login with credentials in an automatic email client like Thunderbird and after a successful login look for the port number and the server name.

### My Setting for the Trial Posteo Account (in neomuttrc)

```text
set my_email=johndonut751@posteo.net

set folder=imap://$my_email@posteo.de:143
set from=$my_email
set imap_pass=\`pass show t/posteo`
set imap_user=$my_email
set smtp_pass=`pass show t/posteo`
set smtp_url=smtp://$my_email@posteo.de:587

set postponed=+Drafts
set record=+Sent
set spoolfile=+Inbox
mailboxes = +Inbox

set ssl_starttls=yes
```

### Integration
Mutt integrates nicely with an external password manager, in my case, password-store as you can see in the 'pass show' command above. This doesn't expose your email to the public so that you can backup this configuration in your public Git repository. At first, the authentication was incorrect, I debugged for like an hour only to find that the password itself has a dollar sign interpreted as a variable by Mutt so I changed my password to contain only alphanumeric characters (a lame solution for sure but it worked).

Neomutt can also switch between multiple accounts but for that, you need account-hook and folder-hook. I am not going to cover it here. The external theme is available just do Google search yourself. Lastly, Neomutt doesn't render HTML by default. You need to create a file (one possible choice is ~/.mailcap) and force Mutt to convert the HTML message body to a file, append the file name with .html, and open it using an external program through the code below.

```text
# put this to ~/.mailcap
text/html; qutebrowser %s; nametemplate=%s.html;
# put this to neomuttrc for streamlined experience
auto_view text/html
```
