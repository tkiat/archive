VERSION 5.00
Begin VB.Form frmConversion 
   Caption         =   "Form1"
   ClientHeight    =   1950
   ClientLeft      =   120
   ClientTop       =   420
   ClientWidth     =   3615
   LinkTopic       =   "Form1"
   ScaleHeight     =   1950
   ScaleWidth      =   3615
   StartUpPosition =   3  'Windows Default
   Begin VB.TextBox txtGrade 
      Height          =   285
      Left            =   1800
      TabIndex        =   4
      Top             =   840
      Width           =   975
   End
   Begin VB.TextBox txtScore 
      Height          =   285
      Left            =   720
      TabIndex        =   3
      Top             =   840
      Width           =   975
   End
   Begin VB.CommandButton btnConvert 
      Caption         =   "Convert"
      Height          =   255
      Left            =   1080
      TabIndex        =   0
      Top             =   1320
      Width           =   1335
   End
   Begin VB.Label lblGrade 
      Caption         =   "Grade"
      Height          =   255
      Left            =   2040
      TabIndex        =   2
      Top             =   600
      Width           =   495
   End
   Begin VB.Label lblScore 
      Caption         =   "Score"
      Height          =   255
      Left            =   960
      TabIndex        =   1
      Top             =   600
      Width           =   735
   End
End
Attribute VB_Name = "frmConversion"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub btnConvert_Click()

    If (txtScore.Text <> "" And txtGrade.Text <> "") Then
        code = MsgBox("Please input either Score or Grade only!", vbOKOnly, "Error")
        End If
        
If (txtScore.Text <> "" And txtGrade.Text = "") Then
        If IsNumeric(txtScore.Text) Then
            Select Case CInt(txtScore.Text)
                Case Is > 100
                    MsgBox ("Please input number below 100!")
                Case Is < 0
                    MsgBox ("Please input number 0 and more!")
                Case Is >= 90
                    txtGrade.Text = "A"
                Case Is >= 85
                    txtGrade.Text = "B+"
                Case Is >= 75
                    txtGrade.Text = "B"
                Case Is >= 70
                    txtGrade.Text = "C+"
                Case Is >= 65
                    txtGrade.Text = "C"
                Case Is >= 60
                    txtGrade.Text = "D+"
                Case Is >= 55
                    txtGrade.Text = "D"
                Case Else
                    txtGrade.Text = "F"
                    Exit Sub
            End Select
        Else
            MsgBox ("Please input an integer!")
            Exit Sub
        End If
        End If
    
    If (txtGrade.Text <> "" And txtScore.Text = "") Then
            Select Case (txtGrade.Text)
                Case Is = "A"
                    txtScore.Text = "90-100"
                Case Is = "B+"
                    txtScore.Text = "85-89"
                Case Is = "B"
                    txtScore.Text = "75-84"
                Case Is = "C+"
                    txtScore.Text = "70-74"
                Case Is = "C"
                    txtScore.Text = "65-69"
                Case Is = "D+"
                    txtScore.Text = "60-64"
                Case Is = "D"
                    txtScore.Text = "55-59"
                Case Is = "F"
                    txtScore.Text = "0-54"
                Case Else
                    MsgBox ("Please input only A-F Grade!")
                    Exit Sub
            End Select
        End If
    If (txtScore.Text = "" And txtGrade.Text = "") Then
        MsgBox ("Please input something!")
        Exit Sub
        End If

End Sub
