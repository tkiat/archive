VERSION 5.00
Begin VB.Form Form1 
   Caption         =   "Form1"
   ClientHeight    =   5430
   ClientLeft      =   225
   ClientTop       =   525
   ClientWidth     =   8055
   BeginProperty Font 
      Name            =   "MS Sans Serif"
      Size            =   18
      Charset         =   222
      Weight          =   400
      Underline       =   0   'False
      Italic          =   0   'False
      Strikethrough   =   0   'False
   EndProperty
   LinkTopic       =   "Form1"
   ScaleHeight     =   5430
   ScaleWidth      =   8055
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton Command2 
      Caption         =   "C"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   2880
      TabIndex        =   29
      Top             =   3000
      Width           =   615
   End
   Begin VB.PictureBox Picture5 
      Height          =   855
      Left            =   6000
      Picture         =   "Form1.frx":0000
      ScaleHeight     =   795
      ScaleWidth      =   675
      TabIndex        =   28
      Top             =   1920
      Visible         =   0   'False
      Width           =   735
   End
   Begin VB.PictureBox Picture4 
      Height          =   855
      Left            =   6000
      Picture         =   "Form1.frx":04AF
      ScaleHeight     =   795
      ScaleWidth      =   675
      TabIndex        =   27
      Top             =   1920
      Visible         =   0   'False
      Width           =   735
   End
   Begin VB.PictureBox Picture3 
      Height          =   855
      Left            =   6000
      Picture         =   "Form1.frx":06A1
      ScaleHeight     =   795
      ScaleWidth      =   675
      TabIndex        =   26
      Top             =   1920
      Visible         =   0   'False
      Width           =   735
   End
   Begin VB.PictureBox Picture2 
      Height          =   855
      Left            =   6000
      Picture         =   "Form1.frx":089B
      ScaleHeight     =   795
      ScaleWidth      =   555
      TabIndex        =   24
      Top             =   1920
      Visible         =   0   'False
      Width           =   615
   End
   Begin VB.PictureBox Picture1 
      Height          =   855
      Left            =   6000
      Picture         =   "Form1.frx":0AA5
      ScaleHeight     =   795
      ScaleWidth      =   675
      TabIndex        =   23
      Top             =   1920
      Visible         =   0   'False
      Width           =   735
   End
   Begin VB.TextBox Text4 
      Enabled         =   0   'False
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Left            =   240
      TabIndex        =   21
      Text            =   "Expression"
      Top             =   1320
      Width           =   1695
   End
   Begin VB.CheckBox Check9 
      Caption         =   "sqrt(A)"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   3840
      TabIndex        =   20
      Top             =   2400
      Width           =   975
   End
   Begin VB.CheckBox Check8 
      Caption         =   "log(A)"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   3840
      TabIndex        =   19
      Top             =   1800
      Width           =   855
   End
   Begin VB.CheckBox Check7 
      Caption         =   "Display time"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   240
      TabIndex        =   18
      Top             =   3000
      Width           =   1335
   End
   Begin VB.CheckBox Check6 
      Caption         =   "A % B"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   2880
      TabIndex        =   17
      Top             =   2400
      Width           =   975
   End
   Begin VB.CheckBox Check5 
      Caption         =   "A^B"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   2880
      TabIndex        =   16
      Top             =   1800
      Width           =   855
   End
   Begin VB.CheckBox Check4 
      Caption         =   "/"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   2280
      TabIndex        =   15
      Top             =   2400
      Width           =   495
   End
   Begin VB.CheckBox Check3 
      Caption         =   "*"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   2280
      TabIndex        =   14
      Top             =   1920
      Width           =   375
   End
   Begin VB.TextBox Text3 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   2160
      TabIndex        =   11
      Text            =   "Result"
      Top             =   1320
      Width           =   2535
   End
   Begin VB.TextBox Text2 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   2160
      TabIndex        =   10
      Top             =   840
      Width           =   1815
   End
   Begin VB.ComboBox Combo1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   315
      Left            =   240
      TabIndex        =   8
      Top             =   4200
      Width           =   1935
   End
   Begin VB.OptionButton Option2 
      Caption         =   "Decimal"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00000000&
      Height          =   495
      Left            =   240
      TabIndex        =   6
      Top             =   2400
      Value           =   -1  'True
      Width           =   1095
   End
   Begin VB.OptionButton Option1 
      Caption         =   "Integer"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   240
      TabIndex        =   5
      Top             =   1920
      Width           =   1095
   End
   Begin VB.CheckBox Check2 
      Caption         =   "-"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   1560
      TabIndex        =   4
      Top             =   2400
      Width           =   495
   End
   Begin VB.CheckBox Check1 
      Caption         =   "+"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   615
      Left            =   1560
      TabIndex        =   3
      Top             =   1800
      Width           =   495
   End
   Begin VB.TextBox Text1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   2160
      TabIndex        =   1
      Top             =   240
      Width           =   1815
   End
   Begin VB.CommandButton Command1 
      Caption         =   "="
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   1560
      TabIndex        =   0
      Top             =   3000
      Width           =   1095
   End
   Begin VB.Timer Timer1 
      Interval        =   250
      Left            =   3840
      Top             =   3480
   End
   Begin VB.Label Label7 
      Alignment       =   2  'Center
      Height          =   615
      Left            =   5520
      TabIndex        =   25
      Top             =   3000
      Width           =   1695
   End
   Begin VB.Label Label4 
      Caption         =   "="
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   12
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   1920
      TabIndex        =   22
      Top             =   1320
      Width           =   255
   End
   Begin VB.Label Label6 
      Caption         =   "Insert 2nd number here"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   240
      TabIndex        =   13
      Top             =   840
      Width           =   1695
   End
   Begin VB.Label Label5 
      Caption         =   "Insert 1st number here"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   240
      TabIndex        =   12
      Top             =   240
      Width           =   1695
   End
   Begin VB.Label Label3 
      Height          =   660
      Left            =   5880
      TabIndex        =   9
      Top             =   4680
      Width           =   2055
   End
   Begin VB.Label Label2 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   4200
      TabIndex        =   7
      Top             =   240
      Width           =   2895
   End
   Begin VB.Label Label1 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   222
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   360
      TabIndex        =   2
      Top             =   4680
      Width           =   2895
   End
   Begin VB.Label Label8 
      Height          =   5415
      Left            =   0
      TabIndex        =   30
      Top             =   0
      Width           =   8055
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Public Sub Command1_Click()
Dim a, i As Integer

    a = Check1.Value + Check2.Value + Check3.Value + Check4.Value + Check5.Value + Check6.Value + Check8.Value + Check9.Value
    
    Text3.Text = Text1.Text
    If (Text1.Text = "" And Text2.Text = "") Then
        Exit Sub
    End If

    If (Text2.Text <> "" And Text1.Text = "" And a > 0) Then
        Text4.Text = "Error!"
        Text3.Text = "Syntax Error!"
        Exit Sub
    End If
    
    If (Text1.Text <> "" And Text2.Text = "" And a - Check8.Value - Check9.Value > 0) Then
        Text4.Text = "Error!"
        Text3.Text = "Syntax Error!"
        Exit Sub
    End If
    
    If (Check1.Value = 1) Then
        Text3.Text = -(-(Text1.Text) - (Text2.Text))
        Text4.Text = Text1.Text + " + " + Text2.Text
    ElseIf (Check2.Value = 1) Then
        Text3.Text = Text1.Text - Text2.Text
        Text4.Text = Text1.Text + " - " + Text2.Text
    ElseIf (Check3.Value = 1) Then
        Text3.Text = Text1.Text * Text2.Text
        Text4.Text = Text1.Text + " * " + Text2.Text
    ElseIf (Check4.Value = 1) Then
        Text3.Text = Text1.Text / Text2.Text
        Text4.Text = Text1.Text + " / " + Text2.Text
    ElseIf (Check5.Value = 1) Then
        For i = 2 To Text2.Text
            Text3.Text = Text1.Text * Text3.Text
        Next i
        Text4.Text = Text1.Text + "^" + Text2.Text
    ElseIf (Check6.Value = 1) Then
        Text3.Text = Text1.Text - Text2.Text * Fix(Text1.Text / Text2.Text)
        Text4.Text = Text1.Text + " % " + Text2.Text
    ElseIf (Check8.Value = 1) Then
        Text3.Text = Log(Text1.Text) / Log(10)
        Text4.Text = "log(" + Text1.Text + ")"
    ElseIf (Check9.Value = 1) Then
        Text3.Text = Sqr(Text1.Text)
        Text4.Text = "sqrt(" + Text1.Text + ")"
    End If

    If (a > 1) Then
        Text3.Text = "Please press only one button!!"
        Text4.Text = "Error!"
    End If
    If (a = 0) Then
        Text3.Text = "Press one button!!"
        Text4.Text = "Error!"
    End If

    If (Option1.Value = True) Then
        If (Text3.Text - Fix(Text3.Text) < 0.5) Then
            Text3.Text = Fix(Text3.Text)
        Else
            Text3.Text = Fix(Text3.Text) + 1
        End If
    End If

End Sub

Private Sub Command2_Click()
Text1.Text = ""
Text2.Text = ""
Text3.Text = ""
Text4.Text = ""

End Sub

Private Sub form_load()
For i = 1 To 5
Combo1.AddItem "Number " & i
Next

End Sub


Public Sub Timer1_Timer()
    If (Check7.Value = 1) Then
        Label3.Caption = Time()
    Else
        Label3.Caption = ""
    End If

        Picture1.Visible = False
        Picture2.Visible = False
        Picture3.Visible = False
        Picture4.Visible = False
        Picture5.Visible = False
    If (Combo1.Text = "Number 1") Then
        Label7.Caption = "One"
        Label8.BackColor = RGB(240, 240, 240)
        Picture1.Visible = True
    ElseIf (Combo1.Text = "Number 2") Then
        Label7.Caption = "Two"
        Picture2.Visible = True
        Label8.BackColor = RGB(255, 220, 220)
    ElseIf (Combo1.Text = "Number 3") Then
        Label7.Caption = "Three"
        Picture3.Visible = True
        Label8.BackColor = RGB(220, 220, 255)
    ElseIf (Combo1.Text = "Number 4") Then
        Label7.Caption = "Four"
        Picture4.Visible = True
        Label8.BackColor = RGB(220, 255, 220)
    ElseIf (Combo1.Text = "Number 5") Then
        Label7.Caption = "Five"
        Picture5.Visible = True
        Label8.BackColor = RGB(200, 255, 255)
    End If
    
    If (Combo1.Text <> "") Then
        Label1.Caption = "You choose " & Combo1.Text
    Else
        Label1.Caption = "Choose one number to display!"
    End If

    If ((Option1.Value = True) And (Option2.Value = False)) Then
        Label2.Caption = "Integer mode"
    ElseIf ((Option1.Value = False) And (Option2.Value = True)) Then
        Label2.Caption = "Decimal mode"
    End If
    
End Sub
