Public Interface Test

    Function IsNotOnBlock(ByVal PersonX As Integer, ByVal PersonY As Integer, ByVal Block1X As Integer, ByVal Block1Y As Integer, ByVal Block2X As Integer, ByVal Block2Y As Integer, ByVal Block1Width As Integer, ByVal Block2Width As Integer)
    Function IsCollide(ByVal PersonX As Integer, ByVal PersonY As Integer, ByVal TekiX As Integer, ByVal TekiY As Integer, ByVal PersonWidth As Integer, ByVal TekiWidth As Integer)
End Interface
