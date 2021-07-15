Title: My Minimal Way to Record Personal Spendings
Date: 2021-01-02
Modified: 2021-01-02
Tags: Personal
Slug: my-minimal-way-to-record-personal-spendings
Authors: Theerawat Kiatdarakun

Recording your spendings can not only increase your awareness, but it's also fun to take a look what you spent back then. I firstly recorded my spendings when I started my Master's study in Germany. Instead of using an app, I recorded it manually because I intended to record everything in a very detailed way from the amount in liters and grams and the price of each item. I chose MS Excel because that's only app I knew.
```text
Date       Food  Non-Food  Transport  Study/Doc  Rent/Insuance  Others Necessary Others Unnecessary Total  Details
9/20/2013  8.24  0         0          0          0              0                0                  607.77 ค่านํ้า 1 แพ็ค 2.64 EUR ไก่หมักเครื่องเทศ 4 ชิ้น 3.67 EUR นํ้าส้มแฟนต้า 1.5L 1.24 EUR มะเขือเทศ 250 g 0.69 EUR
```

I removed the `details` part after coming back to Thailand and used LibreOffice instead. But then I realized several drawbacks of this method. I have to go back home to record everything. I could certainly sync the spreadsheet with a popular cloud service like OneDrive but I preferred a cloud provider with a better ToS for privacy. An interesting cloud option like sync.com didn't allow me to edit on the web at all. This method was also too detailed to store mundane spendings. I needed a simpler format.

Then I found **Standard Notes**. It's a secure note-taking app that allows me to edit on the web everywhere. I converted everything to JSON like below. I divided into two parts for the sake of readability. Nothing can stop me from combining them later to achieve half the size! It takes very minimal space and is also very readable for any lightweight note-taking app. **Standard Notes** also supports history so that I can ensure no entry is entered twice. Hail, Plain Text!
```json
{
  "2021 (01-06)": {
    "accommodation & household"     : [29,0,0,0,0,0],
    "clothing & non-IT appliance"   : [0,0,0,0,0,0],
    "education & entertainment"     : [31,0,0,0,0,0],
    "food & drink: raw or processed": [1017,0,0,0,0,0],
    "food & drink: ultra processed" : [40,0,0,0,0,0],
    "food & drink: uncategorized"   : [580,0,0,0,0,0],
    "health & hygiene"              : [0,0,0,0,0,0],
    "production and tools"          : [0,0,0,0,0,0],
    "social: donation/gift"         : [0,0,0,0,0,0],
    "social: formalities"           : [0,0,0,0,0,0],
    "transportation & delivery"     : [100,0,0,0,0,0],
    "utilities & services"          : [0,0,0,0,0,0]
  },"2020 (07-12)": {
    "accommodation & household"     : [204,0,0,45,795,61],
    "clothing & non-IT appliance"   : [1116,0,0,0,0,139],
    "education & entertainment"     : [203,0,29,0,0,212],
    "food & drink: raw or processed": [1258,478,386,736,1282,1756],
    "food & drink: ultra processed" : [283,231,280,210,248,116],
    "food & drink: uncategorized"   : [2284,1940,1815,1697,1413,1295],
    "health & hygiene"              : [342,99,150,33,21,0],
    "production and tools"          : [93,0,209,16,6820,9096],
    "social: donation/gift"         : [0,0,0,0,210,0],
    "social: formalities"           : [0,0,0,100,3,0],
    "transportation & delivery"     : [0,0,0,249,242,236],
    "utilities & services"          : [0,0,0,0,65,45]
  }
}
```
