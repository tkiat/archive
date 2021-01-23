VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   3840
   ClientLeft      =   2445
   ClientTop       =   1905
   ClientWidth     =   6375
   LinkTopic       =   "Form1"
   ScaleHeight     =   3840
   ScaleWidth      =   6375
   Begin VB.CommandButton Command5 
      Caption         =   "OK"
      Height          =   255
      Left            =   3120
      TabIndex        =   12
      Top             =   3120
      Width           =   615
   End
   Begin VB.TextBox Text1 
      Height          =   285
      Left            =   1800
      TabIndex        =   11
      Top             =   3090
      Width           =   1215
   End
   Begin VB.CommandButton Command4 
      Caption         =   "Reset Actual Timer"
      Height          =   375
      Left            =   4320
      TabIndex        =   9
      Top             =   2280
      Width           =   1575
   End
   Begin VB.CommandButton Command3 
      Caption         =   "Reset 4X Timer"
      Height          =   375
      Left            =   240
      TabIndex        =   8
      Top             =   2280
      Width           =   1575
   End
   Begin VB.CommandButton Command2 
      Caption         =   "Stop Actual Timer"
      Height          =   375
      Left            =   4320
      TabIndex        =   6
      Top             =   1800
      Width           =   1575
   End
   Begin VB.CommandButton Command1 
      Caption         =   "Start Actual Timer"
      Height          =   375
      Left            =   4320
      TabIndex        =   5
      Top             =   1320
      Width           =   1575
   End
   Begin VB.Timer Clock2 
      Enabled         =   0   'False
      Interval        =   1000
      Left            =   5760
      Top             =   3120
   End
   Begin VB.CheckBox Check1 
      Caption         =   "Stop Clock"
      Height          =   375
      Left            =   2520
      TabIndex        =   4
      Top             =   2400
      Width           =   1335
   End
   Begin VB.Timer Timer1 
      Interval        =   250
      Left            =   4440
      Top             =   3120
   End
   Begin VB.CommandButton cmdStop 
      Caption         =   "Stop 4X Timer"
      Height          =   375
      Left            =   240
      TabIndex        =   1
      Top             =   1800
      Width           =   1575
   End
   Begin VB.CommandButton cmdStart 
      Caption         =   "Start 4X Timer"
      Height          =   375
      Left            =   240
      TabIndex        =   0
      Top             =   1320
      Width           =   1575
   End
   Begin VB.Timer Clock1 
      Enabled         =   0   'False
      Interval        =   250
      Left            =   5160
      Top             =   3120
   End
   Begin VB.Label Label3 
      Caption         =   "Count from 1 to "
      Height          =   495
      Left            =   600
      TabIndex        =   10
      Top             =   3120
      Width           =   1575
   End
   Begin VB.Label Label2 
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
      Height          =   855
      Left            =   3240
      TabIndex        =   7
      Top             =   240
      Width           =   2655
   End
   Begin VB.Label Tim 
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
      ForeColor       =   &H80000007&
      Height          =   735
      Left            =   2160
      TabIndex        =   3
      Top             =   1320
      Width           =   1935
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
      Height          =   855
      Left            =   480
      TabIndex        =   2
      Top             =   240
      Width           =   2535
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private mintcount1, mintcount2 As Integer
Private limit As Long
Private Sub Check1_Click()
If (Check1.Value = 0) Then
Timer1.Enabled = True
Else
Timer1.Enabled = False
End If
End Sub

Private Sub Clock1_Timer()
mintcount1 = mintcount1 + 1
Label1 = "Count = " & mintcount1 & vbNewLine

If (mintcount1 = limit + 11) Then
mintcount1 = 0
Label1 = ""
End If
End Sub

Private Sub Clock2_Timer()
mintcount2 = mintcount2 + 1
Label2 = "Count = " & mintcount2 & vbNewLine

If (mintcount2 = limit + 11) Then
mintcount2 = 0
Label2 = ""
End If
End Sub

Private Sub cmdStart_Click()

If (mintcount1 > 0) Then
A = mintcount1
End If
mintcount1 = 0
mintcount1 = A
    
    Clock1.Enabled = True

End Sub


Private Sub cmdStop_Click()

    Clock1.Enabled = False

End Sub



Private Sub Command1_Click()
If (mintcount2 > 0) Then
A = mintcount2
End If
mintcount2 = 0
mintcount2 = A
Clock2.Enabled = True
End Sub

Private Sub Command2_Click()
Clock2.Enabled = False
End Sub

Private Sub Command3_Click()
mintcount1 = 0
Label1 = "Count = " & mintcount1 + 1 & vbNewLine
End Sub

Private Sub Command4_Click()
mintcount2 = 0
Label2 = "Count = " & mintcount2 + 1 & vbNewLine
End Sub

Private Sub Command5_Click()
If (Text1.Text <> "") Then
limit = Fix(Text1.Text) - 10
End If
End Sub

Private Sub Timer1_Timer()

Tim.Caption = Time()

End Sub

