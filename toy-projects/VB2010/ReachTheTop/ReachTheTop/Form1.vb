Option Explicit On
Public Class ReachTheTop
    Dim DirectionLeft, DirectionRight, DirectionUp, DirectionDown As Integer
    Dim PersonSpeedX, PersonSpeedUp, PersonSpeedDown As Integer
    Dim BeforeJumpY, p As Integer
    Dim Score As Double = 0
    Dim Death As Boolean
    Dim PointMoveOld As Integer
    Dim BlockSpeed As Integer
    Dim ScoreSpeed As Double
    Dim PersonX, PersonY As Integer
    Dim JumpHigh, Count As Integer
    Dim a, b, c As Integer
    Private Sub ReachTheTop_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Person.Image = NekoRight.Image
        PersonSpeedX = 5
        PersonSpeedUp = 4
        PersonSpeedDown = 4
        JumpHigh = 100
        Begin()
        a = 200
        b = 200
        c = 250
    End Sub
    Function IsCollide(ByVal Unit As Object)
        Dim fact As Boolean
        fact = Person.Location.X + Person.Width > Unit.location.X And Person.Location.X < Unit.location.X + Unit.Width And Person.Location.Y + Person.Height > Unit.location.y And Person.Location.Y < Unit.location.y + Unit.height
        Return fact
    End Function
    Function IsNotOnBlock(ByVal PersonX As Integer, ByVal PersonY As Integer, _
                          ByVal Block1X As Integer, ByVal Block1Y As Integer, _
                          ByVal Block2X As Integer, ByVal Block2Y As Integer, _
                          ByVal Block1Width As Integer, ByVal Block2Width As Integer)
        Dim fact As Boolean
        fact = Not ((PersonY >= Block1Y - 36 And PersonY <= Block1Y - 31 _
                     And PersonX >= Block1X - 24 And PersonX <= Block1X + Block1Width - 5) _
                     Or (PersonY >= Block2Y - 36 And PersonY <= Block2Y - 31 _
                         And PersonX >= Block2X - 24 And PersonX <= Block2X + Block2Width - 5))
        Return fact
    End Function
    Function IsNotOn(ByVal Unit1 As Object, ByVal Unit2 As Object)
        Dim fact As Boolean
        fact = IsNotOnBlock(Person.Location.X, Person.Location.Y, Unit1.Location.X, _
        Unit1.Location.Y, Unit2.Location.X, Unit2.Location.Y, Unit1.Width, Unit2.Width)
        Return fact
    End Function
    Function IsNotOnAllBlocks()
        Dim fact As Boolean
        fact = IsNotOn(Block1, Block2) And IsNotOn(Block3, Block4) _
        And IsNotOn(Block5, Block6) And IsNotOn(Block7, Block8) And IsNotOn(Block9, Block10)
        Return fact
    End Function
    Private Sub BlockColor(ByVal Color As Color)
        Block1.BackColor = Color
        Block2.BackColor = Color
        Block3.BackColor = Color
        Block4.BackColor = Color
        Block5.BackColor = Color
        Block6.BackColor = Color
        Block7.BackColor = Color
        Block8.BackColor = Color
        Block9.BackColor = Color
        Block10.BackColor = Color
    End Sub
    Private Sub BlockMove(ByVal StepX As Integer, ByVal StepY As Integer)
        If (StepY < 0) Then
            BlockColor(Color.FromArgb(250, 250, 250))
        End If
        Shift(Block1, StepX, StepY)
        Shift(Block2, StepX, StepY)
        Shift(Block3, StepX, StepY)
        Shift(Block4, StepX, StepY)
        Shift(Block5, StepX, StepY)
        Shift(Block6, StepX, StepY)
        Shift(Block7, StepX, StepY)
        Shift(Block8, StepX, StepY)
        Shift(Block9, StepX, StepY)
        Shift(Block10, StepX, StepY)
    End Sub
    Private Sub Shift(ByVal Unit As Object, ByVal ShiftX As Integer, ByVal ShiftY As Integer)
        Unit.location = New Point(Unit.location.x + ShiftX, Unit.location.y + ShiftY)
    End Sub
    Private Sub AllTmrClose(ByVal State As Boolean)
        tmrMove.Enabled = Not State
        tmrBlockMove.Enabled = Not State
    End Sub
    Private Sub ReachTheTop_KeyDown(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyDown
        If e.KeyCode = Keys.P And lblYouWin.Text = "" Then
            If (tmrMove.Enabled = False) Then
                lblPause.Visible = False
                AllTmrClose(False)
            Else
                lblPause.Visible = True
                AllTmrClose(True)
            End If
        End If
        If e.KeyCode = Keys.Left Then
            DirectionLeft = 1
        ElseIf e.KeyCode = Keys.Right Then
            DirectionRight = 1
        ElseIf e.KeyCode = Keys.Up And DirectionDown <> 1 Then
            If DirectionUp <> 1 Then
                My.Computer.Audio.Play("C:\Users\VAIO\Desktop\ReachTheTop\jump.wav", AudioPlayMode.Background)
            End If
            DirectionUp = 1
        End If
    End Sub
    Private Sub Begin()
        Dim StepY As Integer = 53
        DirectionUp = 0
        DirectionDown = 1
        Randomize()
        If Score < 4 Then
            Block1.Location = New Point(Rnd() * 340, 0)
        End If
        Block2.Location = New Point(Rnd() * 340, StepY * 1)
        If Score < 8 Then
            Block3.Location = New Point(Rnd() * 340, StepY * 2)
        End If
        Block4.Location = New Point(Rnd() * 340, StepY * 3)
        If Score < 12 Then
            Block5.Location = New Point(Rnd() * 340, StepY * 4)
        End If
        Block6.Location = New Point(Rnd() * 340, StepY * 5)
        If Score < 40 Then
            Block7.Location = New Point(Rnd() * 340, StepY * 6)
        End If
        Block8.Location = New Point(Rnd() * 340, StepY * 7)
        If Score < 300 Then
            Block9.Location = New Point(Rnd() * 340, StepY * 8)
        End If
        Block10.Location = New Point(Rnd() * 340, StepY * 9)
    End Sub
    Private Sub Fallen()
        Death = True
        Person.Location = New Point(Person.Location.X, -20)
        If Score >= 20 * ScoreSpeed Then
            Score -= 20 * ScoreSpeed
        Else
            Score = 0
        End If
        Begin()
    End Sub
    Private Sub ReachTheTop_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyUp
        If e.KeyCode = Keys.Left Then
            DirectionLeft = 0
        End If
        If e.KeyCode = Keys.Right Then
            DirectionRight = 0
        End If
    End Sub
    Private Sub tmrMove_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrMove.Tick
        If (DirectionUp = 1 And DirectionDown <> 1) Then
            If (p = 0) Then
                BeforeJumpY = Person.Location.Y
            End If
            If Person.Image.Equals(NekoLeft.Image) Then
                Person.Image = NekoJumpLeft.Image
            ElseIf Person.Image.Equals(NekoRight.Image) Then
                Person.Image = NekoJumpRight.Image
            End If
            p += 1
            Shift(Person, 0, -PersonSpeedUp)
            PersonSpeedX = 5
        End If

        If Person.Location.Y < -20 Or Person.Location.Y < BeforeJumpY - JumpHigh Then
            DirectionUp = 0
            DirectionDown = 1
            p = 0
        End If

        If DirectionLeft = 1 Then
            If Person.Location.X > 0 Then
                Shift(Person, -PersonSpeedX, 0)
            End If
            If DirectionUp = 0 Then
                Person.Image = NekoLeft.Image
            Else
                Person.Image = NekoJumpLeft.Image
            End If
        End If

        If DirectionRight = 1 Then
            If Person.Location.X < 370 Then
                Shift(Person, PersonSpeedX, 0)
                If DirectionUp = 0 Then
                    Person.Image = NekoRight.Image
                Else
                    Person.Image = NekoJumpRight.Image
                End If
            End If
        End If

        If (DirectionUp = 0) Then
            If IsNotOnAllBlocks() Then
                DirectionDown = 1
            Else
                DirectionDown = 0
                If Person.Image.Equals(NekoJumpLeft.Image) Then
                    Person.Image = NekoLeft.Image
                ElseIf Person.Image.Equals(NekoJumpRight.Image) Then
                    Person.Image = NekoRight.Image
                End If
                PersonSpeedX = 5
            End If
        End If

        If (DirectionDown = 1) Then
            If IsNotOnAllBlocks() Then
                Shift(Person, 0, PersonSpeedDown)
            End If
        End If

        If Person.Location.Y > 497 Then
            Fallen()
        End If

        If IsCollide(UpHigh) Then
            DirectionUp = 1
            DirectionDown = 0
            Count = Score
            JumpHigh = 499
            UpHigh.Location = New Point(600, 0)
            BlockColor(Color.FromArgb(250, 125, 125))
        End If

        If (Math.Abs(Score - Count) > BlockSpeed * 6 And JumpHigh <> 100 And JumpHigh <> 125 _
            And JumpHigh <> 130 And JumpHigh <> 95 And JumpHigh <> 90 _
            And JumpHigh <> 80 And JumpHigh <> 115) Then
            Randomize()
            UpHigh.Location = New Point(Rnd() * 340 + 10, Rnd() * 440 + 10)
            If (Score < 120) Then
                JumpHigh = 100
            ElseIf (Score < 150) Then
                JumpHigh = 125
            Else
                JumpHigh = 150
            End If
            BlockColor(Color.FromArgb(128, 64, 0))
        End If
    End Sub
    Private Sub SetDifficulty(ByVal BlockSpeedSet As Integer, ByVal JumpHighSet As Integer)
        If (JumpHigh < 499) Then
            JumpHigh = JumpHighSet
        End If
        BlockSpeed = BlockSpeedSet
    End Sub
    Private Sub tmrBlockMove_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrBlockMove.Tick
        Count += 1
        Randomize()
        BlockMove(0, BlockSpeed)
        If Not IsNotOnAllBlocks() Then
            Shift(Person, 0, BlockSpeed)
        End If
        If (Score < 4) Then
            BeginBlockPosition(Block1)
        End If
        If (Score < 8) Then
            BeginBlockPosition(Block3)
        End If
        If (Score < 12) Then
            BeginBlockPosition(Block5)
        End If
        If (Score < 40) Then
            BeginBlockPosition(Block7)
        End If
        If (Score < 300) Then
            BeginBlockPosition(Block9)
        End If
        If (Score < 400) Then
            BeginBlockPosition(Block10)
        End If
        BeginBlockPosition(Block2)
        BeginBlockPosition(Block4)
        BeginBlockPosition(Block6)
        BeginBlockPosition(Block8)

        If (Score < 12) Then
            SetDifficulty(3, 130)
        ElseIf (Score < 20) Then
            SetDifficulty(3, 125)
        ElseIf (Score < 28) Then
            SetDifficulty(2, 80)
        ElseIf (Score < 50) Then
            SetDifficulty(3, 115)
        ElseIf (Score < 100) Then
            SetDifficulty(3, 100)
        ElseIf (Score < 200) Then
            SetDifficulty(3, 95)
        Else
            SetDifficulty(3, 100)
        End If

        If (Score >= 500) Then
            AllTmrClose(True)
            lblYouWin.Text = "You Win!"
        End If
        lblCurrentScore.Text = Score

        PanelGame.BackColor = Color.FromArgb(a, b, c)
        If Fix(250 - Score / 2) > 0 Then
            a = Fix(200 - Score * 2 / 5)
            b = Fix(200 - Score * 2 / 5)
            c = Fix(250 - Score / 2)
        Else
            a = 0
            b = 0
            c = 0
        End If
        If c < 20 Then
            Star.Visible = True
        Else
            Star.Visible = False
        End If
        'Label1.Text = a
        'Label2.Text = b
        'Label3.Text = c

    End Sub
    Private Sub BeginBlockPosition(ByVal Unit As Object)
        If Score <= 8 Then
            ScoreSpeed = 0.1
        ElseIf Score <= 50 Then
            ScoreSpeed = 0.6
        ElseIf Score <= 85 Then
            ScoreSpeed = 0.4
        Else
            ScoreSpeed = 2
        End If
        If (Unit.location.Y > 480) Then
            Score += ScoreSpeed
            Unit.Location = New Point(Fix(Rnd() * 340), 0)
        End If
        If PanelGame.BackColor = Color.FromArgb(0, 0, 0) Then
            Star.Visible = True
        End If
    End Sub
    Private Sub tmrThingsMove_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrThingsMove.Tick
        PersonSpeedUp = 4
        PersonSpeedDown = 4
        If (Score <= 500) Then
            View.Location = New Point(View.Location.X, -500 + Score)
        End If
    End Sub
End Class
