VERSION 5.00
Begin VB.Form frmDraw 
   Caption         =   "Drawing"
   ClientHeight    =   4800
   ClientLeft      =   60
   ClientTop       =   405
   ClientWidth     =   8535
   LinkTopic       =   "Form1"
   ScaleHeight     =   4800
   ScaleWidth      =   8535
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton cmdClear 
      Caption         =   "Clear"
      Height          =   495
      Left            =   120
      TabIndex        =   0
      Top             =   120
      Width           =   1215
   End
End
Attribute VB_Name = "frmDraw"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private Sub cmdClear_Click()
    frmDraw.Cls
End Sub

Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    frmDraw.CurrentX = X
    frmDraw.CurrentY = Y
End Sub

Private Sub Form_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If Button = 1 Then
        Line (frmDraw.CurrentX, frmDraw.CurrentY)-(X, Y)
    End If
    If Button = 2 Then
        Circle (X, Y), 500
    End If
End Sub


