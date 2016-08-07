var quotes = [“If you love a flower, dont pick it up.
Because if you pick it up it dies and it ceases to be what you love.
So if you love a flower, let it be.
Love is not about possession.
Love is about appreciation.― Osho”,
“Be — dont try to become― Osho”,
“Be realistic: Plan for a miracle.― Osho”,
“Life begins where fear ends.― Osho”,
“Drop the idea of becoming someone, because you are already a masterpiece.
You cannot be improved. You have only to come to it, to know it, to realize it.― Osho”
];

var Quotation = new Array();
Quotation[0] = "Time is of the essence! Comb your hair.";
Quotation[1] = "Sanity is a golden apple with no shoelaces.";
Quotation[2] = "Repent! The end is coming, $9.95 at Amazon.";
Quotation[3] = "Honesty blurts where deception sneezes.";
Quotation[4] = "Pastry satisfies where art is unavailable.";
Quotation[5] = "Delete not, lest you, too, be deleted.";
Quotation[6] = "O! Youth! What a pain in the backside.";
Quotation[7] = "Wishes are like goldfish with propellors.";
Quotation[8] = "Love the river's \"beauty\", but live on a hill.";
Quotation[9] = "Invention is the mother of too many useless toys.";

var Q = Quotation.length;
var whichQuotation = Math.round(Math.random()*(Q-1));
function showQuotation(){
  document.write(Quotation[whichQuotation])
};
