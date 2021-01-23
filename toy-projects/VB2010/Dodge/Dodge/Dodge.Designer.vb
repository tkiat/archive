<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Dodge
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.components = New System.ComponentModel.Container()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Dodge))
        Me.tmrRun = New System.Windows.Forms.Timer(Me.components)
        Me.tmrRandomTeki = New System.Windows.Forms.Timer(Me.components)
        Me.tmrScore = New System.Windows.Forms.Timer(Me.components)
        Me.tmrCount = New System.Windows.Forms.Timer(Me.components)
        Me.Slow = New System.Windows.Forms.Panel()
        Me.Label6 = New System.Windows.Forms.Label()
        Me.AddScore = New System.Windows.Forms.Panel()
        Me.lblAdd = New System.Windows.Forms.Label()
        Me.Fire = New System.Windows.Forms.Panel()
        Me.Label16 = New System.Windows.Forms.Label()
        Me.DodgeField = New System.Windows.Forms.Panel()
        Me.Heart = New System.Windows.Forms.Panel()
        Me.Teki4 = New System.Windows.Forms.PictureBox()
        Me.Teki3 = New System.Windows.Forms.PictureBox()
        Me.Person = New System.Windows.Forms.PictureBox()
        Me.Teki1 = New System.Windows.Forms.PictureBox()
        Me.Teki2 = New System.Windows.Forms.PictureBox()
        Me.lblCheatEnable = New System.Windows.Forms.Label()
        Me.lblPlusOne = New System.Windows.Forms.Label()
        Me.MenuBar = New System.Windows.Forms.MenuStrip()
        Me.ToolStripMenuItem1 = New System.Windows.Forms.ToolStripMenuItem()
        Me.ToolStripMenuItem3 = New System.Windows.Forms.ToolStripMenuItem()
        Me.ESCToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.RwerwToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.LeftRightUpDownToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.btnPlay = New System.Windows.Forms.Button()
        Me.lblLivesLeft = New System.Windows.Forms.Label()
        Me.lblLives = New System.Windows.Forms.Label()
        Me.Label7 = New System.Windows.Forms.Label()
        Me.lblScores = New System.Windows.Forms.Label()
        Me.Panel2 = New System.Windows.Forms.Panel()
        Me.lblAdd2 = New System.Windows.Forms.Label()
        Me.lblAddScore = New System.Windows.Forms.Label()
        Me.lblSlowDown = New System.Windows.Forms.Label()
        Me.Panel3 = New System.Windows.Forms.Panel()
        Me.Label11 = New System.Windows.Forms.Label()
        Me.Label12 = New System.Windows.Forms.Label()
        Me.Panel4 = New System.Windows.Forms.Panel()
        Me.Panel5 = New System.Windows.Forms.Panel()
        Me.Label19 = New System.Windows.Forms.Label()
        Me.Label14 = New System.Windows.Forms.Label()
        Me.lbl1stPerson = New System.Windows.Forms.Label()
        Me.lblTurBo = New System.Windows.Forms.Label()
        Me.lbl1st = New System.Windows.Forms.Label()
        Me.lblExtraLive = New System.Windows.Forms.Label()
        Me.lbl2nd = New System.Windows.Forms.Label()
        Me.lbl2ndPerson = New System.Windows.Forms.Label()
        Me.lbl1stPoint = New System.Windows.Forms.Label()
        Me.lbl2ndPoint = New System.Windows.Forms.Label()
        Me.Title = New System.Windows.Forms.Panel()
        Me.lblExtraLarge = New System.Windows.Forms.Label()
        Me.ExtraLarge = New System.Windows.Forms.PictureBox()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.lblTiny = New System.Windows.Forms.Label()
        Me.lblMedium = New System.Windows.Forms.Label()
        Me.lblLarge = New System.Windows.Forms.Label()
        Me.Large = New System.Windows.Forms.PictureBox()
        Me.Medium = New System.Windows.Forms.PictureBox()
        Me.Tiny = New System.Windows.Forms.PictureBox()
        Me.Panel7 = New System.Windows.Forms.Panel()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Slow.SuspendLayout()
        Me.AddScore.SuspendLayout()
        Me.Fire.SuspendLayout()
        Me.DodgeField.SuspendLayout()
        CType(Me.Teki4, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Teki3, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Person, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Teki1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Teki2, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.MenuBar.SuspendLayout()
        Me.Panel2.SuspendLayout()
        Me.Panel3.SuspendLayout()
        Me.Panel4.SuspendLayout()
        Me.Panel5.SuspendLayout()
        Me.Title.SuspendLayout()
        CType(Me.ExtraLarge, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Large, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Medium, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Tiny, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'tmrRun
        '
        Me.tmrRun.Enabled = True
        Me.tmrRun.Interval = 10
        '
        'tmrRandomTeki
        '
        Me.tmrRandomTeki.Interval = 600
        '
        'tmrScore
        '
        Me.tmrScore.Interval = 200
        '
        'tmrCount
        '
        Me.tmrCount.Interval = 10000
        '
        'Slow
        '
        Me.Slow.BackColor = System.Drawing.Color.Aquamarine
        Me.Slow.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Slow.Controls.Add(Me.Label6)
        resources.ApplyResources(Me.Slow, "Slow")
        Me.Slow.Name = "Slow"
        '
        'Label6
        '
        resources.ApplyResources(Me.Label6, "Label6")
        Me.Label6.Name = "Label6"
        '
        'AddScore
        '
        Me.AddScore.BackColor = System.Drawing.Color.Lime
        Me.AddScore.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.AddScore.Controls.Add(Me.lblAdd)
        resources.ApplyResources(Me.AddScore, "AddScore")
        Me.AddScore.Name = "AddScore"
        '
        'lblAdd
        '
        resources.ApplyResources(Me.lblAdd, "lblAdd")
        Me.lblAdd.Name = "lblAdd"
        '
        'Fire
        '
        Me.Fire.BackColor = System.Drawing.Color.Tomato
        Me.Fire.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Fire.Controls.Add(Me.Label16)
        resources.ApplyResources(Me.Fire, "Fire")
        Me.Fire.Name = "Fire"
        '
        'Label16
        '
        resources.ApplyResources(Me.Label16, "Label16")
        Me.Label16.Name = "Label16"
        '
        'DodgeField
        '
        Me.DodgeField.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(255, Byte), Integer))
        Me.DodgeField.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.DodgeField.Controls.Add(Me.Heart)
        Me.DodgeField.Controls.Add(Me.Fire)
        Me.DodgeField.Controls.Add(Me.AddScore)
        Me.DodgeField.Controls.Add(Me.Teki4)
        Me.DodgeField.Controls.Add(Me.Teki3)
        Me.DodgeField.Controls.Add(Me.Person)
        Me.DodgeField.Controls.Add(Me.Slow)
        Me.DodgeField.Controls.Add(Me.Teki1)
        Me.DodgeField.Controls.Add(Me.Teki2)
        Me.DodgeField.Controls.Add(Me.lblCheatEnable)
        resources.ApplyResources(Me.DodgeField, "DodgeField")
        Me.DodgeField.Name = "DodgeField"
        '
        'Heart
        '
        Me.Heart.BackColor = System.Drawing.Color.Snow
        Me.Heart.BackgroundImage = Global.Dodge.My.Resources.Resources.Heart
        resources.ApplyResources(Me.Heart, "Heart")
        Me.Heart.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Heart.Name = "Heart"
        '
        'Teki4
        '
        Me.Teki4.BackColor = System.Drawing.Color.Black
        Me.Teki4.BackgroundImage = Global.Dodge.My.Resources.Resources.Human
        resources.ApplyResources(Me.Teki4, "Teki4")
        Me.Teki4.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Teki4.Name = "Teki4"
        Me.Teki4.TabStop = False
        '
        'Teki3
        '
        Me.Teki3.BackColor = System.Drawing.Color.Black
        Me.Teki3.BackgroundImage = Global.Dodge.My.Resources.Resources.Human
        resources.ApplyResources(Me.Teki3, "Teki3")
        Me.Teki3.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Teki3.Name = "Teki3"
        Me.Teki3.TabStop = False
        '
        'Person
        '
        Me.Person.BackColor = System.Drawing.Color.White
        resources.ApplyResources(Me.Person, "Person")
        Me.Person.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Person.Name = "Person"
        Me.Person.TabStop = False
        '
        'Teki1
        '
        Me.Teki1.BackColor = System.Drawing.Color.Black
        Me.Teki1.BackgroundImage = Global.Dodge.My.Resources.Resources.Human
        resources.ApplyResources(Me.Teki1, "Teki1")
        Me.Teki1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Teki1.Name = "Teki1"
        Me.Teki1.TabStop = False
        '
        'Teki2
        '
        Me.Teki2.BackColor = System.Drawing.Color.Black
        Me.Teki2.BackgroundImage = Global.Dodge.My.Resources.Resources.Human
        resources.ApplyResources(Me.Teki2, "Teki2")
        Me.Teki2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Teki2.Name = "Teki2"
        Me.Teki2.TabStop = False
        '
        'lblCheatEnable
        '
        resources.ApplyResources(Me.lblCheatEnable, "lblCheatEnable")
        Me.lblCheatEnable.Name = "lblCheatEnable"
        '
        'lblPlusOne
        '
        resources.ApplyResources(Me.lblPlusOne, "lblPlusOne")
        Me.lblPlusOne.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(255, Byte), Integer), CType(CType(192, Byte), Integer))
        Me.lblPlusOne.ForeColor = System.Drawing.Color.Red
        Me.lblPlusOne.Name = "lblPlusOne"
        '
        'MenuBar
        '
        Me.MenuBar.BackColor = System.Drawing.SystemColors.ActiveCaption
        resources.ApplyResources(Me.MenuBar, "MenuBar")
        Me.MenuBar.Items.AddRange(New System.Windows.Forms.ToolStripItem() {Me.ToolStripMenuItem1})
        Me.MenuBar.Name = "MenuBar"
        '
        'ToolStripMenuItem1
        '
        Me.ToolStripMenuItem1.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.ToolStripMenuItem3, Me.RwerwToolStripMenuItem})
        Me.ToolStripMenuItem1.Name = "ToolStripMenuItem1"
        resources.ApplyResources(Me.ToolStripMenuItem1, "ToolStripMenuItem1")
        '
        'ToolStripMenuItem3
        '
        Me.ToolStripMenuItem3.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.ESCToolStripMenuItem})
        Me.ToolStripMenuItem3.Name = "ToolStripMenuItem3"
        resources.ApplyResources(Me.ToolStripMenuItem3, "ToolStripMenuItem3")
        '
        'ESCToolStripMenuItem
        '
        Me.ESCToolStripMenuItem.Name = "ESCToolStripMenuItem"
        resources.ApplyResources(Me.ESCToolStripMenuItem, "ESCToolStripMenuItem")
        '
        'RwerwToolStripMenuItem
        '
        Me.RwerwToolStripMenuItem.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.LeftRightUpDownToolStripMenuItem})
        Me.RwerwToolStripMenuItem.Name = "RwerwToolStripMenuItem"
        resources.ApplyResources(Me.RwerwToolStripMenuItem, "RwerwToolStripMenuItem")
        '
        'LeftRightUpDownToolStripMenuItem
        '
        Me.LeftRightUpDownToolStripMenuItem.Name = "LeftRightUpDownToolStripMenuItem"
        resources.ApplyResources(Me.LeftRightUpDownToolStripMenuItem, "LeftRightUpDownToolStripMenuItem")
        '
        'btnPlay
        '
        Me.btnPlay.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(128, Byte), Integer))
        Me.btnPlay.DialogResult = System.Windows.Forms.DialogResult.Cancel
        resources.ApplyResources(Me.btnPlay, "btnPlay")
        Me.btnPlay.Name = "btnPlay"
        Me.btnPlay.UseVisualStyleBackColor = False
        '
        'lblLivesLeft
        '
        resources.ApplyResources(Me.lblLivesLeft, "lblLivesLeft")
        Me.lblLivesLeft.Name = "lblLivesLeft"
        '
        'lblLives
        '
        resources.ApplyResources(Me.lblLives, "lblLives")
        Me.lblLives.Name = "lblLives"
        '
        'Label7
        '
        resources.ApplyResources(Me.Label7, "Label7")
        Me.Label7.Name = "Label7"
        '
        'lblScores
        '
        resources.ApplyResources(Me.lblScores, "lblScores")
        Me.lblScores.Name = "lblScores"
        '
        'Panel2
        '
        Me.Panel2.BackColor = System.Drawing.Color.Lime
        Me.Panel2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Panel2.Controls.Add(Me.lblAdd2)
        resources.ApplyResources(Me.Panel2, "Panel2")
        Me.Panel2.Name = "Panel2"
        '
        'lblAdd2
        '
        resources.ApplyResources(Me.lblAdd2, "lblAdd2")
        Me.lblAdd2.Name = "lblAdd2"
        '
        'lblAddScore
        '
        resources.ApplyResources(Me.lblAddScore, "lblAddScore")
        Me.lblAddScore.Name = "lblAddScore"
        '
        'lblSlowDown
        '
        resources.ApplyResources(Me.lblSlowDown, "lblSlowDown")
        Me.lblSlowDown.Name = "lblSlowDown"
        '
        'Panel3
        '
        Me.Panel3.BackColor = System.Drawing.Color.Aquamarine
        Me.Panel3.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Panel3.Controls.Add(Me.Label11)
        resources.ApplyResources(Me.Panel3, "Panel3")
        Me.Panel3.Name = "Panel3"
        '
        'Label11
        '
        resources.ApplyResources(Me.Label11, "Label11")
        Me.Label11.Name = "Label11"
        '
        'Label12
        '
        resources.ApplyResources(Me.Label12, "Label12")
        Me.Label12.Name = "Label12"
        '
        'Panel4
        '
        Me.Panel4.BackColor = System.Drawing.Color.Tomato
        Me.Panel4.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Panel4.Controls.Add(Me.Panel5)
        Me.Panel4.Controls.Add(Me.Label14)
        resources.ApplyResources(Me.Panel4, "Panel4")
        Me.Panel4.Name = "Panel4"
        '
        'Panel5
        '
        Me.Panel5.BackColor = System.Drawing.Color.Tomato
        Me.Panel5.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Panel5.Controls.Add(Me.Label19)
        resources.ApplyResources(Me.Panel5, "Panel5")
        Me.Panel5.Name = "Panel5"
        '
        'Label19
        '
        resources.ApplyResources(Me.Label19, "Label19")
        Me.Label19.Name = "Label19"
        '
        'Label14
        '
        resources.ApplyResources(Me.Label14, "Label14")
        Me.Label14.Name = "Label14"
        '
        'lbl1stPerson
        '
        resources.ApplyResources(Me.lbl1stPerson, "lbl1stPerson")
        Me.lbl1stPerson.Name = "lbl1stPerson"
        '
        'lblTurBo
        '
        resources.ApplyResources(Me.lblTurBo, "lblTurBo")
        Me.lblTurBo.Name = "lblTurBo"
        '
        'lbl1st
        '
        resources.ApplyResources(Me.lbl1st, "lbl1st")
        Me.lbl1st.Name = "lbl1st"
        '
        'lblExtraLive
        '
        resources.ApplyResources(Me.lblExtraLive, "lblExtraLive")
        Me.lblExtraLive.Name = "lblExtraLive"
        '
        'lbl2nd
        '
        resources.ApplyResources(Me.lbl2nd, "lbl2nd")
        Me.lbl2nd.Name = "lbl2nd"
        '
        'lbl2ndPerson
        '
        resources.ApplyResources(Me.lbl2ndPerson, "lbl2ndPerson")
        Me.lbl2ndPerson.Name = "lbl2ndPerson"
        '
        'lbl1stPoint
        '
        resources.ApplyResources(Me.lbl1stPoint, "lbl1stPoint")
        Me.lbl1stPoint.Name = "lbl1stPoint"
        '
        'lbl2ndPoint
        '
        resources.ApplyResources(Me.lbl2ndPoint, "lbl2ndPoint")
        Me.lbl2ndPoint.Name = "lbl2ndPoint"
        '
        'Title
        '
        Me.Title.BackColor = System.Drawing.SystemColors.ControlLightLight
        Me.Title.BackgroundImage = Global.Dodge.My.Resources.Resources.Title23
        resources.ApplyResources(Me.Title, "Title")
        Me.Title.Controls.Add(Me.lblExtraLarge)
        Me.Title.Controls.Add(Me.ExtraLarge)
        Me.Title.Controls.Add(Me.Label4)
        Me.Title.Controls.Add(Me.lblTiny)
        Me.Title.Controls.Add(Me.lblMedium)
        Me.Title.Controls.Add(Me.lblLarge)
        Me.Title.Controls.Add(Me.Large)
        Me.Title.Controls.Add(Me.Medium)
        Me.Title.Controls.Add(Me.Tiny)
        Me.Title.Name = "Title"
        '
        'lblExtraLarge
        '
        resources.ApplyResources(Me.lblExtraLarge, "lblExtraLarge")
        Me.lblExtraLarge.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(224, Byte), Integer), CType(CType(192, Byte), Integer))
        Me.lblExtraLarge.Name = "lblExtraLarge"
        '
        'ExtraLarge
        '
        Me.ExtraLarge.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        resources.ApplyResources(Me.ExtraLarge, "ExtraLarge")
        Me.ExtraLarge.Name = "ExtraLarge"
        Me.ExtraLarge.TabStop = False
        '
        'Label4
        '
        resources.ApplyResources(Me.Label4, "Label4")
        Me.Label4.ForeColor = System.Drawing.Color.Red
        Me.Label4.Name = "Label4"
        '
        'lblTiny
        '
        resources.ApplyResources(Me.lblTiny, "lblTiny")
        Me.lblTiny.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(255, Byte), Integer))
        Me.lblTiny.Name = "lblTiny"
        '
        'lblMedium
        '
        resources.ApplyResources(Me.lblMedium, "lblMedium")
        Me.lblMedium.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(255, Byte), Integer), CType(CType(192, Byte), Integer))
        Me.lblMedium.Name = "lblMedium"
        '
        'lblLarge
        '
        resources.ApplyResources(Me.lblLarge, "lblLarge")
        Me.lblLarge.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(255, Byte), Integer))
        Me.lblLarge.Name = "lblLarge"
        '
        'Large
        '
        Me.Large.BackColor = System.Drawing.Color.White
        resources.ApplyResources(Me.Large, "Large")
        Me.Large.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Large.Name = "Large"
        Me.Large.TabStop = False
        '
        'Medium
        '
        Me.Medium.BackColor = System.Drawing.Color.White
        resources.ApplyResources(Me.Medium, "Medium")
        Me.Medium.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Medium.Name = "Medium"
        Me.Medium.TabStop = False
        '
        'Tiny
        '
        Me.Tiny.BackColor = System.Drawing.Color.WhiteSmoke
        resources.ApplyResources(Me.Tiny, "Tiny")
        Me.Tiny.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Tiny.Name = "Tiny"
        Me.Tiny.TabStop = False
        '
        'Panel7
        '
        Me.Panel7.BackColor = System.Drawing.Color.Snow
        Me.Panel7.BackgroundImage = Global.Dodge.My.Resources.Resources.Heart
        resources.ApplyResources(Me.Panel7, "Panel7")
        Me.Panel7.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Panel7.Name = "Panel7"
        '
        'Label1
        '
        resources.ApplyResources(Me.Label1, "Label1")
        Me.Label1.Name = "Label1"
        '
        'Dodge
        '
        resources.ApplyResources(Me, "$this")
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.lbl2ndPoint)
        Me.Controls.Add(Me.lbl1stPoint)
        Me.Controls.Add(Me.lbl2ndPerson)
        Me.Controls.Add(Me.lbl2nd)
        Me.Controls.Add(Me.Title)
        Me.Controls.Add(Me.lblPlusOne)
        Me.Controls.Add(Me.lblExtraLive)
        Me.Controls.Add(Me.Panel7)
        Me.Controls.Add(Me.lbl1st)
        Me.Controls.Add(Me.lblTurBo)
        Me.Controls.Add(Me.lbl1stPerson)
        Me.Controls.Add(Me.Panel4)
        Me.Controls.Add(Me.Label12)
        Me.Controls.Add(Me.Panel3)
        Me.Controls.Add(Me.lblSlowDown)
        Me.Controls.Add(Me.lblAddScore)
        Me.Controls.Add(Me.Panel2)
        Me.Controls.Add(Me.lblScores)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.lblLives)
        Me.Controls.Add(Me.lblLivesLeft)
        Me.Controls.Add(Me.btnPlay)
        Me.Controls.Add(Me.MenuBar)
        Me.Controls.Add(Me.DodgeField)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle
        Me.Name = "Dodge"
        Me.Slow.ResumeLayout(False)
        Me.Slow.PerformLayout()
        Me.AddScore.ResumeLayout(False)
        Me.AddScore.PerformLayout()
        Me.Fire.ResumeLayout(False)
        Me.Fire.PerformLayout()
        Me.DodgeField.ResumeLayout(False)
        Me.DodgeField.PerformLayout()
        CType(Me.Teki4, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Teki3, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Person, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Teki1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Teki2, System.ComponentModel.ISupportInitialize).EndInit()
        Me.MenuBar.ResumeLayout(False)
        Me.MenuBar.PerformLayout()
        Me.Panel2.ResumeLayout(False)
        Me.Panel2.PerformLayout()
        Me.Panel3.ResumeLayout(False)
        Me.Panel3.PerformLayout()
        Me.Panel4.ResumeLayout(False)
        Me.Panel4.PerformLayout()
        Me.Panel5.ResumeLayout(False)
        Me.Panel5.PerformLayout()
        Me.Title.ResumeLayout(False)
        Me.Title.PerformLayout()
        CType(Me.ExtraLarge, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Large, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Medium, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Tiny, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents tmrRun As System.Windows.Forms.Timer
    Friend WithEvents tmrRandomTeki As System.Windows.Forms.Timer
    Friend WithEvents tmrScore As System.Windows.Forms.Timer
    Friend WithEvents tmrCount As System.Windows.Forms.Timer
    Friend WithEvents Teki2 As System.Windows.Forms.PictureBox
    Friend WithEvents Teki1 As System.Windows.Forms.PictureBox
    Friend WithEvents Slow As System.Windows.Forms.Panel
    Friend WithEvents Label6 As System.Windows.Forms.Label
    Friend WithEvents Person As System.Windows.Forms.PictureBox
    Friend WithEvents Teki3 As System.Windows.Forms.PictureBox
    Friend WithEvents Teki4 As System.Windows.Forms.PictureBox
    Friend WithEvents AddScore As System.Windows.Forms.Panel
    Friend WithEvents lblAdd As System.Windows.Forms.Label
    Friend WithEvents Fire As System.Windows.Forms.Panel
    Friend WithEvents Label16 As System.Windows.Forms.Label
    Friend WithEvents DodgeField As System.Windows.Forms.Panel
    Friend WithEvents Heart As System.Windows.Forms.Panel
    Friend WithEvents lblPlusOne As System.Windows.Forms.Label
    Friend WithEvents Title As System.Windows.Forms.Panel
    Friend WithEvents Tiny As System.Windows.Forms.PictureBox
    Friend WithEvents Large As System.Windows.Forms.PictureBox
    Friend WithEvents Medium As System.Windows.Forms.PictureBox
    Friend WithEvents lblTiny As System.Windows.Forms.Label
    Friend WithEvents lblMedium As System.Windows.Forms.Label
    Friend WithEvents lblLarge As System.Windows.Forms.Label
    Friend WithEvents Label4 As System.Windows.Forms.Label
    Friend WithEvents MenuBar As System.Windows.Forms.MenuStrip
    Friend WithEvents ToolStripMenuItem1 As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents ToolStripMenuItem3 As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents ESCToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents RwerwToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents LeftRightUpDownToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents btnPlay As System.Windows.Forms.Button
    Friend WithEvents lblLivesLeft As System.Windows.Forms.Label
    Friend WithEvents lblLives As System.Windows.Forms.Label
    Friend WithEvents Label7 As System.Windows.Forms.Label
    Friend WithEvents lblScores As System.Windows.Forms.Label
    Friend WithEvents Panel2 As System.Windows.Forms.Panel
    Friend WithEvents lblAdd2 As System.Windows.Forms.Label
    Friend WithEvents lblAddScore As System.Windows.Forms.Label
    Friend WithEvents lblSlowDown As System.Windows.Forms.Label
    Friend WithEvents Panel3 As System.Windows.Forms.Panel
    Friend WithEvents Label11 As System.Windows.Forms.Label
    Friend WithEvents Label12 As System.Windows.Forms.Label
    Friend WithEvents Panel4 As System.Windows.Forms.Panel
    Friend WithEvents Panel5 As System.Windows.Forms.Panel
    Friend WithEvents Label19 As System.Windows.Forms.Label
    Friend WithEvents Label14 As System.Windows.Forms.Label
    Friend WithEvents lbl1stPerson As System.Windows.Forms.Label
    Friend WithEvents lblTurBo As System.Windows.Forms.Label
    Friend WithEvents lbl1st As System.Windows.Forms.Label
    Friend WithEvents Panel7 As System.Windows.Forms.Panel
    Friend WithEvents lblExtraLive As System.Windows.Forms.Label
    Friend WithEvents lbl2nd As System.Windows.Forms.Label
    Friend WithEvents lbl2ndPerson As System.Windows.Forms.Label
    Friend WithEvents lbl1stPoint As System.Windows.Forms.Label
    Friend WithEvents lbl2ndPoint As System.Windows.Forms.Label
    Friend WithEvents lblExtraLarge As System.Windows.Forms.Label
    Friend WithEvents ExtraLarge As System.Windows.Forms.PictureBox
    Friend WithEvents lblCheatEnable As System.Windows.Forms.Label
    Friend WithEvents Label1 As System.Windows.Forms.Label

End Class
