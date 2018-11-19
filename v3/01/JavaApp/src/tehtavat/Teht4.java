package tehtavat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Teht4 {

	public static void main(String[] args) {
		List<Integer> list1 = new ArrayList<Integer>();
		list1.add(1);
		list1.add(2);
		list1.add(3);
		List<Integer> list2 = new ArrayList<Integer>();
		list2.add(3);
		list2.add(4);
		list2.add(5);
		
		
		
		//List<List<String>> sum = (List<List<String>>) list1.stream().map(n -> list2.stream().map(n2 -> "("+n +","+ n2+")").collect(Collectors.toList())).collect(Collectors.toList());
		//List<List<String>> sum = new ArrayList<String>()
		//list1.forEach(n -> list2.forEach(n2 -> sum.add("("+n+","+n2+")")));
		 List<String> sum = list1.stream().map(n -> list2.stream().map(n2 ->"("+n+","+n2+")").reduce("",(a,b) -> a+b)).collect(Collectors.toList());
		System.out.println(sum);
		
	}
}
