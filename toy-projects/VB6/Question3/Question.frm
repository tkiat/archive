VERSION 5.00
Begin VB.Form Form1 
   BackColor       =   &H80000004&
   Caption         =   "Form1"
   ClientHeight    =   3945
   ClientLeft      =   2565
   ClientTop       =   2055
   ClientWidth     =   7095
   LinkTopic       =   "Form1"
   ScaleHeight     =   3945
   ScaleWidth      =   7095
   Begin VB.Frame Frame1 
      BorderStyle     =   0  'None
      Height          =   1575
      Left            =   3360
      TabIndex        =   17
      Top             =   1200
      Width           =   2655
   End
   Begin VB.OptionButton Option4 
      Height          =   255
      Left            =   3840
      TabIndex        =   5
      Top             =   2400
      Width           =   375
   End
   Begin VB.OptionButton Option3 
      Height          =   255
      Left            =   3840
      TabIndex        =   4
      Top             =   2040
      Width           =   255
   End
   Begin VB.OptionButton Option2 
      Height          =   255
      Left            =   3840
      TabIndex        =   3
      Top             =   1680
      Width           =   255
   End
   Begin VB.OptionButton Option1 
      Height          =   255
      Left            =   3840
      TabIndex        =   2
      Top             =   1320
      Width           =   255
   End
   Begin VB.Timer Timer1 
      Interval        =   1000
      Left            =   120
      Top             =   3000
   End
   Begin VB.CommandButton Command1 
      BackColor       =   &H00FFFFFF&
      Caption         =   "Proceed"
      Height          =   495
      Left            =   2400
      TabIndex        =   1
      Top             =   2160
      Width           =   855
   End
   Begin VB.Timer tmrBlink 
      Enabled         =   0   'False
      Interval        =   500
      Left            =   720
      Top             =   3000
   End
   Begin VB.Label Label11 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   1560
      TabIndex        =   16
      Top             =   2880
      Width           =   4335
   End
   Begin VB.Label Label9 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   240
      TabIndex        =   15
      Top             =   1200
      Width           =   2655
   End
   Begin VB.Label Label10 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   240
      TabIndex        =   14
      Top             =   1680
      Width           =   2655
   End
   Begin VB.Label Label8 
      BackColor       =   &H00C0FFFF&
      Height          =   255
      Left            =   4200
      TabIndex        =   13
      Top             =   2400
      Width           =   1335
   End
   Begin VB.Label Label7 
      BackColor       =   &H00C0E0FF&
      Height          =   255
      Left            =   4200
      TabIndex        =   12
      Top             =   2040
      Width           =   1335
   End
   Begin VB.Label Label6 
      BackColor       =   &H00C0FFC0&
      Height          =   255
      Left            =   4200
      TabIndex        =   11
      Top             =   1680
      Width           =   1335
   End
   Begin VB.Label Label5 
      BackColor       =   &H00FFFFC0&
      Height          =   255
      Left            =   4200
      TabIndex        =   10
      Top             =   1320
      Width           =   1335
   End
   Begin VB.Label Label4 
      Caption         =   "D"
      Height          =   255
      Left            =   3600
      TabIndex        =   9
      Top             =   2400
      Width           =   135
   End
   Begin VB.Label Label3 
      Caption         =   "C"
      Height          =   255
      Left            =   3600
      TabIndex        =   8
      Top             =   2040
      Width           =   135
   End
   Begin VB.Label Label2 
      Caption         =   "B"
      Height          =   255
      Left            =   3600
      TabIndex        =   7
      Top             =   1680
      Width           =   135
   End
   Begin VB.Label Label1 
      Caption         =   "A"
      Height          =   255
      Left            =   3600
      TabIndex        =   6
      Top             =   1320
      Width           =   255
   End
   Begin VB.Label lblProcessing 
      Enabled         =   0   'False
      BeginProperty Font 
         Name            =   "Arial"
         Size            =   15.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000080&
      Height          =   495
      Left            =   360
      TabIndex        =   0
      Top             =   360
      Width           =   5295
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private a, b, T, F, sec1, sec2, sec3 As Double

Private Sub Command1_Click()
If (sec2 < 1) Then
sec1 = 0
T = 0
F = 0
End If
tmrBlink.Enabled = True
b = sec1
If (a = 1) Then
lblProcessing = "You are correct!"
sec3 = sec3 + 1
T = T + 1
End If

If (a = 2) Then
lblProcessing = "You are wrong!"
sec3 = sec3 + 1
F = F + 1
End If

End Sub
Private Sub Timer1_Timer()
sec1 = sec1 + 1
sec2 = sec2 + 0.5
End Sub

Private Sub tmrBlink_Timer()
    If (sec1 >= 1 And sec2 <= 3) Then
    lblProcessing = "Processing ... Please Wait"
    lblProcessing.Visible = Not lblProcessing.Visible
End If
    If (sec2 > 3 And sec2 <= 4) Then
    lblProcessing = ""
    sec3 = 1
End If
    If (sec2 > 4 And sec3 = 1) Then
    Frame1.Visible = False
    lblProcessing = "1. 1+1=?"
    Command1.Caption = "Answer"
    Label5 = "3"
    Label6 = "5"
    Label7 = "6"
    Label8 = "2"
    If (Option4 = True) Then
    a = 1
    b = sec1
    Else
    a = 2
    b = sec1
    End If
   End If
   
   If (sec3 = 2 And sec1 > b) Then
   lblProcessing = "2. 67-45=?"
    Label5 = "34"
    Label6 = "12"
    Label7 = "22"
    Label8 = "24"
    If (Option3 = True) Then
    a = 1
    b = sec1
    Else
    a = 2
    b = sec1
   End If
   End If
   If (sec3 = 3 And sec1 > b) Then
   lblProcessing = "3. VB6 is what?"
    Label5 = "Computer"
    Label6 = "Program"
    Label7 = "Clock"
    Label8 = "Notebook"
    If (Option2 = True) Then
    a = 1
    b = sec1
    Else
    a = 2
    b = sec1
   End If
   End If
   If (sec3 = 4 And sec1 > b + 0.5) Then
   lblProcessing = "4. Cat is what?"
    Label5 = "Animal"
    Label6 = "Tree"
    Label7 = "Diode"
    Label8 = "Hydra"
    If (Option1 = True) Then
    a = 1
    b = sec1
    Else
    a = 2
    b = sec1
   End If
   End If
   If (sec3 = 5 And sec1 > b) Then
   lblProcessing = "Thank you for playing!"
   Label9 = "True: " & T
   Label10 = "False: " & F
   Label11 = "Percentage of correction = " & (T / (T + F) * 100) & "%"
   Command1.Enabled = False
   End If
       
End Sub

