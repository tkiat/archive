<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class SnakeMaze
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
        Me.tmrMove = New System.Windows.Forms.Timer(Me.components)
        Me.lblStart = New System.Windows.Forms.Label()
        Me.tmrCheck = New System.Windows.Forms.Timer(Me.components)
        Me.pnlFinish = New System.Windows.Forms.Panel()
        Me.lblFinish = New System.Windows.Forms.Label()
        Me.pnlStart = New System.Windows.Forms.Panel()
        Me.Panel1 = New System.Windows.Forms.Panel()
        Me.lblIntro = New System.Windows.Forms.Label()
        Me.lblGold = New System.Windows.Forms.Label()
        Me.lblGoldAmount = New System.Windows.Forms.Label()
        Me.lblLevel = New System.Windows.Forms.Label()
        Me.lblLevelNumber = New System.Windows.Forms.Label()
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.lblLivesLeft = New System.Windows.Forms.Label()
        Me.lblLives = New System.Windows.Forms.Label()
        Me.PictureBox2 = New System.Windows.Forms.PictureBox()
        Me.tmrStart = New System.Windows.Forms.Timer(Me.components)
        Me.tmrblkMove = New System.Windows.Forms.Timer(Me.components)
        Me.lblCheatEnable = New System.Windows.Forms.Label()
        Me.tmrStartGame = New System.Windows.Forms.Timer(Me.components)
        Me.pic1 = New System.Windows.Forms.PictureBox()
        Me.pic5 = New System.Windows.Forms.PictureBox()
        Me.pic4 = New System.Windows.Forms.PictureBox()
        Me.pic3 = New System.Windows.Forms.PictureBox()
        Me.pic2 = New System.Windows.Forms.PictureBox()
        Me.blk6 = New System.Windows.Forms.PictureBox()
        Me.blk5 = New System.Windows.Forms.PictureBox()
        Me.blk4 = New System.Windows.Forms.PictureBox()
        Me.blk3 = New System.Windows.Forms.PictureBox()
        Me.blk1 = New System.Windows.Forms.PictureBox()
        Me.blk2 = New System.Windows.Forms.PictureBox()
        Me.ItemScore1 = New System.Windows.Forms.PictureBox()
        Me.ItemScore2 = New System.Windows.Forms.PictureBox()
        Me.ItemScore3 = New System.Windows.Forms.PictureBox()
        Me.ItemScore4 = New System.Windows.Forms.PictureBox()
        Me.ItemScore5 = New System.Windows.Forms.PictureBox()
        Me.ItemSpeed1 = New System.Windows.Forms.PictureBox()
        Me.ItemSpeed2 = New System.Windows.Forms.PictureBox()
        Me.ItemSlow1 = New System.Windows.Forms.PictureBox()
        Me.ItemSlow2 = New System.Windows.Forms.PictureBox()
        Me.pnlFinish.SuspendLayout()
        Me.pnlStart.SuspendLayout()
        Me.Panel1.SuspendLayout()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.PictureBox2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.pic1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.pic5, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.pic4, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.pic3, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.pic2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.blk6, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.blk5, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.blk4, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.blk3, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.blk1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.blk2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemScore1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemScore2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemScore3, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemScore4, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemScore5, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemSpeed1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemSpeed2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemSlow1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ItemSlow2, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'tmrMove
        '
        Me.tmrMove.Interval = 50
        '
        'lblStart
        '
        Me.lblStart.AutoSize = True
        Me.lblStart.BackColor = System.Drawing.SystemColors.ActiveCaption
        Me.lblStart.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.lblStart.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblStart.Location = New System.Drawing.Point(12, 367)
        Me.lblStart.Name = "lblStart"
        Me.lblStart.Size = New System.Drawing.Size(48, 26)
        Me.lblStart.TabIndex = 9
        Me.lblStart.Text = "Start"
        '
        'tmrCheck
        '
        Me.tmrCheck.Interval = 10
        '
        'pnlFinish
        '
        Me.pnlFinish.BackColor = System.Drawing.SystemColors.ActiveCaption
        Me.pnlFinish.Controls.Add(Me.lblFinish)
        Me.pnlFinish.Location = New System.Drawing.Point(580, 280)
        Me.pnlFinish.Name = "pnlFinish"
        Me.pnlFinish.Size = New System.Drawing.Size(70, 70)
        Me.pnlFinish.TabIndex = 20
        '
        'lblFinish
        '
        Me.lblFinish.AutoSize = True
        Me.lblFinish.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblFinish.Location = New System.Drawing.Point(6, 23)
        Me.lblFinish.Name = "lblFinish"
        Me.lblFinish.Size = New System.Drawing.Size(61, 24)
        Me.lblFinish.TabIndex = 19
        Me.lblFinish.Text = "Finish"
        '
        'pnlStart
        '
        Me.pnlStart.BackColor = System.Drawing.Color.White
        Me.pnlStart.Controls.Add(Me.Panel1)
        Me.pnlStart.Controls.Add(Me.lblGold)
        Me.pnlStart.Controls.Add(Me.lblGoldAmount)
        Me.pnlStart.Controls.Add(Me.lblLevel)
        Me.pnlStart.Controls.Add(Me.lblLevelNumber)
        Me.pnlStart.Controls.Add(Me.PictureBox1)
        Me.pnlStart.Controls.Add(Me.lblLivesLeft)
        Me.pnlStart.Controls.Add(Me.lblLives)
        Me.pnlStart.Controls.Add(Me.PictureBox2)
        Me.pnlStart.Location = New System.Drawing.Point(-1, -2)
        Me.pnlStart.Name = "pnlStart"
        Me.pnlStart.Size = New System.Drawing.Size(721, 402)
        Me.pnlStart.TabIndex = 21
        '
        'Panel1
        '
        Me.Panel1.Controls.Add(Me.lblIntro)
        Me.Panel1.Location = New System.Drawing.Point(0, 0)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Size = New System.Drawing.Size(720, 401)
        Me.Panel1.TabIndex = 6
        '
        'lblIntro
        '
        Me.lblIntro.AutoSize = True
        Me.lblIntro.Font = New System.Drawing.Font("Microsoft Sans Serif", 20.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblIntro.Location = New System.Drawing.Point(3, 323)
        Me.lblIntro.Name = "lblIntro"
        Me.lblIntro.Size = New System.Drawing.Size(101, 31)
        Me.lblIntro.TabIndex = 0
        Me.lblIntro.Text = "Label1"
        Me.lblIntro.Visible = False
        '
        'lblGold
        '
        Me.lblGold.AutoSize = True
        Me.lblGold.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblGold.Location = New System.Drawing.Point(131, 90)
        Me.lblGold.Name = "lblGold"
        Me.lblGold.Size = New System.Drawing.Size(0, 29)
        Me.lblGold.TabIndex = 8
        '
        'lblGoldAmount
        '
        Me.lblGoldAmount.AutoSize = True
        Me.lblGoldAmount.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblGoldAmount.Location = New System.Drawing.Point(25, 90)
        Me.lblGoldAmount.Name = "lblGoldAmount"
        Me.lblGoldAmount.Size = New System.Drawing.Size(77, 29)
        Me.lblGoldAmount.TabIndex = 7
        Me.lblGoldAmount.Text = "Gold :"
        '
        'lblLevel
        '
        Me.lblLevel.AutoSize = True
        Me.lblLevel.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblLevel.Location = New System.Drawing.Point(149, 11)
        Me.lblLevel.Name = "lblLevel"
        Me.lblLevel.Size = New System.Drawing.Size(0, 29)
        Me.lblLevel.TabIndex = 4
        '
        'lblLevelNumber
        '
        Me.lblLevelNumber.AutoSize = True
        Me.lblLevelNumber.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblLevelNumber.Location = New System.Drawing.Point(25, 11)
        Me.lblLevelNumber.Name = "lblLevelNumber"
        Me.lblLevelNumber.Size = New System.Drawing.Size(89, 29)
        Me.lblLevelNumber.TabIndex = 3
        Me.lblLevelNumber.Text = "Level : "
        '
        'PictureBox1
        '
        Me.PictureBox1.Image = Global.WindowsApplication1.My.Resources.Resources.Snake
        Me.PictureBox1.Location = New System.Drawing.Point(12, 305)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(88, 88)
        Me.PictureBox1.TabIndex = 2
        Me.PictureBox1.TabStop = False
        '
        'lblLivesLeft
        '
        Me.lblLivesLeft.AutoSize = True
        Me.lblLivesLeft.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblLivesLeft.Location = New System.Drawing.Point(24, 52)
        Me.lblLivesLeft.Name = "lblLivesLeft"
        Me.lblLivesLeft.Size = New System.Drawing.Size(146, 29)
        Me.lblLivesLeft.TabIndex = 1
        Me.lblLivesLeft.Text = "Lives Left  = "
        '
        'lblLives
        '
        Me.lblLives.AutoSize = True
        Me.lblLives.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblLives.Location = New System.Drawing.Point(194, 52)
        Me.lblLives.Name = "lblLives"
        Me.lblLives.Size = New System.Drawing.Size(0, 29)
        Me.lblLives.TabIndex = 0
        '
        'PictureBox2
        '
        Me.PictureBox2.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(255, Byte), Integer), CType(CType(128, Byte), Integer))
        Me.PictureBox2.Location = New System.Drawing.Point(0, 298)
        Me.PictureBox2.Name = "PictureBox2"
        Me.PictureBox2.Size = New System.Drawing.Size(720, 103)
        Me.PictureBox2.TabIndex = 5
        Me.PictureBox2.TabStop = False
        '
        'tmrStart
        '
        Me.tmrStart.Interval = 3000
        '
        'tmrblkMove
        '
        Me.tmrblkMove.Interval = 50
        '
        'lblCheatEnable
        '
        Me.lblCheatEnable.AutoSize = True
        Me.lblCheatEnable.Font = New System.Drawing.Font("Microsoft Sans Serif", 15.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblCheatEnable.Location = New System.Drawing.Point(270, 25)
        Me.lblCheatEnable.Name = "lblCheatEnable"
        Me.lblCheatEnable.Size = New System.Drawing.Size(188, 25)
        Me.lblCheatEnable.TabIndex = 22
        Me.lblCheatEnable.Text = "CheatEnableorNot"
        Me.lblCheatEnable.Visible = False
        '
        'tmrStartGame
        '
        Me.tmrStartGame.Enabled = True
        '
        'pic1
        '
        Me.pic1.BackColor = System.Drawing.SystemColors.ActiveCaptionText
        Me.pic1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.pic1.Location = New System.Drawing.Point(30, 310)
        Me.pic1.Name = "pic1"
        Me.pic1.Size = New System.Drawing.Size(10, 10)
        Me.pic1.TabIndex = 3
        Me.pic1.TabStop = False
        '
        'pic5
        '
        Me.pic5.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.pic5.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.pic5.Location = New System.Drawing.Point(30, 350)
        Me.pic5.Name = "pic5"
        Me.pic5.Size = New System.Drawing.Size(10, 10)
        Me.pic5.TabIndex = 7
        Me.pic5.TabStop = False
        '
        'pic4
        '
        Me.pic4.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.pic4.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.pic4.Location = New System.Drawing.Point(30, 340)
        Me.pic4.Name = "pic4"
        Me.pic4.Size = New System.Drawing.Size(10, 10)
        Me.pic4.TabIndex = 6
        Me.pic4.TabStop = False
        '
        'pic3
        '
        Me.pic3.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.pic3.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.pic3.Location = New System.Drawing.Point(30, 330)
        Me.pic3.Name = "pic3"
        Me.pic3.Size = New System.Drawing.Size(10, 10)
        Me.pic3.TabIndex = 5
        Me.pic3.TabStop = False
        '
        'pic2
        '
        Me.pic2.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.pic2.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.pic2.Location = New System.Drawing.Point(30, 320)
        Me.pic2.Name = "pic2"
        Me.pic2.Size = New System.Drawing.Size(10, 10)
        Me.pic2.TabIndex = 4
        Me.pic2.TabStop = False
        '
        'blk6
        '
        Me.blk6.BackColor = System.Drawing.SystemColors.AppWorkspace
        Me.blk6.Location = New System.Drawing.Point(90, 280)
        Me.blk6.Name = "blk6"
        Me.blk6.Size = New System.Drawing.Size(420, 20)
        Me.blk6.TabIndex = 14
        Me.blk6.TabStop = False
        '
        'blk5
        '
        Me.blk5.BackColor = System.Drawing.SystemColors.AppWorkspace
        Me.blk5.Location = New System.Drawing.Point(300, 220)
        Me.blk5.Name = "blk5"
        Me.blk5.Size = New System.Drawing.Size(420, 20)
        Me.blk5.TabIndex = 13
        Me.blk5.TabStop = False
        '
        'blk4
        '
        Me.blk4.BackColor = System.Drawing.SystemColors.AppWorkspace
        Me.blk4.Location = New System.Drawing.Point(490, 40)
        Me.blk4.Name = "blk4"
        Me.blk4.Size = New System.Drawing.Size(100, 100)
        Me.blk4.TabIndex = 12
        Me.blk4.TabStop = False
        '
        'blk3
        '
        Me.blk3.BackColor = System.Drawing.SystemColors.AppWorkspace
        Me.blk3.Location = New System.Drawing.Point(90, 140)
        Me.blk3.Name = "blk3"
        Me.blk3.Size = New System.Drawing.Size(420, 30)
        Me.blk3.TabIndex = 11
        Me.blk3.TabStop = False
        '
        'blk1
        '
        Me.blk1.BackColor = System.Drawing.SystemColors.AppWorkspace
        Me.blk1.Location = New System.Drawing.Point(70, 150)
        Me.blk1.Name = "blk1"
        Me.blk1.Size = New System.Drawing.Size(20, 250)
        Me.blk1.TabIndex = 10
        Me.blk1.TabStop = False
        '
        'blk2
        '
        Me.blk2.BackColor = System.Drawing.SystemColors.AppWorkspace
        Me.blk2.Location = New System.Drawing.Point(10, 90)
        Me.blk2.Name = "blk2"
        Me.blk2.Size = New System.Drawing.Size(420, 20)
        Me.blk2.TabIndex = 8
        Me.blk2.TabStop = False
        '
        'ItemScore1
        '
        Me.ItemScore1.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.ItemScore1.Location = New System.Drawing.Point(90, 120)
        Me.ItemScore1.Name = "ItemScore1"
        Me.ItemScore1.Size = New System.Drawing.Size(10, 10)
        Me.ItemScore1.TabIndex = 24
        Me.ItemScore1.TabStop = False
        '
        'ItemScore2
        '
        Me.ItemScore2.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.ItemScore2.Location = New System.Drawing.Point(190, 50)
        Me.ItemScore2.Name = "ItemScore2"
        Me.ItemScore2.Size = New System.Drawing.Size(10, 10)
        Me.ItemScore2.TabIndex = 25
        Me.ItemScore2.TabStop = False
        '
        'ItemScore3
        '
        Me.ItemScore3.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.ItemScore3.Location = New System.Drawing.Point(470, 10)
        Me.ItemScore3.Name = "ItemScore3"
        Me.ItemScore3.Size = New System.Drawing.Size(10, 10)
        Me.ItemScore3.TabIndex = 26
        Me.ItemScore3.TabStop = False
        '
        'ItemScore4
        '
        Me.ItemScore4.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.ItemScore4.Location = New System.Drawing.Point(150, 330)
        Me.ItemScore4.Name = "ItemScore4"
        Me.ItemScore4.Size = New System.Drawing.Size(10, 10)
        Me.ItemScore4.TabIndex = 27
        Me.ItemScore4.TabStop = False
        '
        'ItemScore5
        '
        Me.ItemScore5.BackColor = System.Drawing.Color.FromArgb(CType(CType(192, Byte), Integer), CType(CType(192, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.ItemScore5.Location = New System.Drawing.Point(190, 330)
        Me.ItemScore5.Name = "ItemScore5"
        Me.ItemScore5.Size = New System.Drawing.Size(10, 10)
        Me.ItemScore5.TabIndex = 28
        Me.ItemScore5.TabStop = False
        '
        'ItemSpeed1
        '
        Me.ItemSpeed1.BackColor = System.Drawing.Color.Red
        Me.ItemSpeed1.Location = New System.Drawing.Point(120, 40)
        Me.ItemSpeed1.Name = "ItemSpeed1"
        Me.ItemSpeed1.Size = New System.Drawing.Size(10, 10)
        Me.ItemSpeed1.TabIndex = 29
        Me.ItemSpeed1.TabStop = False
        '
        'ItemSpeed2
        '
        Me.ItemSpeed2.BackColor = System.Drawing.Color.Red
        Me.ItemSpeed2.Location = New System.Drawing.Point(240, 50)
        Me.ItemSpeed2.Name = "ItemSpeed2"
        Me.ItemSpeed2.Size = New System.Drawing.Size(10, 10)
        Me.ItemSpeed2.TabIndex = 30
        Me.ItemSpeed2.TabStop = False
        '
        'ItemSlow1
        '
        Me.ItemSlow1.BackColor = System.Drawing.Color.Cyan
        Me.ItemSlow1.Location = New System.Drawing.Point(60, 40)
        Me.ItemSlow1.Name = "ItemSlow1"
        Me.ItemSlow1.Size = New System.Drawing.Size(10, 10)
        Me.ItemSlow1.TabIndex = 31
        Me.ItemSlow1.TabStop = False
        '
        'ItemSlow2
        '
        Me.ItemSlow2.BackColor = System.Drawing.Color.Cyan
        Me.ItemSlow2.Location = New System.Drawing.Point(150, 70)
        Me.ItemSlow2.Name = "ItemSlow2"
        Me.ItemSlow2.Size = New System.Drawing.Size(10, 10)
        Me.ItemSlow2.TabIndex = 32
        Me.ItemSlow2.TabStop = False
        '
        'SnakeMaze
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(720, 400)
        Me.Controls.Add(Me.pnlStart)
        Me.Controls.Add(Me.ItemScore5)
        Me.Controls.Add(Me.ItemScore4)
        Me.Controls.Add(Me.ItemScore3)
        Me.Controls.Add(Me.ItemScore2)
        Me.Controls.Add(Me.ItemScore1)
        Me.Controls.Add(Me.pic1)
        Me.Controls.Add(Me.pic5)
        Me.Controls.Add(Me.pic4)
        Me.Controls.Add(Me.pic3)
        Me.Controls.Add(Me.pic2)
        Me.Controls.Add(Me.blk6)
        Me.Controls.Add(Me.blk5)
        Me.Controls.Add(Me.blk4)
        Me.Controls.Add(Me.blk3)
        Me.Controls.Add(Me.blk1)
        Me.Controls.Add(Me.blk2)
        Me.Controls.Add(Me.pnlFinish)
        Me.Controls.Add(Me.lblStart)
        Me.Controls.Add(Me.lblCheatEnable)
        Me.Controls.Add(Me.ItemSpeed1)
        Me.Controls.Add(Me.ItemSpeed2)
        Me.Controls.Add(Me.ItemSlow2)
        Me.Controls.Add(Me.ItemSlow1)
        Me.MaximumSize = New System.Drawing.Size(736, 436)
        Me.MinimumSize = New System.Drawing.Size(736, 436)
        Me.Name = "SnakeMaze"
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "SnakeMaze"
        Me.pnlFinish.ResumeLayout(False)
        Me.pnlFinish.PerformLayout()
        Me.pnlStart.ResumeLayout(False)
        Me.pnlStart.PerformLayout()
        Me.Panel1.ResumeLayout(False)
        Me.Panel1.PerformLayout()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.PictureBox2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.pic1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.pic5, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.pic4, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.pic3, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.pic2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.blk6, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.blk5, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.blk4, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.blk3, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.blk1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.blk2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemScore1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemScore2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemScore3, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemScore4, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemScore5, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemSpeed1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemSpeed2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemSlow1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ItemSlow2, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents tmrMove As System.Windows.Forms.Timer
    Friend WithEvents blk2 As System.Windows.Forms.PictureBox
    Friend WithEvents lblStart As System.Windows.Forms.Label
    Friend WithEvents blk1 As System.Windows.Forms.PictureBox
    Friend WithEvents blk5 As System.Windows.Forms.PictureBox
    Friend WithEvents tmrCheck As System.Windows.Forms.Timer
    Friend WithEvents pnlFinish As System.Windows.Forms.Panel
    Friend WithEvents lblFinish As System.Windows.Forms.Label
    Friend WithEvents blk3 As System.Windows.Forms.PictureBox
    Friend WithEvents blk4 As System.Windows.Forms.PictureBox
    Friend WithEvents blk6 As System.Windows.Forms.PictureBox
    Friend WithEvents pic1 As System.Windows.Forms.PictureBox
    Friend WithEvents pic2 As System.Windows.Forms.PictureBox
    Friend WithEvents pic3 As System.Windows.Forms.PictureBox
    Friend WithEvents pic4 As System.Windows.Forms.PictureBox
    Friend WithEvents pic5 As System.Windows.Forms.PictureBox
    Friend WithEvents pnlStart As System.Windows.Forms.Panel
    Friend WithEvents PictureBox1 As System.Windows.Forms.PictureBox
    Friend WithEvents lblLivesLeft As System.Windows.Forms.Label
    Friend WithEvents lblLives As System.Windows.Forms.Label
    Friend WithEvents tmrStart As System.Windows.Forms.Timer
    Friend WithEvents lblLevel As System.Windows.Forms.Label
    Friend WithEvents lblLevelNumber As System.Windows.Forms.Label
    Friend WithEvents tmrblkMove As System.Windows.Forms.Timer
    Friend WithEvents lblCheatEnable As System.Windows.Forms.Label
    Friend WithEvents PictureBox2 As System.Windows.Forms.PictureBox
    Friend WithEvents Panel1 As System.Windows.Forms.Panel
    Friend WithEvents lblIntro As System.Windows.Forms.Label
    Friend WithEvents tmrStartGame As System.Windows.Forms.Timer
    Friend WithEvents lblGold As System.Windows.Forms.Label
    Friend WithEvents lblGoldAmount As System.Windows.Forms.Label
    Friend WithEvents ItemScore1 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemScore2 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemScore3 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemScore4 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemScore5 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemSpeed1 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemSpeed2 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemSlow1 As System.Windows.Forms.PictureBox
    Friend WithEvents ItemSlow2 As System.Windows.Forms.PictureBox

End Class
