/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export class CheckBartCode
{
	StartBartCode(Input)
	{
		//            0   1   2   3 \\
		let Vector = [[], [], [], []];
		let temps1 = 0;
		let Vector1 = [[], []];

		Vector[0].push(...Input);
		for(let i = 0; i < Vector[0].length; i++)
		{
			Vector[1].push(parseInt(Vector[0][i]));
		}
		
		// Working To (2)
		Vector[2].push(Vector[1][0]);
		Vector[2].push(Vector[1][2]);
		Vector[2].push(Vector[1][4]);
		Vector[2].push(Vector[1][6]);
		Vector[2].push(Vector[1][8]);
		Vector[2].push(Vector[1][10]);

		Vector[3].push(Vector[1][1]);
		Vector[3].push(Vector[1][3]);
		Vector[3].push(Vector[1][5]);
		Vector[3].push(Vector[1][7]);
		Vector[3].push(Vector[1][9]);
		Vector[3].push(Vector[1][11]);

		let EndBart = Vector[1][12];

		var template = 0;
		for(let i = 0; i < Vector[2].length; i++)
		{
			template += Vector[2][i];
		}
		template = template * 3 + "";
		Vector1[0].push(...template);



		template = 0;
		for(let i = 0; i < Vector[3].length; i++)
		{
			template += Vector[3][i];
		}
		template = template + "";
		Vector1[1].push(...template);

		let templatesing = [];
		template = parseInt(Vector1[0].length - 1);
		templatesing.push(parseInt(Vector1[0][template]));
		template = parseInt(Vector1[1].length - 1);
		templatesing.push(parseInt(Vector1[1][template]));

		template = 0;
		for(let i = 0; i < templatesing.length; i++)
		{
			template += parseInt(templatesing[i]);
		}
		template = template + "";

		let thinking = [];
		thinking.push(...template);

		template = thinking.length - 1;

		if((EndBart + parseInt(thinking[template])) == 10)
		{
			return true;
		} else {
			return false;
		}
	}
}