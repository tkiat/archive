Imports Microsoft.VisualBasic


Public Class RedundancyDetails
    Implements Redundancy
    Public Function Test(ByVal PersonX As Integer, ByVal PersonY As Integer, ByVal TekiX As Integer, ByVal TekiY As Integer, ByVal PersonWidth As Integer, ByVal TekiWidth As Integer) Implements Redundancy.Test
        Dim Fact As Boolean
        'Fact = (((PersonX >= TekiX And PersonX <= TekiX + TekiWidth) And ((PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth))) Or (PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth)) And ((PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth))
        'Fact = ((PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth And PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth) Or (PersonX >= TekiX And PersonX <= TekiX + TekiWidth And PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth) Or (PersonX >= TekiX And PersonX <= TekiX + TekiWidth And PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth And PersonY >= TekiY And PersonY <= TekiY + TekiWidth))
        Fact = ((PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth And PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth) Or (PersonX >= TekiX And PersonX <= TekiX + TekiWidth And PersonY + PersonWidth >= TekiY And PersonY + PersonWidth <= TekiY + TekiWidth) Or (PersonX >= TekiX And PersonX <= TekiX + TekiWidth And PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (PersonX + PersonWidth >= TekiX And PersonX + PersonWidth <= TekiX + TekiWidth And PersonY >= TekiY And PersonY <= TekiY + TekiWidth) Or (TekiX + TekiWidth >= PersonX And TekiX + TekiWidth <= PersonX + PersonWidth And TekiY + TekiWidth >= PersonY And TekiY + TekiWidth <= PersonY + PersonWidth) Or (TekiX >= PersonX And TekiX <= PersonX + PersonWidth And TekiY + TekiWidth >= PersonY And TekiY + TekiWidth <= PersonY + PersonWidth) Or (TekiX >= PersonX And TekiX <= PersonX + PersonWidth And TekiY >= PersonY And TekiY <= PersonY + PersonWidth) Or (TekiX + TekiWidth >= PersonX And TekiX + TekiWidth <= PersonX + PersonWidth And TekiY >= PersonY And TekiY <= PersonY + PersonWidth))
        Return Fact
    End Function
End Class
