Option Explicit On
Public Class MarioJump
    Dim Game As Test = New ClassTest
    Dim DirectionLeft, DirectionRight, DirectionUp, DirectionDown As Integer
    Dim TekiSpeed, BlockSpeed, PersonSpeedX, PersonSpeedY, UpY As Integer
    Dim BeforeJumpY, p, q, InitialTime As Integer
    Dim Block1X, Block1Y, Block2X, Block2Y, Teki1X, Teki1Y As Integer
    Dim StageNumber As Integer = 1
    Dim Lives As Integer = 2
    Private Sub MarioJump_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        lblStageNum.Text = "Stage   " & StageNumber
        PanelLives.Visible = True
    End Sub
    Private Sub CloseTimers(ByVal Open As Boolean)
        tmrControl.Enabled = Not Open
        tmrMountain.Enabled = Not Open
        tmrBlockMove.Enabled = Not Open
        tmrBlockShift.Enabled = Not Open
    End Sub
    Private Sub AllZeroes()
        Block1X = 0
        Block2X = 0
        Block1Y = 0
        Block2Y = 0
        Teki1X = 0
        Teki1Y = 0
    End Sub
    Function IsNotOn(ByVal Unit1 As Object, ByVal Unit2 As Object)
        Dim fact As Boolean
        fact = Game.IsNotOnBlock(Person.Location.X, Person.Location.Y, Unit1.Location.X, _
        Unit1.Location.Y, Unit2.Location.X, Unit2.Location.Y, Unit1.Width, Unit2.Width)
        Return fact
    End Function
    Function IsCollide(ByVal Unit As Object)
        Dim fact As Boolean
        fact = (Game.IsCollide(Person.Location.X, Person.Location.Y, Unit.Location.X, _
        Unit.Location.Y, Person.Width, Unit.Width))
        Return fact
    End Function
    Private Sub Shift(ByVal Unit As Object, ByVal ShiftX As Integer, ByVal ShiftY As Integer)
        Unit.location = New Point(Unit.location.x + ShiftX, Unit.location.y + ShiftY)
    End Sub
    Private Sub StageBegin(ByVal Color As Color, _
                           ByVal Block1WidthMinus As Integer, ByVal Block2WidthMinus As Integer, _
                           ByVal Music As String)
        My.Computer.Audio.Play(Music, AudioPlayMode.BackgroundLoop)
        If (Block1.BackColor <> Color) Then
            Block1.Width -= Block1WidthMinus
            Block2.Width -= Block2WidthMinus
        End If
        Block1.BackColor = Color
        Block2.BackColor = Color
        TekiSpeed = 4
    End Sub
    Private Sub Begin()
        Person.Image = NekoRight.Image
        PersonSpeedX = 2
        PersonSpeedY = 3
        p = 0
        q = 0
        If (Block1X = 0 And Block2X = 0 And Block1Y = 0 And Block2Y = 0 And Teki1X = 0 And Teki1Y = 0) Then
            Block1X = Block1.Location.X
            Block1Y = Block1.Location.Y
            Block2X = Block2.Location.X
            Block2Y = Block2.Location.Y
            Teki1X = Teki1.Location.X
            Teki1Y = Teki1.Location.Y
        Else
            Block1.Location = New Point(Block1X, Block1Y)
            Block2.Location = New Point(Block2X, Block2Y)
            Teki1.Location = New Point(Teki1X, Teki1Y)
        End If

        If (StageNumber = 1) Then
            StageBegin(Color.FromArgb(128, 64, 0), 0, 0, "C:\Users\VAIO\Desktop\Mario\field.wav")
        End If
        If (StageNumber = 2) Then
            Teki1.BackgroundImage = TekiRight.BackgroundImage
            StageBegin(Color.BlueViolet, 0, 0, "C:\Users\VAIO\Desktop\Mario\dungeon.wav")
        End If
        If (StageNumber = 3) Then
            Teki1.BackgroundImage = TekiLeft.BackgroundImage
            StageBegin(Color.Orange, 20, 20, "C:\Users\VAIO\Desktop\Mario\field.wav")
        End If
        If (StageNumber = 4) Then
            StageBegin(Color.Fuchsia, 30, 20, "C:\Users\VAIO\Desktop\Mario\castle.wav")
            TekiSpeed = 0
            Teki1.Location = New Point(600, 600)
        End If

        Person.Location = New Point(Block1.Location.X, Block1.Location.Y - 34)
        DirectionLeft = 0
        DirectionRight = 0
        DirectionUp = 0
        DirectionDown = 1
        If (Stage.Value > 20) Then
            Stage.Value -= 20
        Else
            Stage.Value = 0
        End If
        PanelLives.Visible = False
        CloseTimers(False)
        tmrDeath.Enabled = False
    End Sub
    Private Sub Death()
        Person.Image = NekoDeath.Image
        Trophy.Location = New Point(600, 25)
        CloseTimers(True)
        tmrDeath.Enabled = True
        My.Computer.Audio.Stop()
        My.Computer.Audio.Play("C:\Users\VAIO\Desktop\Mario\death.wav", AudioPlayMode.Background)
        Threading.Thread.Sleep(500)
        Lives -= 1
    End Sub
    Private Sub MarioJump_KeyDown(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyDown
        If e.KeyCode = Keys.Left Then
            DirectionLeft = 1
        ElseIf e.KeyCode = Keys.Right Then
            DirectionRight = 1
        ElseIf e.KeyCode = Keys.Up And DirectionDown <> 1 Then
            DirectionUp = 1
        End If
    End Sub
    Private Sub MarioJump_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyUp
        If e.KeyCode = Keys.Left Then
            DirectionLeft = 0
        End If
        If e.KeyCode = Keys.Right Then
            DirectionRight = 0
        End If
    End Sub

    Private Sub tmrControl_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrControl.Tick
        If (DirectionLeft = 1) Then
            If (Person.Location.X > 0) Then
                Shift(Person, -PersonSpeedX, 0)
            End If
            If (DirectionUp = 0) Then
                Person.Image = NekoLeft.Image
            Else
                Person.Image = NekoJumpLeft.Image
            End If
        End If

        If (DirectionRight = 1) Then
            If (Person.Location.X < 500) Then
                Shift(Person, PersonSpeedX, 0)
                If (DirectionUp = 0) Then
                    Person.Image = NekoRight.Image
                Else
                    Person.Image = NekoJumpRight.Image
                End If
            End If
        End If

        If (DirectionUp = 0) Then
            If IsNotOn(Block1, Block2) Then
                DirectionDown = 1
            End If
        End If

        If (Person.Location.Y < BeforeJumpY - 100) Then
            DirectionUp = 0
            DirectionDown = 1
            p = 0
        End If

        If (DirectionDown = 1) Then
            Shift(Person, 0, PersonSpeedY)
            If Not IsNotOn(Block1, Block2) Then
                DirectionDown = 0
                PersonSpeedX = 2
            End If
        End If

        If (DirectionUp = 0 And DirectionLeft = 0 And DirectionRight = 0) Then
            If IsNotOn(Block1, Block2) Then
                DirectionDown = 1
            End If
        End If

        If (DirectionUp = 1 And DirectionDown <> 1) Then
            If (p = 0) Then
                BeforeJumpY = Person.Location.Y
            End If
            p += 1
            Shift(Person, 0, -PersonSpeedY)
            PersonSpeedX = 4
        End If

        'Check if it Dies or Reaches Trophy
        If (Person.Location.Y >= 420) Then
            Death()
        End If

        If IsCollide(Teki1) Then
            Death()
        End If

        If IsCollide(Trophy) Then
            Threading.Thread.Sleep(500)
            Person.Location = New Point(Person.Location.X, -30000)
            PanelLives.Visible = True
            CloseTimers(True)
            My.Computer.Audio.Stop()
            My.Computer.Audio.Play("C:\Users\VAIO\Desktop\Mario\goal.wav", AudioPlayMode.Background)
            InitialTime = 0
            Stage.Value = 0
            StageNumber += 1
            Trophy.Location = New Point(600, 25)
            If (StageNumber = 5) Then
                PanelLives.Visible = True
                NekoRightBlack.Visible = False
                lblLives.Visible = False
                lblStageNum.Location = New Point(110, 420)
                lblStageNum.Text = "                                Credit " & Chr(10) & Chr(10) & _
                "Executive Producer       Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Programming                 Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Director                        Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Manager                       Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Game Design               Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Art                            Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Creative                      Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Marketing                    Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Graphics                     Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Grean                            Theerawat Kiatdarakun" & Chr(10) & Chr(10) & _
                "Music & Sound              From 'Neko Mario' Game" & Chr(10) & Chr(10) & _
                "Picture                         From 'Neko Mario' Game"
                tmrCredit.Enabled = True
            Else
                tmrOpenGame.Enabled = True
                lblStageNum.Text = "Stage   " & StageNumber
            End If
        End If

    End Sub

    Private Sub tmrBlockMove_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrBlockMove.Tick
        If ((q >= 1 And q <= 25) Or (q >= 30 And q <= 40)) Then
            Shift(Block1, -BlockSpeed, 0)
            Shift(Block2, -BlockSpeed, 0)
        End If
        If (q = 45) Then
            q = 0
        End If
        If (StageNumber = 1 Or StageNumber = 3) Then
            Shift(Teki1, -TekiSpeed, 0)
            If (Teki1.Location.X + 150 < 0) Then
                Teki1.Location = New Point(540, Fix(Rnd() * 200 + 50))
            End If
        ElseIf (StageNumber = 2) Then
            Shift(Teki1, TekiSpeed, 0)
            If (Teki1.Location.X > 530) Then
                Teki1.Location = New Point(0, Fix(Rnd() * 200 + 50))
            End If
        End If
        Randomize()
        If (Block1.Location.X + Block1.Width < 0) Then
            Block1.Location = New Point(540, Rnd() * 75 + 125)
        End If
        If (Block2.Location.X + Block2.Width < 0) Then
            Block2.Location = New Point(540, Fix(Rnd() * 75 + 125))
        End If
    End Sub

    Private Sub tmrMountain_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrMountain.Tick
        Shift(Mountain, -1, 0)
        If (Mountain.Location.X + 150 < 0) Then
            Mountain.Location = New Point(540, Mountain.Location.Y)
        End If
        If (Stage.Value = 100) Then
            Trophy.Location = New Point(225, 25)
        End If
    End Sub

    Private Sub tmrBlockShift_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrBlockShift.Tick
        q += 5
        If (Stage.Value < 100) Then
            If (Stage.Value = 90) Then
                Stage.Value += 9
            ElseIf (Stage.Value = 99) Then
                Stage.Value += 1
            Else
                Stage.Value += 10
            End If
        End If

        If (UpY = -15) Then
            UpY = 15
        Else
            UpY = -15
        End If
        Randomize()
        If (Fix(Rnd() * 2) = 0) Then
            Shift(Block1, 0, UpY)
            Shift(Block2, 0, UpY)
            If IsNotOn(Block1, Block1) Then
                Shift(Person, 0, UpY)
            ElseIf IsNotOn(Block2, Block2) Then
                Shift(Person, 0, UpY)
            End If
        End If

        If (StageNumber = 1) Then
            BlockSpeed = Fix(Stage.Value / 20) + 1
        ElseIf (StageNumber = 2 Or StageNumber = 3) Then
            BlockSpeed = Fix(Stage.Value / 20) + 2
        ElseIf (StageNumber = 4) Then
            BlockSpeed = Fix(Stage.Value / 13) + 2
        End If

    End Sub

    Private Sub tmrDeath_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrDeath.Tick
        Person.Location = New Point(Person.Location.X, Person.Location.Y + 5)
        If (Person.Location.Y > 1000 And Person.Location.Y < 3000) Then
            PanelLives.Visible = True
            lblLives.Text = "  X      " & Lives
        End If
        If (Person.Location.Y > 1300 And Person.Location.Y < 3000) Then
            Begin()
        End If
    End Sub
    Private Sub tmrOpenGame_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrOpenGame.Tick
        InitialTime += 1
        If (InitialTime = 3) Then
            PanelLives.Visible = False
            Begin()
        End If
        If (InitialTime = 6) Then
            tmrOpenGame.Enabled = False
        End If
    End Sub

    Private Sub tmrCredit_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrCredit.Tick
        If (lblStageNum.Location.Y + lblStageNum.Height > -10) Then
            Shift(lblStageNum, 0, -2)
        Else
            Cloud.Visible = True
            lblTheEnd.Visible = True
        End If
    End Sub
End Class

