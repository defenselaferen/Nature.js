/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export class Algorithm
{
	StartSort(array)
	{
		for(let i = 0; i < array.length; i++)
		{
			for(let j = 0; j < array.length; j++)
			{
				if(array[j] > array[j+1])
				{
					let temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}
			}
		}
		return array;
	}
}