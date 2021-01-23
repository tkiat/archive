
Public Class ClassTest
    Implements Test

    Public Function IsNotOnBlock(ByVal PersonX As Integer, ByVal PersonY As Integer, ByVal Block1X As Integer, ByVal Block1Y As Integer, ByVal Block2X As Integer, ByVal Block2Y As Integer, ByVal Block1Width As Integer, ByVal Block2Width As Integer) As Object Implements Test.IsNotOnBlock
        Dim Fact As Boolean
        Fact = Not ((PersonY >= Block1Y - 34 And PersonY <= Block1Y - 31 And PersonX >= Block1X - 24 And PersonX <= Block1X + Block1Width - 5) Or (PersonY >= Block2Y - 34 And PersonY <= Block2Y - 31 And PersonX >= Block2X - 24 And PersonX <= Block2X + Block2Width - 5))
        Return Fact
    End Function

    Public Function iscollide(ByVal PersonX As Integer, ByVal PersonY As Integer, ByVal TekiX As Integer, ByVal TekiY As Integer, ByVal PersonWidth As Integer, ByVal TekiWidth As Integer) As Object Implements Test.IsCollide
        Dim Fact As Boolean
        Fact = ((PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth And PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth) Or (PersonX >= TekiX And PersonX <= TekiX + TekiWidth And PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth) Or (PersonX >= TekiX And PersonX <= TekiX + TekiWidth And PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth And PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (TekiX + TekiWidth >= PersonX And TekiX + TekiWidth <= PersonX + PersonWidth And TekiY + TekiWidth >= PersonY And TekiY + TekiWidth <= PersonY + PersonWidth) Or (TekiX >= PersonX And TekiX <= PersonX + PersonWidth And TekiY + TekiWidth >= PersonY And TekiY + TekiWidth <= PersonY + PersonWidth) Or (TekiX >= PersonX And TekiX <= PersonX + PersonWidth And TekiY >= PersonY And TekiY <= PersonY + PersonWidth) Or (TekiX + TekiWidth >= PersonX And TekiX + TekiWidth <= PersonX + PersonWidth And TekiY >= PersonY And TekiY <= PersonY + PersonWidth))
        Return (Fact)
    End Function
End Class
