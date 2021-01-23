Imports System.IO
Public Class Dodge
    Dim Game As Redundancy = New RedundancyDetails
    Dim Direction As Integer
    Dim Teki, Scores, PastScores, Lives, ScoreAdd, p As Integer
    Dim RandomAddScoreX, RandomAddScoreY As Integer
    Dim RandomSlowX, RandomSlowY As Integer
    Dim RandomFireX, RandomFireY As Integer
    Dim RandomHeartX, RandomHeartY As Integer
    Dim Slant, HeartDuration As Integer
    Dim HighScore1st, HighScore2nd As Integer
    Dim Tekispeed, PersonSpeed As Integer
    Dim TekiWidth, PersonWidth, AddScoreWidth, SlowWidth, FireWidth, HeartWidth As Integer
    Dim Cheat As Integer

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        BeginGameDetails()
        btnPlay.Enabled = False
        Me.Width = 460
        'Label5.Font = New Font(Label5.Text, 16, GraphicsUnit.Point)
    End Sub
    Private Sub TmrsClose(ByVal isSessionOpen As Boolean)
        tmrRun.Enabled = Not isSessionOpen
        tmrRandomTeki.Enabled = Not isSessionOpen
        tmrScore.Enabled = Not isSessionOpen
        tmrCount.Enabled = Not isSessionOpen
    End Sub

    Private Sub Collide()
        TmrsClose(True)
        btnPlay.Enabled = True
        MenuBar.Enabled = True
        Lives -= 1
        lblLives.Text = Lives
        If (Lives >= 0) Then
            MsgBox("Collide!")
        Else
            lblLives.Text = "0"
            MsgBox("Game over")
            btnPlay.Text = "Restart"
            If (Scores > HighScore1st) Then
                Dim Message As String
                Message = InputBox("New Highscore!! Type Your Name (7-8 Letters)", "Congratulation!", "AAAAA")
                If (lbl1st.Visible = True) Then
                    HighScore2nd = HighScore1st
                    lbl2nd.Visible = True
                    lbl2ndPerson.Text = lbl1stPerson.Text
                    lbl2ndPoint.Text = lbl1stPoint.Text
                End If
                HighScore1st = Scores
                lbl1stPoint.Text = " :    " & HighScore1st
                lbl1stPerson.Text = Message
                lbl1st.Visible = True
            ElseIf (Scores > HighScore2nd And lbl2ndPoint.Text <> "") Then
                Dim Message As String
                Message = InputBox("New Highscore!! Type Your Name (7-8 Letters)", "Congratulation!", "AAAAA")
                lbl2ndPoint.Text = " :    " & Scores
                lbl2ndPerson.Text = Message
            End If
            btnPlay.Enabled = False
            BeginGameDetails()
            Label12.Visible = True
        End If
        PersonSpeed = 5
        Person.BackColor = Color.White
    End Sub
    Public Sub BeginGameDetails()
        Scores = 0
        Lives = 3
        lblLives.Text = Lives
        lblScores.Text = Scores
        RandomAddScoreX = 425
        RandomAddScoreY = 25
        RandomSlowX = 425
        RandomSlowY = 25
        RandomFireX = 425
        RandomFireY = 25
        RandomHeartX = 425
        RandomHeartY = 25
        Tekispeed = 2
        PersonSpeed = 5
        Slant = 0
        MenuBar.Visible = True
        TekiWidth = 20
        AddScore.Visible = False
        Slow.Visible = False
        Fire.Visible = False
        Heart.Visible = False
        AddscoreWidth = 20
        SlowWidth = 20
        FireWidth = 20
        HeartWidth = 20
        Title.Visible = True
    End Sub
    'Private Sub Dodge_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyUp
    'If e.KeyCode = Keys.Left Or e.KeyCode = Keys.Right Or e.KeyCode = Keys.Up Or e.KeyCode = Keys.Down Then
    'Direction = 0
    'End If
    'End Sub
    Private Sub Dodge_KeyDown(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyDown
        If e.KeyCode = Keys.Space And PersonSpeed <> 9 Then
            Direction = 0
        End If
        'Cheat
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
            Cheat = 5
        ElseIf e.KeyCode = Keys.Space Or e.KeyCode = Keys.Left Or e.KeyCode = Keys.Right Or e.KeyCode = Keys.Up Or e.KeyCode = Keys.Down Then

        Else
            lblCheatEnable.Visible = False
            Cheat = 0
        End If
        'End Cheat
        If e.KeyCode = Keys.Left Then
            If (Person.Location.X <> 0) Then
                Direction = 1
            End If
        ElseIf e.KeyCode = Keys.Right Then
            If (Person.Location.X <> 380) Then
                Direction = 2
            End If
        ElseIf e.KeyCode = Keys.Up Then
            If (Person.Location.Y <> 0) Then
                Direction = 3
            End If
        ElseIf e.KeyCode = Keys.Down Then
            If (Person.Location.Y <> 380) Then
                Direction = 4
            End If
        End If
    End Sub

    Private Sub ExtraLargeClick()
        Person.Width = 40
        Person.Height = 40
        PersonWidth = 40
        tmrScore.Interval = 170
        ScoreAdd = 95
        lblAdd.Text = "+" & ScoreAdd
        lblAdd2.Text = "+" & ScoreAdd
        btnPlay.Enabled = True
        Title.Visible = False
        Me.Width = 650
        DodgeField.BackColor = Color.FromArgb(255, 224, 192)
        lblPlusOne.BackColor = DodgeField.BackColor
    End Sub
    Private Sub LargeClick()
        Person.Width = 30
        Person.Height = 30
        PersonWidth = 30
        tmrScore.Interval = 210
        ScoreAdd = 75
        lblAdd.Text = "+" & ScoreAdd
        lblAdd2.Text = "+" & ScoreAdd
        btnPlay.Enabled = True
        Title.Visible = False
        Me.Width = 650
        DodgeField.BackColor = Color.FromArgb(255, 192, 255)
        lblPlusOne.BackColor = DodgeField.BackColor
    End Sub
    Private Sub MediumClick()
        Person.Width = 20
        Person.Height = 20
        PersonWidth = 20
        tmrScore.Interval = 240
        ScoreAdd = 75
        lblAdd.Text = "+" & ScoreAdd
        lblAdd2.Text = "+" & ScoreAdd
        btnPlay.Enabled = True
        Title.Visible = False
        Me.Width = 650
        DodgeField.BackColor = Color.FromArgb(192, 255, 192)
        lblPlusOne.BackColor = DodgeField.BackColor
    End Sub
    Private Sub TinyClick()
        Person.Width = 10
        Person.Height = 10
        PersonWidth = 10
        tmrScore.Interval = 280
        ScoreAdd = 75
        lblAdd.Text = "+" & ScoreAdd
        lblAdd2.Text = "+" & ScoreAdd
        btnPlay.Enabled = True
        Title.Visible = False
        Me.Width = 650
        DodgeField.BackColor = Color.FromArgb(192, 192, 255)
        lblPlusOne.BackColor = DodgeField.BackColor
    End Sub
    Private Sub tmrRun_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrRun.Tick
        If (Direction = 1 And Person.Location.X - PersonSpeed >= 0) Then
            Person.Location = New Point(Person.Location.X - PersonSpeed, Person.Location.Y)
        ElseIf (Direction = 2 And Person.Location.X + PersonSpeed <= 400 - Person.Width) Then
            Person.Location = New Point(Person.Location.X + PersonSpeed, Person.Location.Y)
        ElseIf (Direction = 3 And Person.Location.Y - PersonSpeed >= 0) Then
            Person.Location = New Point(Person.Location.X, Person.Location.Y - PersonSpeed)
        ElseIf (Direction = 4 And Person.Location.Y + PersonSpeed <= 400 - Person.Width) Then
            Person.Location = New Point(Person.Location.X, Person.Location.Y + PersonSpeed)
        End If
        If (tmrRandomTeki.Enabled = True) Then
            Teki1.Location = New Point(Teki1.Location.X + Slant, Teki1.Location.Y + Tekispeed)
            Teki2.Location = New Point(Teki2.Location.X + Tekispeed, Teki2.Location.Y + Slant)
            Teki3.Location = New Point(Teki3.Location.X - Slant, Teki3.Location.Y - Tekispeed)
            Teki4.Location = New Point(Teki4.Location.X - Tekispeed, Teki4.Location.Y - Slant)
        End If

        If (Cheat <> 5) Then
            If (Game.Test(Person.Location.X, Person.Location.Y, Teki1.Location.X, Teki1.Location.Y, PersonWidth, TekiWidth)) Then
                Collide()
                Exit Sub
            ElseIf (Game.Test(Person.Location.X, Person.Location.Y, Teki2.Location.X, Teki2.Location.Y, PersonWidth, TekiWidth)) Then
                Collide()
                Exit Sub
            ElseIf (Game.Test(Person.Location.X, Person.Location.Y, Teki3.Location.X, Teki3.Location.Y, PersonWidth, TekiWidth)) Then
                Collide()
                Exit Sub
            ElseIf (Game.Test(Person.Location.X, Person.Location.Y, Teki4.Location.X, Teki4.Location.Y, PersonWidth, TekiWidth)) Then
                Collide()
                Exit Sub
            End If
        End If

        If (Game.Test(Person.Location.X, Person.Location.Y, AddScore.Location.X, AddScore.Location.Y, PersonWidth, AddScoreWidth)) Then
            RandomAddScoreX = 425
            RandomAddScoreY = 25
            AddScore.Location = New Point(RandomAddScoreX, RandomAddScoreY)
            Scores += ScoreAdd
            If (ScoreAdd < 95) Then
                ScoreAdd += 5
                lblAdd.Text = "+" & ScoreAdd
                lblAdd2.Text = "+" & ScoreAdd
            End If
        End If

        If (Game.Test(Person.Location.X, Person.Location.Y, Slow.Location.X, Slow.Location.Y, PersonWidth, SlowWidth)) Then
            RandomSlowX = 425
            RandomSlowY = 25
            Slow.Location = New Point(RandomSlowX, RandomSlowY)
            PersonSpeed = 1
            Person.BackColor = Color.Blue
            PastScores = Scores
        End If

        If (Game.Test(Person.Location.X, Person.Location.Y, Fire.Location.X, Fire.Location.Y, PersonWidth, FireWidth)) Then
            RandomFireX = 425
            RandomFireY = 25
            Fire.Location = New Point(RandomFireX, RandomFireY)
            PersonSpeed = 9
            Person.BackColor = Color.Red
            PastScores = Scores
        End If

        If (Game.Test(Person.Location.X, Person.Location.Y, Heart.Location.X, Heart.Location.Y, PersonWidth, HeartWidth)) Then
            RandomHeartX = 425
            RandomHeartY = 25
            Heart.Location = New Point(RandomHeartX, RandomHeartY)
            Lives = Lives + 1
            lblLives.Text = Lives
            lblPlusOne.Location = New Point(Person.Location.X, Person.Location.Y)
            lblPlusOne.Visible = True
            HeartDuration = Scores
        End If

        lblPlusOne.Location = New Point(lblPlusOne.Location.X + 1, lblPlusOne.Location.Y)

        If (HeartDuration <> 0 And Scores > HeartDuration + 5) Then
            lblPlusOne.Visible = False
            HeartDuration = 0
        End If

        If (PersonSpeed = 1 And Scores >= PastScores + 20) Then
            PersonSpeed = 5
            Person.BackColor = Color.White
        End If

        If (PersonSpeed = 9 And Scores >= PastScores + 20) Then
            PersonSpeed = 5
            Person.BackColor = Color.White
        End If
    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrRandomTeki.Tick
        Randomize()
        Teki = Rnd() * 4
        If (Teki = 0) Then
            Randomize()
            If (Teki1.Location.X < 0 Or Teki1.Location.X > 380 Or Teki1.Location.Y < 0 Or Teki1.Location.Y > 380) Then
                Teki1.Location = New Point(Fix(Rnd() * 381), 0)
            End If
        ElseIf (Teki = 1) Then
            Randomize()
            If (Teki2.Location.X < 0 Or Teki2.Location.X > 380 Or Teki2.Location.Y < 0 Or Teki2.Location.Y > 380) Then
                Teki2.Location = New Point(0, Fix(Rnd() * 381))
            End If
        ElseIf (Teki = 2) Then
            Randomize()
            If (Teki3.Location.X < 0 Or Teki3.Location.X > 380 Or Teki3.Location.Y < 0 Or Teki3.Location.Y > 380) Then
                Teki3.Location = New Point(Fix(Rnd() * 381), 380)
            End If
        ElseIf (Teki = 3) Then
            Randomize()
            If (Teki4.Location.X < 0 Or Teki4.Location.X > 380 Or Teki4.Location.Y < 0 Or Teki4.Location.Y > 380) Then
                Teki4.Location = New Point(380, Fix(Rnd() * 381))
            End If
        End If
    End Sub

    Private Sub btnPlay_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnPlay.Click
        If (btnPlay.Text = "Restart") Then
            BeginGameDetails()
            Title.Visible = False
        End If
        Person.Location = New Point(180, 180)
        Teki1.Location = New Point(0, 0)
        Teki2.Location = New Point(380, 0)
        Teki3.Location = New Point(0, 380)
        Teki4.Location = New Point(380, 380)
        btnPlay.Enabled = False
        MenuBar.Enabled = False
        Threading.Thread.Sleep(2000)
        TmrsClose(False)
        lblLives.Text = Lives
        btnPlay.Text = "Play"
    End Sub

    Private Sub tmrScore_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrScore.Tick
        Scores += 1
        If (Scores > 2500) Then
            Label1.Visible = True
        End If
        lblScores.Text = Scores
        AddScore.Location = New Point(RandomAddScoreX, RandomAddScoreY)
        Slow.Location = New Point(RandomSlowX, RandomSlowY)
        Fire.Location = New Point(RandomFireX, RandomFireY)
        Heart.Location = New Point(RandomHeartX, RandomHeartY)
    End Sub

    Private Sub tmrCount_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles tmrCount.Tick
        AddScore.Visible = True
        Randomize()
        RandomAddScoreX = Fix(Rnd() * 381)
        RandomAddScoreY = Fix(Rnd() * 381)

        If (Scores > 100) Then
            Fire.Visible = True
            RandomFireX = Fix(Rnd() * 381)
            RandomFireY = Fix(Rnd() * 381)
        End If

        If (Scores > 400) Then
            Slow.Visible = True
            RandomSlowX = Fix(Rnd() * 381)
            RandomSlowY = Fix(Rnd() * 381)
        End If

        If (Scores > 600) Then
            If (Fix(Rnd() * 3) = 0) Then
                Heart.Visible = True
                RandomHeartX = Fix(Rnd() * 381)
                RandomHeartY = Fix(Rnd() * 381)
            End If
        End If

        If (p = 0) Then
            Tekispeed += 1
            Slant = Fix(Rnd() * 2)
        ElseIf (p = 3) Then
            Slant = Fix(Rnd() * 2)
            Tekispeed += 1
        ElseIf (p = 5) Then
            Slant = Fix(Rnd() * 2)
            Tekispeed += 1
            tmrRandomTeki.Interval -= 50
        ElseIf (p = 7) Then
            Slant = Fix(Rnd() * 3)
            tmrRandomTeki.Interval -= 10
        ElseIf (Fix(p / 4) * 4 = p And p > 7) Then
            Slant = Fix(Rnd() * 4)
            Tekispeed += 1
            tmrRandomTeki.Interval -= 10
        End If
        p += 1
    End Sub
    Private Sub lblExtraLarge_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lblExtraLarge.Click
        ExtraLargeClick()
    End Sub
    Private Sub lblLarge_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lblLarge.Click
        LargeClick()
    End Sub
    Private Sub lblMedium_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lblMedium.Click
        MediumClick()
    End Sub
    Private Sub lblTiny_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lblTiny.Click
        TinyClick()
    End Sub

    Private Sub ExtraLarge_Click_1(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ExtraLarge.Click
        ExtraLargeClick()
    End Sub
    Private Sub Large_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Large.Click
        LargeClick()
    End Sub
    Private Sub Medium_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Medium.Click
        MediumClick()
    End Sub
    Private Sub Tiny_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Tiny.Click
        TinyClick()
    End Sub
End Class
