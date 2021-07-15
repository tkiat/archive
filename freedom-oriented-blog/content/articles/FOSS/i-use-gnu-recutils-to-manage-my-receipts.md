Title: I Use GNU Recutils to Manage My Receipts
Date: 2021-01-24
Modified: 2021-01-24
Tags: FOSS
Slug: i-use-gnu-recutils-to-manage-my-receipts
Authors: Theerawat Kiatdarakun

A popular database like SQLite though it is very simple, it is not human-readable. This means in the absence of SQLite installed you cannot make use of the database at all. I would like to introduce Gnu Recutils, a human-readable alternative. It groups the attributes of each entry together and separates each entry by space. Like a typical database, it supports command-line commands to add, remove, or update an entry. Also like other databases, you can also query for entries that match the given constraints.

GNU Recutils seems to be very suitable to store personal receipts since they are typically not that big and do not require a more heavy application like MySQL or PostgreSQL. Compared to a more lightweight SQLite or XML database, Recutils is much more readable that you can store recfiles (a.k.a Recutils database files) on any cloud or on any device to prove the ownership on the fly without any external applications. Of course, JSON and YAML also work similarly, but they have rules like parenthesis in JSON and indentation in YAML, all of which are not necessary and probably even too complex for a simple list of items. GNU Recutils is designed with a simple database in mind, just take a look at Book.rec below (for now ignore all `%variable`).
```console
# Book.rec

%rec: Book
%mandatory: Title Bought
%sort: Title Year
%type: Bought date
%type: Bought rec Receipt

Title: 97 Things Every Java Programmer Should Know
Year: 2020
Bought: 2020-07-28 17:54:33 +0700

Title: 97 Things Every Programmer Should Know
Year: 2010
Bought: 2019-12-17 09:08:52 +0700

```
I am having two books stored in a recfile named Book.rec. `recsel Book.rec` returns the list of all books without any filter. To display only some selected fields, use `recsel -p Field1,Field2 Book.rec`. To filter with some regex, use `recsel -e "Fieldname ~ 'Keyword'" Book.rec`
```console
foo@bar:~$ recsel -p Title,Year Book.rec
Title: 97 Things Every Java Programmer Should Know
Year: 2020

Title: 97 Things Every Programmer Should Know
Year: 2010
foo@bar:~$ recsel -e "Title ~ 'Java'" Book.rec
Title: 97 Things Every Java Programmer Should Know
Year: 2020
Bought: 2020-07-28 17:54:33 +0700
```

### Chaining - The Killer Feature

Similar to the concept of a foreign key in databases. Recutils can chain multiple recfiles together given that they share the same field. Let say I have a recfile that records all purchases of my book.
```console
# Receipt.rec

%rec: Receipt
%mandatory: Source
%key: Bought
%sort: Bought
%type: Bought date

Bought: 2019-12-17 09:08:52 +0700
Receipt_Filename: 1576548532
Source: Humble Bundle
Description: Humble Book Bundle: O'Reilly Classics by O'Reilly

Bought: 2020-07-28 17:54:33 +0700
Receipt_Filename: 1595933673
Source: Humble Bundle
Description: Humble Book Bundle: Programming Languages by O'Reilly

Bought: 2019-09-20 15:58:00 +0700
Receipt_Filename: 1568969880
Source: Comixology
```
With the `%key: Bought` field in Receipt.rec, I can use it to chain with the `Bought` fields with Book.rec. The query will then join the two files together in the result. Below, `-t Book` is the type that I want to search, it is `%rec: Book` as declare in Book.rec. -j is the field shared in these two files, in this case `Bought`.
```console
foo@bar:~$ recsel -t Book -j Bought -e "Title ~ 'Programmer'" Book.rec Receipt.rec

Title: 97 Things Every Java Programmer Should Know
Year: 2020
Bought_Bought: 2020-07-28 17:54:33 +0700
Bought_Receipt_Filename: 1595933673
Bought_Source: Humble Bundle
Bought_Description: Humble Book Bundle: Programming Languages by O'Reilly

Title: 97 Things Every Programmer Should Know
Year: 2010
Bought_Bought: 2019-12-17 09:08:52 +0700
Bought_Receipt_Filename: 1576548532
Bought_Source: Humble Bundle
Bought_Description: Humble Book Bundle: O'Reilly Classics by O'Reilly
```
And this doesn't limit only to Book.rec. I also have other databases for each category: Games.rec, Movies.rec, Comics.rec, and Music.rec. GNU Recutils allows me to cleanly separate receipts into each file. I keep all receipt in one single Receipt.rec though, you can do otherwise.

Things might get out of hand when the database becomes slightly bigger, you can insert the entry using command line commands: recins. As shown below, you specify type (-t Book), field (-f Title), and value (-v "Lord of GNU).
```console
foo@bar:~$ recins -t Book -f Title -v "Lord of GNU" -f Year -v 2050 -f Bought -v "2040-12-13 12:12:12 +0700" Book.rec
foo@bar:~$ cat Book.rec
%rec: Book
%mandatory: Title Bought
%sort: Title Year
%type: Bought date
%type: Bought rec Receipt

Title: 97 Things Every Java Programmer Should Know
Year: 2020
Bought: 2020-07-28 17:54:33 +0700

Title: 97 Things Every Programmer Should Know
Year: 2010
Bought: 2019-12-17 09:08:52 +0700

Title: Lord of GNU
Year: 2050
Bought: 2040-12-13 12:12:12 +0700
```
You can also sort the database using `recfix --sort Book.rec` but you need to specify sort field first. For more details, read GNU Recutils manual.
