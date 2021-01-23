VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   9105
   ClientLeft      =   120
   ClientTop       =   420
   ClientWidth     =   13395
   LinkTopic       =   "Form1"
   Picture         =   "Form1.frx":0000
   ScaleHeight     =   9105
   ScaleWidth      =   13395
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton cmdGo 
      Caption         =   "GO!"
      Height          =   735
      Left            =   11160
      TabIndex        =   15
      Top             =   2160
      Width           =   855
   End
   Begin VB.PictureBox Picture5 
      Height          =   615
      Left            =   10200
      Picture         =   "Form1.frx":044F
      ScaleHeight     =   555
      ScaleWidth      =   555
      TabIndex        =   89
      Top             =   7080
      Visible         =   0   'False
      Width           =   615
   End
   Begin VB.PictureBox Picture4 
      Height          =   615
      Left            =   9360
      Picture         =   "Form1.frx":088B
      ScaleHeight     =   555
      ScaleWidth      =   435
      TabIndex        =   88
      Top             =   7080
      Visible         =   0   'False
      Width           =   495
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   0
      Left            =   11640
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   87
      Top             =   7320
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   14.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Index           =   80
      Left            =   11520
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   86
      ToolTipText     =   "Goal !!"
      Top             =   600
      Width           =   495
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   79
      Left            =   10920
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   85
      Top             =   360
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   78
      Left            =   10320
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   84
      Top             =   240
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   77
      Left            =   9720
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   83
      Top             =   480
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   76
      Left            =   9120
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   82
      Top             =   600
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   75
      Left            =   8400
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   81
      Top             =   480
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   74
      Left            =   7680
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   80
      Top             =   240
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   73
      Left            =   7080
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   79
      Top             =   120
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   72
      Left            =   6360
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   78
      Top             =   120
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   71
      Left            =   6120
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   77
      Top             =   720
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   70
      Left            =   6720
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   76
      Top             =   960
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   69
      Left            =   7320
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   75
      Top             =   1320
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   68
      Left            =   7920
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   74
      Top             =   1920
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   67
      Left            =   8520
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   73
      Top             =   2160
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   66
      Left            =   8760
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   72
      Top             =   2760
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   65
      Left            =   9360
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   71
      Top             =   3120
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H008080FF&
      Height          =   500
      Index           =   64
      Left            =   9000
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   70
      ToolTipText     =   "ไปต่อเหอะอีก 1 ตา"
      Top             =   3840
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   63
      Left            =   8400
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   69
      Top             =   4080
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   62
      Left            =   7680
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   68
      Top             =   3960
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H008080FF&
      Height          =   500
      Index           =   61
      Left            =   6960
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   67
      ToolTipText     =   "ไปต่อเหอะอีก 1 ตา"
      Top             =   3600
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H008080FF&
      Height          =   500
      Index           =   60
      Left            =   6360
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   66
      ToolTipText     =   "ไปต่อเหอะอีก 1 ตา"
      Top             =   3360
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   59
      Left            =   5760
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   65
      Top             =   3000
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   58
      Left            =   5520
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   64
      Top             =   2400
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   57
      Left            =   4920
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   63
      Top             =   1920
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   56
      Left            =   4320
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   62
      Top             =   1680
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   55
      Left            =   4560
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   61
      Top             =   1080
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00FFC0C0&
      Height          =   500
      Index           =   54
      Left            =   4320
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   60
      ToolTipText     =   "Found Lake! Steps back by 2"
      Top             =   360
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   53
      Left            =   3720
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   59
      Top             =   120
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   52
      Left            =   3120
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   58
      Top             =   240
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   51
      Left            =   2520
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   57
      Top             =   480
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   50
      Left            =   2880
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   56
      Top             =   1080
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   49
      Left            =   3000
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   55
      Top             =   1680
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00FFC0C0&
      Height          =   500
      Index           =   48
      Left            =   2760
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   54
      ToolTipText     =   "Found Lake! Steps back by 2"
      Top             =   2280
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   47
      Left            =   2160
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   53
      Top             =   2280
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   46
      Left            =   1560
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   52
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   2160
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   45
      Left            =   1440
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   51
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   1560
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   44
      Left            =   1440
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   50
      Top             =   840
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   43
      Left            =   1320
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   49
      Top             =   240
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   42
      Left            =   720
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   48
      Top             =   120
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   41
      Left            =   480
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   47
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   720
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   40
      Left            =   480
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   46
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   1320
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   39
      Left            =   480
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   45
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   1920
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   38
      Left            =   600
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   44
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   2640
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   37
      Left            =   960
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   43
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   3240
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00C0FFC0&
      Height          =   500
      Index           =   36
      Left            =   1320
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   42
      ToolTipText     =   "Poison swamp, it's possible to get confuse here."
      Top             =   3840
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   35
      Left            =   2040
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   41
      Top             =   3960
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H8000000D&
      Height          =   500
      Index           =   34
      Left            =   2880
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   40
      ToolTipText     =   "Found Horse! Move forward by 3 steps."
      Top             =   4080
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   33
      Left            =   3720
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   39
      Top             =   3720
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   32
      Left            =   4440
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   38
      Top             =   3720
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   31
      Left            =   5160
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   37
      Top             =   3960
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H8000000D&
      Height          =   500
      Index           =   30
      Left            =   5640
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   36
      ToolTipText     =   "Found Horse! Move forward by 3 steps."
      Top             =   4560
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   29
      Left            =   6000
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   35
      Top             =   5280
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   28
      Left            =   5880
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   34
      Top             =   6000
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   27
      Left            =   5280
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   33
      Top             =   6480
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   26
      Left            =   4560
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   32
      Top             =   6240
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H8000000D&
      Height          =   500
      Index           =   25
      Left            =   3840
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   31
      ToolTipText     =   "Found Horse! Move forward by 3 steps."
      Top             =   6000
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   24
      Left            =   3120
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   30
      Top             =   5760
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   23
      Left            =   2400
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   29
      Top             =   5520
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   22
      Left            =   1680
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   28
      Top             =   5280
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   21
      Left            =   960
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   27
      Top             =   5040
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   20
      Left            =   360
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   26
      Top             =   5280
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   19
      Left            =   240
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   25
      Top             =   5880
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H008080FF&
      Height          =   500
      Index           =   18
      Left            =   840
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   24
      ToolTipText     =   "เจอตัวเงินตัวทองในพุ่มไม้ เค้าว่ากันว่าโชคดี เดินต่อ 1 ตา"
      Top             =   6360
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   17
      Left            =   1440
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   23
      Top             =   6600
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   16
      Left            =   2040
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   22
      Top             =   6840
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H8000000D&
      Height          =   500
      Index           =   15
      Left            =   2640
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   21
      ToolTipText     =   "Found Horse! Move forward by 3 steps."
      Top             =   7080
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   14
      Left            =   3240
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   20
      Top             =   7320
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   13
      Left            =   3840
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   19
      Top             =   7560
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   12
      Left            =   4440
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   18
      Top             =   7800
      Width           =   500
   End
   Begin VB.PictureBox Picture2 
      Height          =   495
      Left            =   7320
      Picture         =   "Form1.frx":0CDA
      ScaleHeight     =   435
      ScaleWidth      =   435
      TabIndex        =   14
      Top             =   7680
      Visible         =   0   'False
      Width           =   495
   End
   Begin VB.PictureBox Picture3 
      Height          =   495
      Left            =   8160
      Picture         =   "Form1.frx":10D0
      ScaleHeight     =   435
      ScaleWidth      =   555
      TabIndex        =   13
      Top             =   7680
      Visible         =   0   'False
      Width           =   615
   End
   Begin VB.CommandButton Command3 
      Caption         =   "Restart"
      Height          =   735
      Left            =   11160
      TabIndex        =   12
      Top             =   3000
      Width           =   1455
   End
   Begin VB.Timer Timer2 
      Interval        =   25
      Left            =   1920
      Top             =   7800
   End
   Begin VB.Timer Timer1 
      Enabled         =   0   'False
      Interval        =   400
      Left            =   840
      Top             =   7800
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H8000000D&
      Height          =   500
      Index           =   11
      Left            =   5040
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   10
      ToolTipText     =   "Found Horse! Move forward by 3 steps."
      Top             =   7920
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   10
      Left            =   5640
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   9
      Top             =   7560
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   9
      Left            =   6240
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   8
      Top             =   7320
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   8
      Left            =   6840
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   7
      Top             =   7080
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   7
      Left            =   7440
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   6
      Top             =   6840
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00FFC0C0&
      Height          =   500
      Index           =   5
      Left            =   8400
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   4
      ToolTipText     =   "Found Lake! Steps back by 2"
      Top             =   5880
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   4
      Left            =   9240
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   3
      Top             =   5880
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   3
      Left            =   9960
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   2
      Top             =   6000
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   2
      Left            =   10680
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   1
      Top             =   6120
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      Height          =   500
      Index           =   1
      Left            =   11280
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   0
      Top             =   6720
      Width           =   500
   End
   Begin VB.PictureBox Picture1 
      BackColor       =   &H00FFC0C0&
      Height          =   500
      Index           =   6
      Left            =   7800
      ScaleHeight     =   547.17
      ScaleMode       =   0  'User
      ScaleWidth      =   420.29
      TabIndex        =   5
      ToolTipText     =   "Found Lake! Steps back by 2"
      Top             =   6240
      Width           =   500
   End
   Begin VB.PictureBox Picture6 
      Appearance      =   0  'Flat
      BackColor       =   &H80000005&
      ForeColor       =   &H80000008&
      Height          =   11055
      Left            =   -120
      Picture         =   "Form1.frx":150B
      ScaleHeight     =   11025
      ScaleWidth      =   13545
      TabIndex        =   90
      Top             =   -2640
      Width           =   13575
   End
   Begin VB.Label Label3 
      BackColor       =   &H80000007&
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   615
      Left            =   12240
      TabIndex        =   16
      Top             =   8400
      Width           =   855
   End
   Begin VB.Label Label4 
      BackColor       =   &H80000007&
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   18
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H8000000B&
      Height          =   495
      Left            =   8760
      TabIndex        =   17
      Top             =   8520
      Width           =   2175
   End
   Begin VB.Label Label1 
      BackColor       =   &H00000000&
      Caption         =   "Start"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   14.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H8000000B&
      Height          =   375
      Index           =   0
      Left            =   12360
      TabIndex        =   11
      Top             =   7440
      Width           =   735
   End
   Begin VB.Label Label2 
      BackColor       =   &H80000008&
      Height          =   735
      Left            =   0
      TabIndex        =   91
      Top             =   8400
      Width           =   13455
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim points1, points2, headpoint, iden, player, final, poison1, poison2 As Integer
Private Declare Sub Sleep Lib "kernel32.dll" (ByVal dwMilliseconds As Long)
Private Sub Command3_Click()
Dim i As Integer
For i = 1 To final
Picture1(i).Picture = Picture1(0).Picture
Next
player = 2
Label4.Caption = "Player 1 Turn"
points1 = 0
points2 = 0
headpoint = 0
iden = 0
cmdGo.Enabled = True
End Sub
Private Sub Form_Load()
Form1.Picture = Picture1(0).Picture
Picture1(0).BackColor = RGB(0, 0, 0)
final = 80
points1 = 0
points2 = 0
player = 2
Label4.Caption = "Player 1 Turn"
End Sub
Private Sub cmdGo_Click()
player = 2 - Fix(player / 2)
Dim random As Integer
Randomize
random = Fix((Rnd * 6) + 1)
Sleep (250)
Label3.Caption = random & " !"
Sleep (250)
If (player = 1) Then
    headpoint = points1
    points1 = points1 + random
Else
    headpoint = points2
    points2 = points2 + random
End If
iden = 1
Timer1.Enabled = True
Timer2.Enabled = True
cmdGo.Enabled = False
End Sub

Private Sub Timer1_Timer()

If (iden = 1) Then
    If (headpoint < final) Then
        headpoint = headpoint + 1
        Picture1(headpoint - 1).Picture = Picture1(0).Picture
            
        If (player = 1 And headpoint <= points1) Then
            If (points2 > 0) Then
                Picture1(points2).Picture = Picture3.Picture
            End If
        Picture1(headpoint).Picture = Picture2.Picture
        End If
        
        If (player = 2 And headpoint <= points2) Then
            If (points1 > 0) Then
                Picture1(points1).Picture = Picture2.Picture
            End If
        Picture1(headpoint).Picture = Picture3.Picture
        End If
    End If
End If

If (iden = -1) Then
    If (player = 1 And headpoint > points1) Then
        Picture1(headpoint).Picture = Picture1(0).Picture
        If (points2 > 0) Then
            Picture1(points2).Picture = Picture3.Picture
        End If
        headpoint = headpoint - 1
        Picture1(headpoint).Picture = Picture2.Picture
    ElseIf (player = 2 And headpoint > points2) Then
        Picture1(headpoint).Picture = Picture1(0).Picture
        If (points1 > 0) Then
            Picture1(points1).Picture = Picture2.Picture
        End If
        headpoint = headpoint - 1
        Picture1(headpoint).Picture = Picture3.Picture
    Else
        cmdGo.Enabled = True
        Timer1.Enabled = False
    End If
End If

End Sub

Private Sub Timer2_Timer()

If ((points1 = 6 Or points1 = 5 Or points1 = 48 Or points1 = 54) And Timer1.Enabled = False) Then
iden = -1
Sleep (200)
points1 = points1 - 2
Timer1.Enabled = True
End If

If ((points2 = 6 Or points2 = 5 Or points2 = 48 Or points2 = 54) And Timer1.Enabled = False) Then
iden = -1
Sleep (200)
points2 = points2 - 2
Timer1.Enabled = True
End If

If ((points1 = 11 Or points1 = 15 Or points1 = 25 Or points1 = 30 Or points1 = 34) And Timer1.Enabled = False) Then
Sleep (200)
points1 = points1 + 3
Timer1.Enabled = True
End If

If ((points2 = 11 Or points2 = 15 Or points2 = 25 Or points2 = 30 Or points2 = 34) And Timer1.Enabled = False) Then
Sleep (200)
points2 = points2 + 3
Timer1.Enabled = True
End If

If ((points1 = 18 Or points1 = 60 Or points1 = 61 Or points1 = 64) And Timer1.Enabled = False) Then
Sleep (200)
Label4.Caption = "Player " & player & " Turn"
player = 2
Timer2.Enabled = False
cmdGo.Enabled = True
End If

If ((points2 = 18 Or points2 = 60 Or points2 = 61 Or points2 = 64) And Timer1.Enabled = False) Then
Sleep (300)
Label4.Caption = "Player " & player & " Turn"
player = 1
Timer2.Enabled = False
cmdGo.Enabled = True
End If

If ((points1 = 36 Or points1 = 37 Or points1 = 38 Or points1 = 39 Or points1 = 40 Or points1 = 41 Or points1 = 45 Or points1 = 46) And Timer1.Enabled = False) Then
Sleep (200)
If (poison1 = 0) Then
Picture1(points1).Picture = Picture4.Picture
Picture2.Picture = Picture4.Picture
End If
If (poison1 > 0) Then
Randomize
points1 = points1 - Fix(4 * Rnd)
End If
iden = -1
poison1 = poison1 + 1
Timer1.Enabled = True
Timer2.Enabled = False
cmdGo.Enabled = True
End If

If ((points2 = 36 Or points2 = 37 Or points2 = 38 Or points2 = 39 Or points2 = 40 Or points2 = 41 Or points2 = 45 Or points2 = 46) And Timer1.Enabled = False) Then
Sleep (200)
If (poison2 = 0) Then
Picture1(points2).Picture = Picture5.Picture
Picture3.Picture = Picture5.Picture
End If
If (poison2 > 0) Then
Randomize
points2 = points2 - Fix(4 * Rnd)
End If
iden = -1
poison2 = poison2 + 1
Timer1.Enabled = True
Timer2.Enabled = False
cmdGo.Enabled = True
End If

If (points1 <= final And iden = 1 And player = 1) Then
    If (Picture1(points1).Picture = Picture2.Picture) Then
        Timer1.Enabled = False
        cmdGo.Enabled = True
        Label4.Caption = "Player 2 Turn"
    End If
End If

If (points2 <= final And iden = 1 And player = 2) Then
    If (Picture1(points2).Picture = Picture3.Picture) Then
        Timer1.Enabled = False
        cmdGo.Enabled = True
        Label4.Caption = "Player 1 Turn"
    End If
End If

If (Picture1(final).Picture = Picture2.Picture) Then
    OverMessage = MsgBox("Player1(Bear) Win!", vbOKOnly, "Game Over!")
    Timer2.Enabled = False
    Timer1.Enabled = False
End If

If (Picture1(final).Picture = Picture3.Picture) Then
    OverMessage = MsgBox("Player2(Chic) Win!", vbOKOnly, "Game Over!")
    Timer2.Enabled = False
    Timer1.Enabled = False
End If

End Sub
