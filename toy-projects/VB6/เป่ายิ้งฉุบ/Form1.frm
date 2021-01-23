VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   5055
   ClientLeft      =   120
   ClientTop       =   420
   ClientWidth     =   8025
   LinkTopic       =   "Form1"
   ScaleHeight     =   5055
   ScaleWidth      =   8025
   StartUpPosition =   3  'Windows Default
   Begin VB.Frame Frame1 
      BorderStyle     =   0  'None
      Height          =   4695
      Left            =   240
      TabIndex        =   14
      Top             =   240
      Visible         =   0   'False
      Width           =   7575
      Begin VB.Label Label13 
         Alignment       =   2  'Center
         Caption         =   "Game Over!"
         BeginProperty Font 
            Name            =   "MS Sans Serif"
            Size            =   24
            Charset         =   222
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   855
         Left            =   1200
         TabIndex        =   17
         Top             =   480
         Width           =   4935
      End
      Begin VB.Label Label11 
         Alignment       =   2  'Center
         BeginProperty Font 
            Name            =   "Myriad Web Pro"
            Size            =   60
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   1815
         Left            =   720
         TabIndex        =   15
         Top             =   2160
         Width           =   6135
      End
   End
   Begin VB.CommandButton Command4 
      Caption         =   "Next Round"
      Height          =   375
      Left            =   600
      TabIndex        =   10
      Top             =   1440
      Visible         =   0   'False
      Width           =   1215
   End
   Begin VB.Timer tmrCount 
      Enabled         =   0   'False
      Interval        =   100
      Left            =   0
      Top             =   3120
   End
   Begin VB.CommandButton Command3 
      Caption         =   "กระดาษ"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   6000
      TabIndex        =   3
      Top             =   2040
      Width           =   1095
   End
   Begin VB.CommandButton Command2 
      Caption         =   "กรรไกร"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   6000
      TabIndex        =   2
      Top             =   1200
      Width           =   1095
   End
   Begin VB.CommandButton Command1 
      Caption         =   "ค้อน"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   6000
      TabIndex        =   1
      Top             =   360
      Width           =   1095
   End
   Begin VB.Label Label12 
      Caption         =   "2 Score = Win!"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000C000&
      Height          =   495
      Left            =   600
      TabIndex        =   16
      Top             =   960
      Visible         =   0   'False
      Width           =   1815
   End
   Begin VB.Label Label10 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   2280
      TabIndex        =   13
      Top             =   4320
      Width           =   735
   End
   Begin VB.Label Label9 
      Alignment       =   2  'Center
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   720
      TabIndex        =   12
      Top             =   4320
      Width           =   735
   End
   Begin VB.Label Label8 
      Alignment       =   2  'Center
      Caption         =   "You        Computer"
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
      Left            =   600
      TabIndex        =   11
      Top             =   3720
      Visible         =   0   'False
      Width           =   2775
   End
   Begin VB.Label Label7 
      Alignment       =   2  'Center
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   24
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   4440
      TabIndex        =   9
      Top             =   2880
      Visible         =   0   'False
      Width           =   1815
   End
   Begin VB.Label Label6 
      Caption         =   "You Choose : "
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   14.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   615
      Left            =   3960
      TabIndex        =   8
      Top             =   2160
      Visible         =   0   'False
      Width           =   1815
   End
   Begin VB.Label Label5 
      Caption         =   "You Choose : "
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   14.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   615
      Left            =   3960
      TabIndex        =   7
      Top             =   1320
      Visible         =   0   'False
      Width           =   1815
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
      Height          =   735
      Left            =   4200
      TabIndex        =   6
      Top             =   3720
      Width           =   2295
   End
   Begin VB.Label Label3 
      Caption         =   "You Choose : "
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   14.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FF0000&
      Height          =   615
      Left            =   3960
      TabIndex        =   5
      Top             =   480
      Visible         =   0   'False
      Width           =   1815
   End
   Begin VB.Label Label2 
      Caption         =   "And then computer choose..."
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   14.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H000000FF&
      Height          =   495
      Left            =   720
      TabIndex        =   4
      Top             =   3000
      Visible         =   0   'False
      Width           =   3855
   End
   Begin VB.Label Label1 
      Caption         =   "Choose something"
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
      Left            =   600
      TabIndex        =   0
      Top             =   240
      Width           =   2895
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit

Private sec1, x, a, b, comValue As Integer

Private Sub Command1_Click()
Command2.Visible = False
Command3.Visible = False
tmrCount.Enabled = True
x = 1
End Sub

Private Sub Command2_Click()
Command1.Visible = False
Command3.Visible = False
tmrCount.Enabled = True
x = 2
End Sub

Private Sub Command3_Click()
Command1.Visible = False
Command2.Visible = False
tmrCount.Enabled = True
x = 3
End Sub

Private Sub Command4_Click()
tmrCount.Interval = 0
tmrCount.Enabled = False
tmrCount.Interval = 100
sec1 = 0
Command1.Visible = True
Command2.Visible = True
Command3.Visible = True
Label2.Visible = False
Label3.Visible = False
Label4.Caption = ""
Label5.Visible = False
Label6.Visible = False
Label7.Visible = False
Command4.Visible = False
End Sub



Private Sub tmrCount_Timer()
        sec1 = sec1 + 1
    If (sec1 > 20 And sec1 <= 50) Then
    Randomize
        comValue = Fix((3 * Rnd) + 1)
        If (x = 1) Then
            Label3.Visible = True
            ElseIf (x = 2) Then
            Label5.Visible = True
            Else
            Label6.Visible = True
        End If
    End If
    If (sec1 > 50) Then
        Label2.Visible = Not Label2.Visible
    End If
    If (sec1 > 60) Then
        Label2.Visible = True
    End If
    If (sec1 > 70) Then
        If (comValue = 1) Then
    Label7.Caption = Command1.Caption & "!"
    ElseIf (comValue = 2) Then
    Label7.Caption = Command2.Caption & "!"
    Else
    Label7.Caption = Command3.Caption & "!"
    End If
        Label7.Visible = True
    End If
    
    If (sec1 > 100 And sec1 < 102) Then
        If (x = comValue) Then
            Label4.Caption = "Draw!"
        ElseIf ((x = 1 And comValue = 2) Or (x = 2 And comValue = 3) Or (x = 3 And comValue = 1)) Then
            Label4.Caption = "You Win!"
            a = a + 1
        Else
            If (x <> 0) Then
            Label4.Caption = "You Lost!"
            b = b + 1
            End If
        End If
        Label8.Visible = True
        Label9.Caption = "" & (0 + a)
        Label10.Caption = "" & (0 + b)
        Command4.Visible = True
        Label12.Visible = True
        If (a > 1) Then
        Frame1.Visible = True
        Label11.Caption = "You Win!"
        ElseIf (b > 1) Then
        Frame1.Visible = True
        Label11.Caption = "You Lose!"
        End If
    End If
End Sub
