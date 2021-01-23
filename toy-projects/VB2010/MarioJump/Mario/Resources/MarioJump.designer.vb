<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class MarioJump
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
        Me.tmrControl = New System.Windows.Forms.Timer(Me.components)
        Me.tmrBlockMove = New System.Windows.Forms.Timer(Me.components)
        Me.tmrMountain = New System.Windows.Forms.Timer(Me.components)
        Me.tmrBlockShift = New System.Windows.Forms.Timer(Me.components)
        Me.tmrDeath = New System.Windows.Forms.Timer(Me.components)
        Me.PanelLives = New System.Windows.Forms.Panel()
        Me.lblTheEnd = New System.Windows.Forms.Label()
        Me.Cloud = New System.Windows.Forms.PictureBox()
        Me.lblStageNum = New System.Windows.Forms.Label()
        Me.lblLives = New System.Windows.Forms.Label()
        Me.NekoRightBlack = New System.Windows.Forms.PictureBox()
        Me.tmrOpenGame = New System.Windows.Forms.Timer(Me.components)
        Me.Stage = New System.Windows.Forms.ProgressBar()
        Me.Images = New System.Windows.Forms.Panel()
        Me.NekoJumpLeft = New System.Windows.Forms.PictureBox()
        Me.TekiLeft = New System.Windows.Forms.PictureBox()
        Me.TekiRight = New System.Windows.Forms.PictureBox()
        Me.NekoRight = New System.Windows.Forms.PictureBox()
        Me.NekoLeft = New System.Windows.Forms.PictureBox()
        Me.NekoJumpRight = New System.Windows.Forms.PictureBox()
        Me.NekoDeath = New System.Windows.Forms.PictureBox()
        Me.tmrCredit = New System.Windows.Forms.Timer(Me.components)
        Me.Trophy = New System.Windows.Forms.PictureBox()
        Me.Teki1 = New System.Windows.Forms.PictureBox()
        Me.Block2 = New System.Windows.Forms.PictureBox()
        Me.Block1 = New System.Windows.Forms.PictureBox()
        Me.Person = New System.Windows.Forms.PictureBox()
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.Mountain = New System.Windows.Forms.PictureBox()
        Me.PanelLives.SuspendLayout()
        CType(Me.Cloud, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoRightBlack, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.Images.SuspendLayout()
        CType(Me.NekoJumpLeft, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.TekiLeft, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.TekiRight, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoRight, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoLeft, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoJumpRight, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoDeath, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Trophy, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Teki1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Person, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Mountain, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'tmrControl
        '
        Me.tmrControl.Enabled = True
        Me.tmrControl.Interval = 5
        '
        'tmrBlockMove
        '
        Me.tmrBlockMove.Interval = 20
        '
        'tmrMountain
        '
        Me.tmrMountain.Interval = 1000
        '
        'tmrBlockShift
        '
        Me.tmrBlockShift.Interval = 5000
        '
        'tmrDeath
        '
        Me.tmrDeath.Interval = 20
        '
        'PanelLives
        '
        Me.PanelLives.BackColor = System.Drawing.Color.Black
        Me.PanelLives.Controls.Add(Me.lblTheEnd)
        Me.PanelLives.Controls.Add(Me.Cloud)
        Me.PanelLives.Controls.Add(Me.lblStageNum)
        Me.PanelLives.Controls.Add(Me.lblLives)
        Me.PanelLives.Controls.Add(Me.NekoRightBlack)
        Me.PanelLives.Location = New System.Drawing.Point(0, 0)
        Me.PanelLives.Name = "PanelLives"
        Me.PanelLives.Size = New System.Drawing.Size(529, 414)
        Me.PanelLives.TabIndex = 18
        Me.PanelLives.Visible = False
        '
        'lblTheEnd
        '
        Me.lblTheEnd.AutoSize = True
        Me.lblTheEnd.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblTheEnd.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblTheEnd.Location = New System.Drawing.Point(203, 22)
        Me.lblTheEnd.Name = "lblTheEnd"
        Me.lblTheEnd.Size = New System.Drawing.Size(112, 29)
        Me.lblTheEnd.TabIndex = 4
        Me.lblTheEnd.Text = "The End"
        Me.lblTheEnd.Visible = False
        '
        'Cloud
        '
        Me.Cloud.BackgroundImage = Global.Mario.My.Resources.Resources.cloud
        Me.Cloud.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.Cloud.Location = New System.Drawing.Point(37, 52)
        Me.Cloud.Name = "Cloud"
        Me.Cloud.Size = New System.Drawing.Size(445, 323)
        Me.Cloud.TabIndex = 3
        Me.Cloud.TabStop = False
        Me.Cloud.Visible = False
        '
        'lblStageNum
        '
        Me.lblStageNum.AutoSize = True
        Me.lblStageNum.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblStageNum.ForeColor = System.Drawing.SystemColors.ButtonFace
        Me.lblStageNum.Location = New System.Drawing.Point(204, 99)
        Me.lblStageNum.Name = "lblStageNum"
        Me.lblStageNum.Size = New System.Drawing.Size(108, 20)
        Me.lblStageNum.TabIndex = 2
        Me.lblStageNum.Text = "StageNumber"
        '
        'lblLives
        '
        Me.lblLives.AutoSize = True
        Me.lblLives.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblLives.ForeColor = System.Drawing.Color.White
        Me.lblLives.Location = New System.Drawing.Point(228, 190)
        Me.lblLives.Name = "lblLives"
        Me.lblLives.Size = New System.Drawing.Size(53, 20)
        Me.lblLives.TabIndex = 1
        Me.lblLives.Text = "  X    2"
        '
        'NekoRightBlack
        '
        Me.NekoRightBlack.Image = Global.Mario.My.Resources.Resources.nekoRightBlack
        Me.NekoRightBlack.Location = New System.Drawing.Point(194, 179)
        Me.NekoRightBlack.Name = "NekoRightBlack"
        Me.NekoRightBlack.Size = New System.Drawing.Size(28, 34)
        Me.NekoRightBlack.TabIndex = 0
        Me.NekoRightBlack.TabStop = False
        '
        'tmrOpenGame
        '
        Me.tmrOpenGame.Enabled = True
        Me.tmrOpenGame.Interval = 1000
        '
        'Stage
        '
        Me.Stage.Location = New System.Drawing.Point(389, 394)
        Me.Stage.Name = "Stage"
        Me.Stage.Size = New System.Drawing.Size(140, 20)
        Me.Stage.TabIndex = 19
        '
        'Images
        '
        Me.Images.Controls.Add(Me.NekoJumpLeft)
        Me.Images.Controls.Add(Me.TekiLeft)
        Me.Images.Controls.Add(Me.TekiRight)
        Me.Images.Controls.Add(Me.NekoRight)
        Me.Images.Controls.Add(Me.NekoLeft)
        Me.Images.Controls.Add(Me.NekoJumpRight)
        Me.Images.Controls.Add(Me.NekoDeath)
        Me.Images.Location = New System.Drawing.Point(12, 12)
        Me.Images.Name = "Images"
        Me.Images.Size = New System.Drawing.Size(157, 96)
        Me.Images.TabIndex = 23
        Me.Images.Visible = False
        '
        'NekoJumpLeft
        '
        Me.NekoJumpLeft.Image = Global.Mario.My.Resources.Resources.nekoJumpLeft
        Me.NekoJumpLeft.Location = New System.Drawing.Point(56, 3)
        Me.NekoJumpLeft.Name = "NekoJumpLeft"
        Me.NekoJumpLeft.Size = New System.Drawing.Size(28, 34)
        Me.NekoJumpLeft.TabIndex = 4
        Me.NekoJumpLeft.TabStop = False
        Me.NekoJumpLeft.Visible = False
        '
        'TekiLeft
        '
        Me.TekiLeft.BackColor = System.Drawing.Color.FromArgb(CType(CType(134, Byte), Integer), CType(CType(250, Byte), Integer), CType(CType(255, Byte), Integer))
        Me.TekiLeft.BackgroundImage = Global.Mario.My.Resources.Resources.teki21
        Me.TekiLeft.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.TekiLeft.Location = New System.Drawing.Point(75, 43)
        Me.TekiLeft.Name = "TekiLeft"
        Me.TekiLeft.Size = New System.Drawing.Size(20, 20)
        Me.TekiLeft.TabIndex = 22
        Me.TekiLeft.TabStop = False
        Me.TekiLeft.Visible = False
        '
        'TekiRight
        '
        Me.TekiRight.BackgroundImage = Global.Mario.My.Resources.Resources.teki1Right
        Me.TekiRight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.TekiRight.Location = New System.Drawing.Point(43, 43)
        Me.TekiRight.Name = "TekiRight"
        Me.TekiRight.Size = New System.Drawing.Size(20, 20)
        Me.TekiRight.TabIndex = 21
        Me.TekiRight.TabStop = False
        Me.TekiRight.Visible = False
        '
        'NekoRight
        '
        Me.NekoRight.BackColor = System.Drawing.SystemColors.Control
        Me.NekoRight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.NekoRight.Image = Global.Mario.My.Resources.Resources.neko5
        Me.NekoRight.Location = New System.Drawing.Point(101, 53)
        Me.NekoRight.Name = "NekoRight"
        Me.NekoRight.Size = New System.Drawing.Size(28, 34)
        Me.NekoRight.TabIndex = 3
        Me.NekoRight.TabStop = False
        Me.NekoRight.Visible = False
        '
        'NekoLeft
        '
        Me.NekoLeft.Image = Global.Mario.My.Resources.Resources.nekoLeft
        Me.NekoLeft.Location = New System.Drawing.Point(90, 3)
        Me.NekoLeft.Name = "NekoLeft"
        Me.NekoLeft.Size = New System.Drawing.Size(28, 34)
        Me.NekoLeft.TabIndex = 2
        Me.NekoLeft.TabStop = False
        Me.NekoLeft.Visible = False
        '
        'NekoJumpRight
        '
        Me.NekoJumpRight.Image = Global.Mario.My.Resources.Resources.nekoJumpRight
        Me.NekoJumpRight.Location = New System.Drawing.Point(116, 3)
        Me.NekoJumpRight.Name = "NekoJumpRight"
        Me.NekoJumpRight.Size = New System.Drawing.Size(28, 34)
        Me.NekoJumpRight.TabIndex = 5
        Me.NekoJumpRight.TabStop = False
        Me.NekoJumpRight.Visible = False
        '
        'NekoDeath
        '
        Me.NekoDeath.Image = Global.Mario.My.Resources.Resources.nekoDeath1
        Me.NekoDeath.Location = New System.Drawing.Point(22, 3)
        Me.NekoDeath.Name = "NekoDeath"
        Me.NekoDeath.Size = New System.Drawing.Size(28, 34)
        Me.NekoDeath.TabIndex = 17
        Me.NekoDeath.TabStop = False
        Me.NekoDeath.Visible = False
        '
        'tmrCredit
        '
        '
        'Trophy
        '
        Me.Trophy.BackgroundImage = Global.Mario.My.Resources.Resources.Trophy
        Me.Trophy.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.Trophy.Location = New System.Drawing.Point(600, 25)
        Me.Trophy.Name = "Trophy"
        Me.Trophy.Size = New System.Drawing.Size(40, 40)
        Me.Trophy.TabIndex = 20
        Me.Trophy.TabStop = False
        '
        'Teki1
        '
        Me.Teki1.BackColor = System.Drawing.Color.FromArgb(CType(CType(134, Byte), Integer), CType(CType(250, Byte), Integer), CType(CType(255, Byte), Integer))
        Me.Teki1.BackgroundImage = Global.Mario.My.Resources.Resources.teki21
        Me.Teki1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.Teki1.Location = New System.Drawing.Point(376, 12)
        Me.Teki1.Name = "Teki1"
        Me.Teki1.Size = New System.Drawing.Size(20, 20)
        Me.Teki1.TabIndex = 14
        Me.Teki1.TabStop = False
        '
        'Block2
        '
        Me.Block2.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block2.Location = New System.Drawing.Point(288, 144)
        Me.Block2.Name = "Block2"
        Me.Block2.Size = New System.Drawing.Size(129, 10)
        Me.Block2.TabIndex = 6
        Me.Block2.TabStop = False
        '
        'Block1
        '
        Me.Block1.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block1.Location = New System.Drawing.Point(37, 189)
        Me.Block1.Name = "Block1"
        Me.Block1.Size = New System.Drawing.Size(125, 10)
        Me.Block1.TabIndex = 1
        Me.Block1.TabStop = False
        '
        'Person
        '
        Me.Person.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.Person.Image = Global.Mario.My.Resources.Resources.nekoRight
        Me.Person.Location = New System.Drawing.Point(37, 155)
        Me.Person.Name = "Person"
        Me.Person.Size = New System.Drawing.Size(28, 34)
        Me.Person.TabIndex = 0
        Me.Person.TabStop = False
        '
        'PictureBox1
        '
        Me.PictureBox1.BackColor = System.Drawing.Color.White
        Me.PictureBox1.BackgroundImage = Global.Mario.My.Resources.Resources.brick
        Me.PictureBox1.Location = New System.Drawing.Point(0, 366)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(532, 48)
        Me.PictureBox1.TabIndex = 10
        Me.PictureBox1.TabStop = False
        '
        'Mountain
        '
        Me.Mountain.Image = Global.Mario.My.Resources.Resources.Mountain2
        Me.Mountain.Location = New System.Drawing.Point(279, 228)
        Me.Mountain.Name = "Mountain"
        Me.Mountain.Size = New System.Drawing.Size(262, 145)
        Me.Mountain.TabIndex = 13
        Me.Mountain.TabStop = False
        '
        'MarioJump
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(134, Byte), Integer), CType(CType(250, Byte), Integer), CType(CType(255, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(529, 413)
        Me.Controls.Add(Me.Trophy)
        Me.Controls.Add(Me.PanelLives)
        Me.Controls.Add(Me.Stage)
        Me.Controls.Add(Me.Teki1)
        Me.Controls.Add(Me.Block2)
        Me.Controls.Add(Me.Block1)
        Me.Controls.Add(Me.Person)
        Me.Controls.Add(Me.PictureBox1)
        Me.Controls.Add(Me.Mountain)
        Me.Controls.Add(Me.Images)
        Me.Name = "MarioJump"
        Me.Text = "Mario Jump"
        Me.PanelLives.ResumeLayout(False)
        Me.PanelLives.PerformLayout()
        CType(Me.Cloud, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoRightBlack, System.ComponentModel.ISupportInitialize).EndInit()
        Me.Images.ResumeLayout(False)
        CType(Me.NekoJumpLeft, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.TekiLeft, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.TekiRight, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoRight, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoLeft, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoJumpRight, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoDeath, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Trophy, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Teki1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Person, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Mountain, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents Person As System.Windows.Forms.PictureBox
    Friend WithEvents tmrControl As System.Windows.Forms.Timer
    Friend WithEvents Block1 As System.Windows.Forms.PictureBox
    Friend WithEvents NekoLeft As System.Windows.Forms.PictureBox
    Friend WithEvents NekoRight As System.Windows.Forms.PictureBox
    Friend WithEvents NekoJumpLeft As System.Windows.Forms.PictureBox
    Friend WithEvents NekoJumpRight As System.Windows.Forms.PictureBox
    Friend WithEvents Block2 As System.Windows.Forms.PictureBox
    Friend WithEvents tmrBlockMove As System.Windows.Forms.Timer
    Friend WithEvents PictureBox1 As System.Windows.Forms.PictureBox
    Friend WithEvents Mountain As System.Windows.Forms.PictureBox
    Friend WithEvents tmrMountain As System.Windows.Forms.Timer
    Friend WithEvents tmrBlockShift As System.Windows.Forms.Timer
    Friend WithEvents Teki1 As System.Windows.Forms.PictureBox
    Friend WithEvents tmrDeath As System.Windows.Forms.Timer
    Friend WithEvents NekoDeath As System.Windows.Forms.PictureBox
    Friend WithEvents PanelLives As System.Windows.Forms.Panel
    Friend WithEvents NekoRightBlack As System.Windows.Forms.PictureBox
    Friend WithEvents lblLives As System.Windows.Forms.Label
    Friend WithEvents tmrOpenGame As System.Windows.Forms.Timer
    Friend WithEvents Stage As System.Windows.Forms.ProgressBar
    Friend WithEvents lblStageNum As System.Windows.Forms.Label
    Friend WithEvents Trophy As System.Windows.Forms.PictureBox
    Friend WithEvents TekiRight As System.Windows.Forms.PictureBox
    Friend WithEvents TekiLeft As System.Windows.Forms.PictureBox
    Friend WithEvents Images As System.Windows.Forms.Panel
    Friend WithEvents tmrCredit As System.Windows.Forms.Timer
    Friend WithEvents Cloud As System.Windows.Forms.PictureBox
    Friend WithEvents lblTheEnd As System.Windows.Forms.Label

End Class
