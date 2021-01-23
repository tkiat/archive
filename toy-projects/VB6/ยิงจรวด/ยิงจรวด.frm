VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   4560
   ClientLeft      =   120
   ClientTop       =   420
   ClientWidth     =   6855
   LinkTopic       =   "Form1"
   ScaleHeight     =   4560
   ScaleWidth      =   6855
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton Command7 
      Caption         =   "Normal"
      Height          =   255
      Left            =   3000
      TabIndex        =   11
      Top             =   4200
      Width           =   735
   End
   Begin VB.CommandButton Command6 
      Caption         =   "Easy"
      Height          =   255
      Left            =   2160
      TabIndex        =   10
      Top             =   4200
      Width           =   735
   End
   Begin VB.CommandButton Command5 
      Caption         =   "Goal"
      Height          =   375
      Left            =   1320
      TabIndex        =   9
      Top             =   4080
      Width           =   735
   End
   Begin VB.CommandButton Command4 
      Caption         =   "How to play"
      Height          =   375
      Left            =   120
      TabIndex        =   8
      Top             =   4080
      Width           =   1095
   End
   Begin VB.Timer Timer4 
      Enabled         =   0   'False
      Interval        =   60
      Left            =   4440
      Top             =   1320
   End
   Begin VB.Timer Timer3 
      Interval        =   60
      Left            =   4920
      Top             =   1920
   End
   Begin VB.CommandButton Command3 
      Caption         =   "Play again"
      Height          =   375
      Left            =   5640
      TabIndex        =   7
      Top             =   3840
      Visible         =   0   'False
      Width           =   975
   End
   Begin VB.Timer Timer2 
      Interval        =   10
      Left            =   5880
      Top             =   3000
   End
   Begin VB.CommandButton Command2 
      Caption         =   "Shoot"
      Height          =   495
      Left            =   120
      TabIndex        =   1
      Top             =   3600
      Visible         =   0   'False
      Width           =   615
   End
   Begin VB.CommandButton Command1 
      BackColor       =   &H8000000A&
      Enabled         =   0   'False
      Height          =   735
      Left            =   240
      TabIndex        =   0
      Top             =   720
      Width           =   495
   End
   Begin VB.Timer Timer1 
      Enabled         =   0   'False
      Interval        =   50
      Left            =   4920
      Top             =   2400
   End
   Begin VB.Line Line4 
      X1              =   360
      X2              =   3720
      Y1              =   2450
      Y2              =   2450
   End
   Begin VB.Line Line3 
      X1              =   240
      X2              =   3720
      Y1              =   510
      Y2              =   510
   End
   Begin VB.Label Label5 
      Alignment       =   2  'Center
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
      Left            =   3000
      TabIndex        =   6
      Top             =   2880
      Width           =   2055
   End
   Begin VB.Label Label4 
      Alignment       =   2  'Center
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   18
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   4320
      TabIndex        =   5
      Top             =   3720
      Width           =   975
   End
   Begin VB.Label Label3 
      Alignment       =   2  'Center
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   18
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   3120
      TabIndex        =   4
      Top             =   3720
      Width           =   855
   End
   Begin VB.Label Label2 
      Alignment       =   2  'Center
      Caption         =   "Total Pass     Total Crash"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   2880
      TabIndex        =   3
      Top             =   3360
      Width           =   2535
   End
   Begin VB.Label Label1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   18
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   120
      TabIndex        =   2
      Top             =   3000
      Width           =   2655
   End
   Begin VB.Line Line2 
      X1              =   4200
      X2              =   4200
      Y1              =   0
      Y2              =   1200
   End
   Begin VB.Line Line1 
      X1              =   720
      X2              =   1080
      Y1              =   1080
      Y2              =   1080
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private v, w, X, Y, z As Integer
Option Explicit

Private Sub Command2_Click()
    w = w + 1
    Line1.X1 = 720
    Line1.X2 = 1080
    Timer2.Enabled = True
    If (w > 0) Then
        Timer1.Enabled = True
        Command2.Enabled = False
    End If
    If (z = 1) Then
        Timer3.Enabled = True
        Timer4.Enabled = False
    ElseIf (z = 2) Then
        Timer3.Enabled = False
        Timer4.Enabled = True
    End If

Label1.Visible = False
End Sub

Private Sub Command3_Click()
Line1.X1 = 720
Line1.X2 = 1080
Line2.Y1 = 0
Line2.Y2 = 1200
w = 0
X = 0
Y = 0
Timer3.Interval = 60
Timer4.Interval = 60
Timer1.Enabled = False
Command2.Enabled = True
Timer2.Enabled = True
    
    If (v = 1) Then
        Timer1.Interval = 25
        Timer1.Interval = 25
    ElseIf (v = 2) Then
        Timer1.Interval = 50
        Timer1.Interval = 50
    End If
Label1.Caption = ""
Label3.Caption = ""
Label4.Caption = ""
Label5.Caption = ""
Command3.Visible = False
End Sub

Private Sub Command4_Click()
Dim a1, a2, a3, a4, a5 As String
a1 = "1. Press the middle of your mouse to shoot."
a2 = "2. Press the left button to shift the arrow up."
a3 = "3. Press the right button to shift the arrow down."
a4 = "4. Press the middle of your mouse to reload the arrow."
a5 = "à¢éÒã¨»Ð!"
MsgBox a1 & vbNewLine & a2 & vbNewLine & a3 & vbNewLine & a4 & vbNewLine & a5, vbInformation, "How to play"
End Sub

Private Sub Command5_Click()
MsgBox "Passes the arrow 10 times to win!" & vbNewLine & "The block will move faster in higher level!" & vbNewLine & "If you pass 5 times, level 2 will appear!" & vbNewLine & "If you pass 9 times, level 3 will appear!", vbExclamation, "Goal"
End Sub

Private Sub Command6_Click()
v = 1
Command3.Value = True
End Sub

Private Sub Command7_Click()
v = 2
Command3.Value = True
End Sub

Private Sub Form_Mousedown(Button As Integer, Shift As Integer, X As Single, Y As Single)

If Button = 1 Then
    If (Line1.Y1 > 900 And w <> -1 And w < 3) Then
        Line1.Y1 = Line1.Y1 - 100
        Line1.Y2 = Line1.Y2 - 100
        Command1.Top = Command1.Top - 100
    End If
End If

If Button = 2 Then
    If (Line1.Y1 < 2000 And w <> -1 And w < 3) Then
        Line1.Y1 = Line1.Y1 + 100
        Line1.Y2 = Line1.Y2 + 100
        Command1.Top = Command1.Top + 100
    End If
End If

If Button = 4 Then
If (Line1.X1 = 720 Or w = -1) Then
    Command2.Value = True
    End If
End If
End Sub


Private Sub Timer1_Timer()
Line1.X1 = Line1.X1 + 100
Line1.X2 = Line1.X2 + 100
    If (Line1.X1 = 5220) Then
        Command2.Enabled = True
        X = X + 1
        Line1.X1 = 720
        Line1.X2 = 1080
        w = 0
        Timer1.Enabled = False
    End If
    If (X = 5) Then
        Label5.Caption = "Level 2!"
    End If
    If (X = 9) Then
        Label5.Caption = "Level 3!"
    End If
    If (X = 10) Then
        Label5.Caption = "You win!"
        w = 10
        Label3.Caption = "" & (0 + X)
        Command3.Visible = True
        Command2.Enabled = False
        Timer1.Enabled = False
        Timer2.Enabled = False
        Timer3.Enabled = False
        Timer4.Enabled = False
    End If
End Sub

Private Sub Timer2_Timer()
    If (Line2.Y2 > Line1.Y1 And Line2.Y1 < Line1.Y1 And Line2.X1 > Line1.X1 And Line2.X1 < Line1.X2) Then
    Label1.Visible = True
    Timer1.Enabled = False
    Timer2.Enabled = False
    Timer3.Enabled = False
    Timer4.Enabled = False
    Y = Y + 1
    Label1.Caption = "Collide!!"
    Command2.Enabled = True
    w = -1
    End If
    Label3.Caption = "" & (0 + X)
    Label4.Caption = "" & (0 + Y)
    
    If (Y > 4) Then
        Label1.Caption = "Game Over!!"
        Command2.Enabled = False
        Command3.Visible = True
        w = 10
    End If
    If (X > 4) Then
        Timer3.Interval = 40
        Timer4.Interval = 40
    End If
    If (X > 8) Then
        If (X = 10) Then
        Label1.Caption = "Level 3!"
        End If
        Timer3.Interval = 20
        Timer4.Interval = 20
    End If
        
End Sub

Private Sub Timer3_Timer()
If (Line2.Y2 < 3000) Then
        Line2.Y1 = Line2.Y1 + 100
        Line2.Y2 = Line2.Y2 + 100
        z = 1
    Else
        Timer3.Enabled = False
        Timer4.Enabled = True
    End If
End Sub

Private Sub Timer4_Timer()
If (Line2.Y2 > 1200) Then
        Line2.Y1 = Line2.Y1 - 100
        Line2.Y2 = Line2.Y2 - 100
        z = 2
    Else
    Timer4.Enabled = False
    Timer3.Enabled = True
    End If
End Sub
