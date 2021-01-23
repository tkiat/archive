Public Class Form1
    Dim DirectionLeft, DirectionRight, DirectionUp, DirectionDown, PersonSpeed As Integer

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        PersonSpeed = 5
    End Sub

    Private Sub form_KeyDown(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyDown

        If e.KeyCode = Keys.Left Then
            DirectionLeft = 1
        ElseIf e.KeyCode = Keys.Right Then
            DirectionRight = 1
        ElseIf e.KeyCode = Keys.Up Then
            DirectionUp = 1
        End If

    End Sub
    Private Sub Form1_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles Me.KeyUp
        If e.KeyCode = Keys.Left Then
            DirectionLeft = 0
        End If
        If e.KeyCode = Keys.Right Then
            DirectionRight = 0
        End If
    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick
        If (DirectionLeft = 1) Then
            Person.Location = New Point(Person.Location.X - PersonSpeed, Person.Location.Y)
        End If
        If (DirectionRight = 1) Then
            Person.Location = New Point(Person.Location.X + PersonSpeed, Person.Location.Y)
        End If

        If (DirectionDown = 1) Then
            Person.Location = New Point(Person.Location.X, Person.Location.Y + PersonSpeed)
            If (Person.Location.Y >= 316) Then
                DirectionDown = 0
            End If
        End If
        If (DirectionUp = 1) Then
            Person.Location = New Point(Person.Location.X, Person.Location.Y - PersonSpeed)
        End If

        If (Person.Location.Y < 250) Then
            DirectionUp = 0
            DirectionDown = 1
        End If
    End Sub
End Class

