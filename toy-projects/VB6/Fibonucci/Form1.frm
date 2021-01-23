VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   1620
   ClientLeft      =   120
   ClientTop       =   420
   ClientWidth     =   10980
   LinkTopic       =   "Form1"
   ScaleHeight     =   1620
   ScaleWidth      =   10980
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton Command1 
      Caption         =   "Display"
      Height          =   255
      Left            =   3960
      TabIndex        =   3
      Top             =   240
      Width           =   735
   End
   Begin VB.TextBox Text1 
      Height          =   285
      Left            =   3000
      TabIndex        =   1
      Top             =   240
      Width           =   735
   End
   Begin VB.Label Label5 
      Caption         =   "TM"
      Height          =   255
      Left            =   10440
      TabIndex        =   6
      Top             =   120
      Width           =   495
   End
   Begin VB.Label Label4 
      Caption         =   "Fibonucci Number Generator"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Left            =   7920
      TabIndex        =   5
      Top             =   240
      Width           =   2775
   End
   Begin VB.Label Label3 
      Caption         =   "Caution! Put number between 3-22 !"
      Height          =   375
      Left            =   5040
      TabIndex        =   4
      Top             =   240
      Width           =   2655
   End
   Begin VB.Label Label2 
      Height          =   255
      Left            =   240
      TabIndex        =   2
      Top             =   840
      Width           =   12375
   End
   Begin VB.Label Label1 
      Alignment       =   2  'Center
      Caption         =   "Input number displayed"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   9.75
         Charset         =   222
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   240
      TabIndex        =   0
      Top             =   240
      Width           =   2535
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Command1_Click()
    Dim Arrays(100) As Integer
    Dim a, b As Integer
        Label2.Caption = ""
        If (Text1.Text <> "") Then
            If (Text1.Text < 3 Or Text1.Text > 22) Then
                MsgBox "Please input again!", vbOKOnly, "Error!"
                Exit Sub
            End If
        
            If (Text1.Text < 23) Then
                a = Text1.Text
            Else
                a = 22
            End If
        
                Arrays(0) = 1
                Arrays(1) = 1
                For i = 2 To Text1.Text
                Arrays(i) = Arrays(i - 1) + Arrays(i - 2)
                Next i
            
                Label2.Caption = Label2.Caption + "1 1"
            if(text1.Text )
            For i = 2 To a
                Label2.Caption = Label2.Caption + " " & Arrays(i)
            Next i
        Else
            MsgBox "Please input something!", vbYes + vbExclamation, "Attention!"
        End If
End Sub


