Public Class SnakeMaze
    Dim Direction As String = ""
    Dim x1, y1, x2, y2, x3, y3, x4, y4 As Integer
    Dim m As Integer
    Dim Lives As Integer = 2
    Dim level As Integer = 1
    Dim Blk1speed, Blk2speed, Blk3Speed, Blk4speed, Blk5Speed, Blk6Speed As Integer
    Dim SnakeSpeed As Integer
    Dim Cheat As Integer
    Dim OpacityValue As Double
    Dim Gold As Integer
    Private Sub Shift(ByVal Unit As Object, ByVal ShiftX As Integer, ByVal ShiftY As Integer)
        Unit.location = New Point(Unit.location.x + ShiftX, Unit.location.y + ShiftY)
    End Sub
    Function IsCollide(ByVal UnitMe As Object, ByVal Unit As Object)
        Dim fact As Boolean
        fact = UnitMe.Location.X + UnitMe.Width > Unit.location.X And UnitMe.Location.X < Unit.location.X + Unit.Width And UnitMe.Location.Y + UnitMe.Width > Unit.location.y And UnitMe.Location.Y < Unit.location.y + Unit.height
        Return fact
    End Function
    Private Sub Define()
        x1 = pic1.Location.X
        y1 = pic1.Location.Y
        x2 = pic2.Location.X
        y2 = pic2.Location.Y
        x3 = pic3.Location.X
        y3 = pic3.Location.Y
        x4 = pic4.Location.X
        y4 = pic4.Location.Y
    End Sub
    Private Sub Form1_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyUp
        If e.KeyCode = Keys.Left And Direction <> "Right" And m >= 1 Then
            Direction = "Left"
            Define()
            m = 0
        ElseIf e.KeyCode = Keys.Right And Direction <> "Left" And m >= 1 Then
            Direction = "Right"
            Define()
            m = 0
        ElseIf e.KeyCode = Keys.Up And Direction <> "Down" And m >= 1 Then
            Direction = "Up"
            Define()
            m = 0
        ElseIf e.KeyCode = Keys.Down And Direction <> "Up" And m >= 1 Then
            Direction = "Down"
            Define()
            m = 0
        End If
        If e.KeyCode = Keys.C Then
            Cheat = 1
        ElseIf e.KeyCode = Keys.H And Cheat = 1 Then
            Cheat = 2
        ElseIf e.KeyCode = Keys.E And Cheat = 2 Then
            Cheat = 3
        ElseIf e.KeyCode = Keys.A And Cheat = 3 Then
            Cheat = 4
        ElseIf e.KeyCode = Keys.T And Cheat = 4 Then
            lblCheatEnable.Visible = True
            lblCheatEnable.Text = "Cheat Enabled!"
            Cheat = 5
        ElseIf e.KeyCode <> Keys.Left And e.KeyCode <> Keys.Right And e.KeyCode <> Keys.Up And e.KeyCode <> Keys.Down Then
            lblCheatEnable.Visible = False
            lblCheatEnable.Text = "Cheat Be Not Enabled"
            Cheat = 0
        End If
    End Sub
    Private Sub TamGunMa()
        If m = 0 Then
            pic2.Location = New Point(x1, y1)
            pic3.Location = New Point(x2, y2)
            pic4.Location = New Point(x3, y3)
            pic5.Location = New Point(x4, y4)
        ElseIf m = 1 Then
            pic3.Location = New Point(x1, y1)
            pic4.Location = New Point(x2, y2)
            pic5.Location = New Point(x3, y3)
        ElseIf m = 2 Then
            pic4.Location = New Point(x1, y1)
            pic5.Location = New Point(x2, y2)
        ElseIf m = 3 Then
            pic5.Location = New Point(x1, y1)
        End If
    End Sub
    Private Sub tmrMove_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrMove.Tick
        If Direction = "Left" Then
            Shift(pic1, -SnakeSpeed, 0)
            If m >= 1 Then
                Shift(pic2, -SnakeSpeed, 0)
            End If
            If m >= 2 Then
                Shift(pic3, -SnakeSpeed, 0)
            End If
            If m >= 3 Then
                Shift(pic4, -SnakeSpeed, 0)
            End If
            If m >= 4 Then
                Shift(pic5, -SnakeSpeed, 0)
            End If
            TamGunMa()
            m += 1
        End If
        If Direction = "Right" Then
            Shift(pic1, SnakeSpeed, 0)
            If m >= 1 Then
                Shift(pic2, SnakeSpeed, 0)
            End If
            If m >= 2 Then
                Shift(pic3, SnakeSpeed, 0)
            End If
            If m >= 3 Then
                Shift(pic4, SnakeSpeed, 0)
            End If
            If m >= 4 Then
                Shift(pic5, SnakeSpeed, 0)
            End If
            TamGunMa()
            m += 1
        End If
        If Direction = "Up" Then
            Shift(pic1, 0, -SnakeSpeed)
            If m >= 1 Then
                Shift(pic2, 0, -SnakeSpeed)
            End If
            If m >= 2 Then
                Shift(pic3, 0, -SnakeSpeed)
            End If
            If m >= 3 Then
                Shift(pic4, 0, -SnakeSpeed)
            End If
            If m >= 4 Then
                Shift(pic5, 0, -SnakeSpeed)
            End If
            TamGunMa()
            m += 1
        End If
        If Direction = "Down" Then
            Shift(pic1, 0, SnakeSpeed)
            If m >= 1 Then
                Shift(pic2, 0, SnakeSpeed)
            End If
            If m >= 2 Then
                Shift(pic3, 0, SnakeSpeed)
            End If
            If m >= 3 Then
                Shift(pic4, 0, SnakeSpeed)
            End If
            If m >= 4 Then
                Shift(pic5, 0, SnakeSpeed)
            End If
            TamGunMa()
            m += 1
        End If
    End Sub
    Private Sub tmrCheck_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrCheck.Tick
        If lblCheatEnable.Text <> "Cheat Enabled!" Then
            If pic1.Location.X < 0 Or pic1.Location.X > 716 Or pic1.Location.Y < 0 Or pic1.Location.Y > 396 Then
                ConditionCollide()
            End If
            If IsCollide(pic1, blk1) Or IsCollide(pic1, blk2) Or IsCollide(pic1, blk3) Or IsCollide(pic1, blk4) Or IsCollide(pic1, blk5) Or IsCollide(pic1, blk6) Then
                ConditionCollide()
            ElseIf IsCollide(pic2, blk1) Or IsCollide(pic2, blk2) Or IsCollide(pic2, blk3) Or IsCollide(pic2, blk4) Or IsCollide(pic2, blk5) Or IsCollide(pic2, blk6) Then
                ConditionCollide()
            ElseIf IsCollide(pic3, blk1) Or IsCollide(pic3, blk2) Or IsCollide(pic3, blk3) Or IsCollide(pic3, blk4) Or IsCollide(pic3, blk5) Or IsCollide(pic3, blk6) Then
                ConditionCollide()
            ElseIf IsCollide(pic4, blk1) Or IsCollide(pic4, blk2) Or IsCollide(pic4, blk3) Or IsCollide(pic4, blk4) Or IsCollide(pic4, blk5) Or IsCollide(pic4, blk6) Then
                ConditionCollide()
            ElseIf IsCollide(pic5, blk1) Or IsCollide(pic5, blk2) Or IsCollide(pic5, blk3) Or IsCollide(pic5, blk4) Or IsCollide(pic5, blk5) Or IsCollide(pic5, blk6) Then
                ConditionCollide()
            End If
        End If
        If IsCollide(pic1, ItemScore1) Or IsCollide(pic1, ItemScore2) Or IsCollide(pic1, ItemScore3) Or IsCollide(pic1, ItemScore4) Or IsCollide(pic1, ItemScore5) Then
            If IsCollide(pic1, ItemScore1) Then
                ItemScore1.Location = New Point(2000, 2000)
            ElseIf IsCollide(pic1, ItemScore2) Then
                ItemScore2.Location = New Point(2000, 2000)
            ElseIf IsCollide(pic1, ItemScore3) Then
                ItemScore3.Location = New Point(2000, 2000)
            ElseIf IsCollide(pic1, ItemScore4) Then
                ItemScore4.Location = New Point(2000, 2000)
            ElseIf IsCollide(pic1, ItemScore5) Then
                ItemScore5.Location = New Point(2000, 2000)
            End If
            Gold += 20
            If Gold = 100 Then
                Gold = 0
                Lives += 1
                lblLives.Text = Lives
            End If
            lblGold.Text = Gold
        End If
        If IsCollide(pic1, ItemSpeed1) Or IsCollide(pic1, ItemSpeed2) Then
            If IsCollide(pic1, ItemSpeed1) Then
                ItemSpeed1.Location = New Point(2000, 2000)
            ElseIf IsCollide(pic1, ItemSpeed2) Then
                ItemSpeed2.Location = New Point(2000, 2000)
            End If
            pic1.BackColor = Color.Red
            tmrMove.Interval /= 2
        End If
        If IsCollide(pic1, ItemSlow1) Or IsCollide(pic1, ItemSlow2) Then
            If IsCollide(pic1, ItemSlow1) Then
                ItemSlow1.Location = New Point(2000, 2000)
            ElseIf IsCollide(pic1, ItemSlow2) Then
                ItemSlow2.Location = New Point(2000, 2000)
            End If
            pic1.BackColor = Color.Cyan
            tmrMove.Interval *= 2
        End If
        If IsCollide(pic1, pnlFinish) Then
            ConditionGoal()
        End If
    End Sub
    Private Sub ConditionGoal()
        Threading.Thread.Sleep(1000)
        level += 1
        lblLevel.Text = level
        pnlStart.Visible = True
        tmrStart.Enabled = True
        Direction = ""
        tmrCheck.Enabled = False
        SetSnakeLocation()
    End Sub
    Private Sub ConditionCollide()
        Threading.Thread.Sleep(1000)
        Lives -= 1
        lblLives.Text = Lives
        pnlStart.Visible = True
        tmrStart.Enabled = True
        Direction = ""
        tmrCheck.Enabled = False
        SetSnakeLocation()
    End Sub
    Private Sub SetObstruction()
        If level = 1 Then
            'picBackground.Image = System.Drawing.Image.FromFile("C:\Users\VAIO\Desktop\Volcano.jpg")
            ItemSpeed1.Location = New Point(2000, 2000)
            ItemSpeed2.Location = New Point(2000, 2000)
            ItemSlow1.Location = New Point(2000, 2000)
            ItemSlow2.Location = New Point(2000, 2000)
        End If
        If level = 2 Then
            blk1.Location = New Point(500, 90)
            blk1.Size = New Point(20, 310)
            blk2.Location = New Point(0, 260)
            blk2.Size = New Point(420, 20)
            blk3.Location = New Point(0, 110)
            blk3.Size = New Point(420, 30)
            blk4.Location = New Point(540, 0)
            blk4.Size = New Point(120, 140)
            blk5.Location = New Point(80, 190)
            blk5.Size = New Point(600, 20)
            blk6.Location = New Point(80, 330)
            blk6.Size = New Point(420, 20)
            lblStart.Location = New Point(10, 300)
            pnlFinish.Location = New Point(620, 280)
            ItemScore1.Location = New Point(2000, 2000)
            ItemScore2.Location = New Point(2000, 2000)
            ItemScore3.Location = New Point(2000, 2000)
            ItemScore4.Location = New Point(710, 10)
            ItemScore5.Location = New Point(700, 0)
        End If
        If level = 3 Then
            blk1.Location = New Point(330, 80)
            blk1.Size = New Point(20, 320)
            blk2.Location = New Point(130, 80)
            blk2.Size = New Point(420, 250)
            blk3.Location = New Point(1000, 1000)
            blk3.Size = New Point(3, 3)
            blk4.Location = New Point(430, 100)
            blk4.Size = New Point(150, 20)
            blk5.Location = New Point(0, 200)
            blk5.Size = New Point(600, 20)
            blk6.Location = New Point(180, 80)
            blk6.Size = New Point(20, 110)
            lblStart.Location = New Point(10, 350)
            pnlFinish.Location = New Point(620, 280)
            tmrblkMove.Enabled = True
            ItemScore4.Location = New Point(20, 20)
            ItemScore5.Location = New Point(700, 200)
            ItemSpeed1.Location = New Point(10, 200)
            ItemSpeed2.Location = New Point(30, 200)
            ItemSlow2.Location = New Point(50, 40)
            blk4.BackColor = Color.Aquamarine
            blk5.BackColor = Color.Orange
            blk6.BackColor = Color.Red
            Blk4speed = 4
            Blk5Speed = 5
            Blk6Speed = 3
        End If
        If level = 4 Then
            blk1.Location = New Point(330, 80)
            blk1.Size = New Point(20, 320)
            blk2.Location = New Point(130, 80)
            blk2.Size = New Point(420, 250)
            blk3.Location = New Point(1000, 1000)
            blk3.Size = New Point(3, 3)
            blk4.Location = New Point(430, 100)
            blk4.Size = New Point(150, 20)
            blk5.Location = New Point(0, 200)
            blk5.Size = New Point(600, 20)
            blk6.Location = New Point(180, 80)
            blk6.Size = New Point(20, 110)
            lblStart.Location = New Point(10, 350)
            pnlFinish.Location = New Point(620, 280)
            tmrblkMove.Enabled = True
            ItemScore4.Location = New Point(20, 20)
            ItemScore5.Location = New Point(700, 200)
            ItemSpeed1.Location = New Point(10, 200)
            ItemSpeed2.Location = New Point(30, 200)
            ItemSlow2.Location = New Point(50, 40)
            blk4.BackColor = Color.Aquamarine
            blk5.BackColor = Color.Orange
            blk6.BackColor = Color.Red
            Blk4speed = 4
            Blk5Speed = 5
            Blk6Speed = 3
        End If
    End Sub
    Private Sub SetSnakeLocation()
        pic1.BackColor = Color.Black
        tmrMove.Interval = 50
        m = 0
        SetObstruction()
        If level = 1 Or level = 3 Then
            pic1.Location = New Point(30, 310)
            pic2.Location = New Point(30, 310)
            pic3.Location = New Point(30, 310)
            pic4.Location = New Point(30, 310)
            pic5.Location = New Point(30, 310)
        End If
        If level = 2 Then
            pic1.Location = New Point(110, 300)
            pic2.Location = New Point(110, 300)
            pic3.Location = New Point(110, 300)
            pic4.Location = New Point(110, 300)
            pic5.Location = New Point(110, 300)
        End If
    End Sub
    Private Sub tmrStart_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrStart.Tick
        pnlStart.Visible = False
        tmrStart.Enabled = False
        tmrCheck.Enabled = True
        m = 2
    End Sub
    Private Sub tmrblkMove_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrblkMove.Tick
        If level = 3 Then
            Shift(blk4, Blk4speed, 0)
            Shift(blk5, Blk5Speed, 0)
            Shift(blk6, 0, -Blk6Speed)
            If blk4.Location.X < 430 Then
                Blk4speed -= 2 * Blk4speed
                blk4.Location = New Point(430, 100)
            ElseIf blk4.Location.X + blk4.Width > 736 Then
                Blk4speed -= 2 * Blk4speed
                blk4.Location = New Point(blk4.Location.X - 10, 100)
            End If
            If blk5.Location.X < 0 Then
                Blk5Speed -= 2 * Blk5Speed
                blk5.Location = New Point(0, 200)
            ElseIf blk5.Location.X + blk5.Width > 726 Then
                Blk5Speed -= 2 * Blk5Speed
                blk5.Location = New Point(blk5.Location.X - 10, 200)
            End If
            If blk6.Location.Y < 0 Then
                Blk6Speed -= 2 * Blk6Speed
                blk6.Location = New Point(180, 0)
            ElseIf blk6.Location.Y + blk6.Width > 100 Then
                Blk6Speed -= 2 * Blk6Speed
                blk6.Location = New Point(180, blk6.Location.Y - 10)
            End If
        End If
    End Sub
    Private Sub tmrStartGame_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrStartGame.Tick
        If OpacityValue <= 1 Then
            Me.Opacity = OpacityValue
        End If
        If OpacityValue >= 2 Then
            Me.Opacity = 1
            lblIntro.Visible = True
            Shift(lblIntro, 0, -6)
        End If
        If OpacityValue > 7.5 Then
            tmrStartGame.Enabled = False
            tmrStart.Enabled = True
            tmrCheck.Enabled = True
            tmrMove.Enabled = True
            Panel1.Visible = False
        End If
        OpacityValue += 0.05
    End Sub
    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        lblLives.Text = Lives
        lblLevel.Text = level
        lblGold.Text = Gold
        SetObstruction()
        SetSnakeLocation()
        SnakeSpeed = 10
        Me.Opacity = 0
        lblIntro.Text = "                   This is a story of a little snake." & Chr(10) & Chr(10) & _
                 Chr(10) & Chr(10) & Chr(10) & Chr(10) & Chr(10) & Chr(10) & Chr(10) & _
                "                                   That's all." & Chr(10) & Chr(10)
    End Sub
End Class
