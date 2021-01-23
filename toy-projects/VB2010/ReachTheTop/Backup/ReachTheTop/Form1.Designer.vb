<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class ReachTheTop
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
        Me.components = New System.ComponentModel.Container
        Me.Images = New System.Windows.Forms.Panel
        Me.NekoJumpLeft = New System.Windows.Forms.PictureBox
        Me.TekiLeft = New System.Windows.Forms.PictureBox
        Me.NekoRight = New System.Windows.Forms.PictureBox
        Me.NekoLeft = New System.Windows.Forms.PictureBox
        Me.NekoJumpRight = New System.Windows.Forms.PictureBox
        Me.NekoDeath = New System.Windows.Forms.PictureBox
        Me.tmrMove = New System.Windows.Forms.Timer(Me.components)
        Me.tmrBlockMove = New System.Windows.Forms.Timer(Me.components)
        Me.PanelGame = New System.Windows.Forms.Panel
        Me.lblPause = New System.Windows.Forms.Label
        Me.UpHigh = New System.Windows.Forms.PictureBox
        Me.Person = New System.Windows.Forms.PictureBox
        Me.Block7 = New System.Windows.Forms.PictureBox
        Me.Block10 = New System.Windows.Forms.PictureBox
        Me.Block8 = New System.Windows.Forms.PictureBox
        Me.Block9 = New System.Windows.Forms.PictureBox
        Me.Block6 = New System.Windows.Forms.PictureBox
        Me.Block5 = New System.Windows.Forms.PictureBox
        Me.Block4 = New System.Windows.Forms.PictureBox
        Me.Block2 = New System.Windows.Forms.PictureBox
        Me.Block1 = New System.Windows.Forms.PictureBox
        Me.Block3 = New System.Windows.Forms.PictureBox
        Me.Star = New System.Windows.Forms.PictureBox
        Me.View = New System.Windows.Forms.PictureBox
        Me.lblScore = New System.Windows.Forms.Label
        Me.lblCurrentScore = New System.Windows.Forms.Label
        Me.tmrThingsMove = New System.Windows.Forms.Timer(Me.components)
        Me.lblft = New System.Windows.Forms.Label
        Me.Label4 = New System.Windows.Forms.Label
        Me.Label5 = New System.Windows.Forms.Label
        Me.Label6 = New System.Windows.Forms.Label
        Me.Label7 = New System.Windows.Forms.Label
        Me.PictureBox1 = New System.Windows.Forms.PictureBox
        Me.lblYouWin = New System.Windows.Forms.Label
        Me.Images.SuspendLayout()
        CType(Me.NekoJumpLeft, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.TekiLeft, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoRight, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoLeft, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoJumpRight, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.NekoDeath, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.PanelGame.SuspendLayout()
        CType(Me.UpHigh, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Person, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block7, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block10, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block8, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block9, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block6, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block5, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block4, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Block3, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.Star, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.View, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'Images
        '
        Me.Images.Controls.Add(Me.NekoJumpLeft)
        Me.Images.Controls.Add(Me.TekiLeft)
        Me.Images.Controls.Add(Me.NekoRight)
        Me.Images.Controls.Add(Me.NekoLeft)
        Me.Images.Controls.Add(Me.NekoJumpRight)
        Me.Images.Controls.Add(Me.NekoDeath)
        Me.Images.Location = New System.Drawing.Point(10, 64)
        Me.Images.Name = "Images"
        Me.Images.Size = New System.Drawing.Size(157, 96)
        Me.Images.TabIndex = 28
        Me.Images.Visible = False
        '
        'NekoJumpLeft
        '
        Me.NekoJumpLeft.Image = Global.ReachTheTop.My.Resources.Resources.NekoJumpLeft
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
        Me.TekiLeft.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.TekiLeft.Location = New System.Drawing.Point(75, 43)
        Me.TekiLeft.Name = "TekiLeft"
        Me.TekiLeft.Size = New System.Drawing.Size(20, 20)
        Me.TekiLeft.TabIndex = 22
        Me.TekiLeft.TabStop = False
        Me.TekiLeft.Visible = False
        '
        'NekoRight
        '
        Me.NekoRight.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(224, Byte), Integer), CType(CType(192, Byte), Integer))
        Me.NekoRight.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.NekoRight.Image = Global.ReachTheTop.My.Resources.Resources.NekoRight
        Me.NekoRight.Location = New System.Drawing.Point(101, 53)
        Me.NekoRight.Name = "NekoRight"
        Me.NekoRight.Size = New System.Drawing.Size(28, 34)
        Me.NekoRight.TabIndex = 3
        Me.NekoRight.TabStop = False
        Me.NekoRight.Visible = False
        '
        'NekoLeft
        '
        Me.NekoLeft.Image = Global.ReachTheTop.My.Resources.Resources.NekoLeft
        Me.NekoLeft.Location = New System.Drawing.Point(90, 3)
        Me.NekoLeft.Name = "NekoLeft"
        Me.NekoLeft.Size = New System.Drawing.Size(28, 34)
        Me.NekoLeft.TabIndex = 2
        Me.NekoLeft.TabStop = False
        Me.NekoLeft.Visible = False
        '
        'NekoJumpRight
        '
        Me.NekoJumpRight.Image = Global.ReachTheTop.My.Resources.Resources.NekoJumpRight
        Me.NekoJumpRight.Location = New System.Drawing.Point(124, 3)
        Me.NekoJumpRight.Name = "NekoJumpRight"
        Me.NekoJumpRight.Size = New System.Drawing.Size(28, 34)
        Me.NekoJumpRight.TabIndex = 5
        Me.NekoJumpRight.TabStop = False
        Me.NekoJumpRight.Visible = False
        '
        'NekoDeath
        '
        Me.NekoDeath.Image = Global.ReachTheTop.My.Resources.Resources.NekoDeath
        Me.NekoDeath.Location = New System.Drawing.Point(22, 3)
        Me.NekoDeath.Name = "NekoDeath"
        Me.NekoDeath.Size = New System.Drawing.Size(28, 34)
        Me.NekoDeath.TabIndex = 17
        Me.NekoDeath.TabStop = False
        Me.NekoDeath.Visible = False
        '
        'tmrMove
        '
        Me.tmrMove.Enabled = True
        Me.tmrMove.Interval = 5
        '
        'tmrBlockMove
        '
        Me.tmrBlockMove.Enabled = True
        Me.tmrBlockMove.Interval = 20
        '
        'PanelGame
        '
        Me.PanelGame.BackColor = System.Drawing.Color.FromArgb(CType(CType(200, Byte), Integer), CType(CType(200, Byte), Integer), CType(CType(250, Byte), Integer))
        Me.PanelGame.Controls.Add(Me.lblYouWin)
        Me.PanelGame.Controls.Add(Me.lblPause)
        Me.PanelGame.Controls.Add(Me.UpHigh)
        Me.PanelGame.Controls.Add(Me.Person)
        Me.PanelGame.Controls.Add(Me.Block7)
        Me.PanelGame.Controls.Add(Me.Block10)
        Me.PanelGame.Controls.Add(Me.Block8)
        Me.PanelGame.Controls.Add(Me.Block9)
        Me.PanelGame.Controls.Add(Me.Block6)
        Me.PanelGame.Controls.Add(Me.Block5)
        Me.PanelGame.Controls.Add(Me.Block4)
        Me.PanelGame.Controls.Add(Me.Block2)
        Me.PanelGame.Controls.Add(Me.Block1)
        Me.PanelGame.Controls.Add(Me.Block3)
        Me.PanelGame.Controls.Add(Me.Images)
        Me.PanelGame.Controls.Add(Me.Star)
        Me.PanelGame.Controls.Add(Me.View)
        Me.PanelGame.Location = New System.Drawing.Point(0, 0)
        Me.PanelGame.Name = "PanelGame"
        Me.PanelGame.Size = New System.Drawing.Size(396, 474)
        Me.PanelGame.TabIndex = 38
        '
        'lblPause
        '
        Me.lblPause.AutoSize = True
        Me.lblPause.Font = New System.Drawing.Font("Microsoft Sans Serif", 20.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblPause.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblPause.Location = New System.Drawing.Point(155, 117)
        Me.lblPause.Name = "lblPause"
        Me.lblPause.Size = New System.Drawing.Size(91, 31)
        Me.lblPause.TabIndex = 38
        Me.lblPause.Text = "Pause"
        Me.lblPause.Visible = False
        '
        'UpHigh
        '
        Me.UpHigh.BackColor = System.Drawing.Color.Red
        Me.UpHigh.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.UpHigh.Location = New System.Drawing.Point(330, 150)
        Me.UpHigh.Name = "UpHigh"
        Me.UpHigh.Size = New System.Drawing.Size(10, 10)
        Me.UpHigh.TabIndex = 27
        Me.UpHigh.TabStop = False
        '
        'Person
        '
        Me.Person.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.Person.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.Person.Location = New System.Drawing.Point(186, 3)
        Me.Person.Name = "Person"
        Me.Person.Size = New System.Drawing.Size(28, 34)
        Me.Person.TabIndex = 24
        Me.Person.TabStop = False
        '
        'Block7
        '
        Me.Block7.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block7.Location = New System.Drawing.Point(186, 287)
        Me.Block7.Name = "Block7"
        Me.Block7.Size = New System.Drawing.Size(60, 5)
        Me.Block7.TabIndex = 37
        Me.Block7.TabStop = False
        '
        'Block10
        '
        Me.Block10.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block10.Location = New System.Drawing.Point(280, 440)
        Me.Block10.Name = "Block10"
        Me.Block10.Size = New System.Drawing.Size(60, 5)
        Me.Block10.TabIndex = 36
        Me.Block10.TabStop = False
        '
        'Block8
        '
        Me.Block8.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block8.Location = New System.Drawing.Point(229, 345)
        Me.Block8.Name = "Block8"
        Me.Block8.Size = New System.Drawing.Size(60, 5)
        Me.Block8.TabIndex = 35
        Me.Block8.TabStop = False
        '
        'Block9
        '
        Me.Block9.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block9.Location = New System.Drawing.Point(96, 400)
        Me.Block9.Name = "Block9"
        Me.Block9.Size = New System.Drawing.Size(60, 5)
        Me.Block9.TabIndex = 34
        Me.Block9.TabStop = False
        '
        'Block6
        '
        Me.Block6.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block6.Location = New System.Drawing.Point(154, 240)
        Me.Block6.Name = "Block6"
        Me.Block6.Size = New System.Drawing.Size(60, 5)
        Me.Block6.TabIndex = 32
        Me.Block6.TabStop = False
        '
        'Block5
        '
        Me.Block5.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block5.Location = New System.Drawing.Point(81, 187)
        Me.Block5.Name = "Block5"
        Me.Block5.Size = New System.Drawing.Size(60, 5)
        Me.Block5.TabIndex = 31
        Me.Block5.TabStop = False
        '
        'Block4
        '
        Me.Block4.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block4.Location = New System.Drawing.Point(262, 155)
        Me.Block4.Name = "Block4"
        Me.Block4.Size = New System.Drawing.Size(60, 5)
        Me.Block4.TabIndex = 30
        Me.Block4.TabStop = False
        '
        'Block2
        '
        Me.Block2.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block2.Location = New System.Drawing.Point(81, 45)
        Me.Block2.Name = "Block2"
        Me.Block2.Size = New System.Drawing.Size(60, 5)
        Me.Block2.TabIndex = 26
        Me.Block2.TabStop = False
        '
        'Block1
        '
        Me.Block1.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block1.Location = New System.Drawing.Point(295, 3)
        Me.Block1.Name = "Block1"
        Me.Block1.Size = New System.Drawing.Size(60, 5)
        Me.Block1.TabIndex = 25
        Me.Block1.TabStop = False
        '
        'Block3
        '
        Me.Block3.BackColor = System.Drawing.Color.FromArgb(CType(CType(128, Byte), Integer), CType(CType(64, Byte), Integer), CType(CType(0, Byte), Integer))
        Me.Block3.Location = New System.Drawing.Point(216, 90)
        Me.Block3.Name = "Block3"
        Me.Block3.Size = New System.Drawing.Size(60, 5)
        Me.Block3.TabIndex = 29
        Me.Block3.TabStop = False
        '
        'Star
        '
        Me.Star.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.Star.Image = Global.ReachTheTop.My.Resources.Resources.Star
        Me.Star.Location = New System.Drawing.Point(314, 67)
        Me.Star.Name = "Star"
        Me.Star.Size = New System.Drawing.Size(41, 38)
        Me.Star.TabIndex = 21
        Me.Star.TabStop = False
        Me.Star.Visible = False
        '
        'View
        '
        Me.View.BackgroundImage = Global.ReachTheTop.My.Resources.Resources.View1
        Me.View.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.View.Location = New System.Drawing.Point(0, -502)
        Me.View.Name = "View"
        Me.View.Size = New System.Drawing.Size(395, 973)
        Me.View.TabIndex = 39
        Me.View.TabStop = False
        '
        'lblScore
        '
        Me.lblScore.AutoSize = True
        Me.lblScore.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblScore.Location = New System.Drawing.Point(447, 249)
        Me.lblScore.Name = "lblScore"
        Me.lblScore.Size = New System.Drawing.Size(56, 20)
        Me.lblScore.TabIndex = 39
        Me.lblScore.Text = "Height"
        '
        'lblCurrentScore
        '
        Me.lblCurrentScore.AutoSize = True
        Me.lblCurrentScore.Location = New System.Drawing.Point(523, 254)
        Me.lblCurrentScore.MaximumSize = New System.Drawing.Size(40, 15)
        Me.lblCurrentScore.Name = "lblCurrentScore"
        Me.lblCurrentScore.Size = New System.Drawing.Size(13, 13)
        Me.lblCurrentScore.TabIndex = 40
        Me.lblCurrentScore.Text = "0"
        '
        'tmrThingsMove
        '
        Me.tmrThingsMove.Enabled = True
        Me.tmrThingsMove.Interval = 1000
        '
        'lblft
        '
        Me.lblft.AutoSize = True
        Me.lblft.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblft.Location = New System.Drawing.Point(576, 248)
        Me.lblft.Name = "lblft"
        Me.lblft.Size = New System.Drawing.Size(30, 20)
        Me.lblft.TabIndex = 41
        Me.lblft.Text = "km"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(622, 287)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(122, 13)
        Me.Label4.TabIndex = 45
        Me.Label4.Text = "500 km = Thermosphere"
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(622, 393)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(99, 13)
        Me.Label5.TabIndex = 46
        Me.Label5.Text = "8 km= Troposphere"
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(622, 359)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(108, 13)
        Me.Label6.TabIndex = 47
        Me.Label6.Text = "50 km = Stratosphere"
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(622, 323)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(101, 13)
        Me.Label7.TabIndex = 48
        Me.Label7.Text = "85 km = Mesophere"
        '
        'PictureBox1
        '
        Me.PictureBox1.BackgroundImage = Global.ReachTheTop.My.Resources.Resources.Atmosphere
        Me.PictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch
        Me.PictureBox1.Location = New System.Drawing.Point(404, 0)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(324, 226)
        Me.PictureBox1.TabIndex = 49
        Me.PictureBox1.TabStop = False
        '
        'lblYouWin
        '
        Me.lblYouWin.AutoSize = True
        Me.lblYouWin.Font = New System.Drawing.Font("Microsoft Sans Serif", 36.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(222, Byte))
        Me.lblYouWin.ForeColor = System.Drawing.SystemColors.ButtonFace
        Me.lblYouWin.Location = New System.Drawing.Point(75, 249)
        Me.lblYouWin.Name = "lblYouWin"
        Me.lblYouWin.Size = New System.Drawing.Size(0, 55)
        Me.lblYouWin.TabIndex = 50
        '
        'ReachTheTop
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.SystemColors.Control
        Me.ClientSize = New System.Drawing.Size(759, 469)
        Me.Controls.Add(Me.PictureBox1)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.Label6)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.lblft)
        Me.Controls.Add(Me.lblCurrentScore)
        Me.Controls.Add(Me.lblScore)
        Me.Controls.Add(Me.PanelGame)
        Me.Name = "ReachTheTop"
        Me.Text = "MarioJump"
        Me.Images.ResumeLayout(False)
        CType(Me.NekoJumpLeft, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.TekiLeft, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoRight, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoLeft, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoJumpRight, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.NekoDeath, System.ComponentModel.ISupportInitialize).EndInit()
        Me.PanelGame.ResumeLayout(False)
        Me.PanelGame.PerformLayout()
        CType(Me.UpHigh, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Person, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block7, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block10, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block8, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block9, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block6, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block5, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block4, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Block3, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.Star, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.View, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents UpHigh As System.Windows.Forms.PictureBox
    Friend WithEvents Block2 As System.Windows.Forms.PictureBox
    Friend WithEvents Block1 As System.Windows.Forms.PictureBox
    Friend WithEvents Person As System.Windows.Forms.PictureBox
    Friend WithEvents Images As System.Windows.Forms.Panel
    Friend WithEvents NekoJumpLeft As System.Windows.Forms.PictureBox
    Friend WithEvents TekiLeft As System.Windows.Forms.PictureBox
    Friend WithEvents Star As System.Windows.Forms.PictureBox
    Friend WithEvents NekoRight As System.Windows.Forms.PictureBox
    Friend WithEvents NekoLeft As System.Windows.Forms.PictureBox
    Friend WithEvents NekoJumpRight As System.Windows.Forms.PictureBox
    Friend WithEvents NekoDeath As System.Windows.Forms.PictureBox
    Friend WithEvents tmrMove As System.Windows.Forms.Timer
    Friend WithEvents Block3 As System.Windows.Forms.PictureBox
    Friend WithEvents Block4 As System.Windows.Forms.PictureBox
    Friend WithEvents Block5 As System.Windows.Forms.PictureBox
    Friend WithEvents Block6 As System.Windows.Forms.PictureBox
    Friend WithEvents tmrBlockMove As System.Windows.Forms.Timer
    Friend WithEvents Block9 As System.Windows.Forms.PictureBox
    Friend WithEvents Block8 As System.Windows.Forms.PictureBox
    Friend WithEvents Block10 As System.Windows.Forms.PictureBox
    Friend WithEvents Block7 As System.Windows.Forms.PictureBox
    Friend WithEvents PanelGame As System.Windows.Forms.Panel
    Friend WithEvents lblScore As System.Windows.Forms.Label
    Friend WithEvents lblCurrentScore As System.Windows.Forms.Label
    Friend WithEvents tmrThingsMove As System.Windows.Forms.Timer
    Friend WithEvents lblft As System.Windows.Forms.Label
    Friend WithEvents lblPause As System.Windows.Forms.Label
    Friend WithEvents Label4 As System.Windows.Forms.Label
    Friend WithEvents Label5 As System.Windows.Forms.Label
    Friend WithEvents Label6 As System.Windows.Forms.Label
    Friend WithEvents Label7 As System.Windows.Forms.Label
    Friend WithEvents PictureBox1 As System.Windows.Forms.PictureBox
    Friend WithEvents View As System.Windows.Forms.PictureBox
    Friend WithEvents lblYouWin As System.Windows.Forms.Label

End Class
