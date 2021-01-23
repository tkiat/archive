VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   4170
   ClientLeft      =   120
   ClientTop       =   420
   ClientWidth     =   5415
   LinkTopic       =   "Form1"
   ScaleHeight     =   4170
   ScaleWidth      =   5415
   StartUpPosition =   3  'Windows Default
   Begin VB.Timer Timer1 
      Interval        =   250
      Left            =   4680
      Top             =   720
   End
   Begin VB.PictureBox Picture1 
      Height          =   3615
      Left            =   120
      ScaleHeight     =   3555
      ScaleWidth      =   315
      TabIndex        =   11
      Top             =   360
      Width           =   375
   End
   Begin VB.CommandButton Command2 
      Caption         =   "Reset"
      Height          =   495
      Left            =   4440
      TabIndex        =   10
      Top             =   2640
      Width           =   855
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   8
      Left            =   3120
      MaskColor       =   &H000000FF&
      TabIndex        =   9
      Top             =   2280
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   7
      Left            =   2040
      MaskColor       =   &H000000FF&
      TabIndex        =   8
      Top             =   2280
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   6
      Left            =   960
      MaskColor       =   &H000000FF&
      TabIndex        =   7
      Top             =   2280
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   5
      Left            =   3120
      MaskColor       =   &H000000FF&
      TabIndex        =   6
      Top             =   1320
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   4
      Left            =   2040
      MaskColor       =   &H000000FF&
      TabIndex        =   5
      Top             =   1320
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   3
      Left            =   960
      MaskColor       =   &H000000FF&
      TabIndex        =   4
      Top             =   1320
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   2
      Left            =   3120
      MaskColor       =   &H000000FF&
      TabIndex        =   3
      Top             =   360
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   1
      Left            =   2040
      MaskColor       =   &H000000FF&
      TabIndex        =   2
      Top             =   360
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   975
      Index           =   0
      Left            =   960
      MaskColor       =   &H000000FF&
      TabIndex        =   0
      Top             =   360
      UseMaskColor    =   -1  'True
      Width           =   1095
   End
   Begin VB.Label Label5 
      Caption         =   "X"
      Height          =   255
      Left            =   5040
      TabIndex        =   15
      Top             =   1800
      Width           =   375
   End
   Begin VB.Label Label4 
      Caption         =   "O"
      Height          =   255
      Left            =   5040
      TabIndex        =   14
      Top             =   1320
      Width           =   375
   End
   Begin VB.Label Label3 
      BackColor       =   &H00000000&
      Height          =   255
      Left            =   4440
      TabIndex        =   13
      Top             =   1800
      Width           =   375
   End
   Begin VB.Label Label2 
      BackColor       =   &H000000FF&
      Height          =   255
      Left            =   4440
      TabIndex        =   12
      Top             =   1320
      Width           =   375
   End
   Begin VB.Label Label1 
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
      Height          =   495
      Left            =   960
      TabIndex        =   1
      Top             =   3480
      Width           =   3495
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit
Private A, c, d, Value As Integer

Private Sub Command1_Click(Index As Integer)
    'Call DoPlay(Command1(Index))
        If (Command1(Index).Caption = "") Then
    Picture1.Height = 3555
    End If
    WriteOX Command1(Index)
     
End Sub

Private Sub WriteOX(ByVal cmd As CommandButton)
    If (cmd.Caption <> "X" And cmd.Caption <> "O") Then
        A = A + 1
        c = c + 1
        If (2 * Fix(A / 2) = A And c < 10) Then
            cmd.Caption = "X"
            Picture1.BackColor = 255
        ElseIf (2 * Fix(A / 2) <> A And c < 10) Then
            cmd.Caption = "O"
            Picture1.BackColor = 0
        End If
    End If
End Sub

Private Sub Command2_Click()
Dim i As Integer
For i = 0 To 8
    Command1(i).Caption = ""
    Next
    c = 0
    A = 0
    Label1.Caption = ""
    Timer1.Enabled = True
    Picture1.Height = 3555
End Sub

Private Sub Timer1_Timer()
Dim j As Integer
Dim i, a1, a2, a3, a4, a5, a6, a7, a8, a9, b(8) As Integer
    
    If (c = 0) Then
        Picture1.BackColor = 255
    End If
    For i = 0 To 8
        If (Command1(i).Caption = "X") Then
            b(i) = 1
        End If
        If (Command1(i).Caption = "O") Then
            b(i) = 2
        End If
    Next i
    
    a1 = b(0)
    a2 = b(1)
    a3 = b(2)
    a4 = b(3)
    a5 = b(4)
    a6 = b(5)
    a7 = b(6)
    a8 = b(7)
    a9 = b(8)
    
        If (c = 9) Then
            Label1.Caption = "Draw!"
            Timer1.Enabled = False
        End If
        
        If (a1 = a2 And a2 = a3 And a3 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a1 = a2 And a2 = a3 And a3 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a4 = a5 And a5 = a6 And a6 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a4 = a5 And a5 = a6 And a6 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a7 = a8 And a8 = a9 And a9 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a7 = a8 And a8 = a9 And a9 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        
        ElseIf (a1 = a4 And a4 = a7 And a7 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a1 = a4 And a4 = a7 And a7 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a2 = a5 And a5 = a8 And a8 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a2 = a5 And a5 = a8 And a8 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a3 = a6 And a6 = a9 And a9 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a3 = a6 And a6 = a9 And a9 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
            
        ElseIf (a1 = a5 And a5 = a9 And a9 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a1 = a5 And a5 = a9 And a9 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a3 = a5 And a5 = a7 And a7 = 1) Then
            Label1.Caption = "Player 2(X) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        ElseIf (a3 = a5 And a5 = a7 And a7 = 2) Then
            Label1.Caption = "Player 1(O) Win!"
            c = 10
            Timer1.Enabled = False
            Exit Sub
        End If
        
    If (Picture1.Height > 100) Then
        Picture1.Height = Picture1.Height - 100
    End If
    
    If (Picture1.Height < 100) Then
AB:
        Randomize
        Value = Fix((9 * Rnd))
        If (Command1(Value).Caption <> "") Then GoTo AB
            
        WriteOX Command1(Value)
        Picture1.Height = 3555
        Value = 0
    End If
End Sub
