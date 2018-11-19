package tehtavat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Teht1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<Integer> values = Arrays.asList(1, 2, 3);
		List<Double> sum = (List<Double>) values.stream().map(fahrenheit -> (5.0 / 9.0) * (fahrenheit - 32.0))
				.collect(Collectors.toList());

		
		List<Double> lis = (List<Double>) values.stream().map(rad -> Math.PI * Math.pow(rad, 2)).collect(Collectors.toList());
		
		
		System.out.println(sum);
		System.out.println(lis);
	}

}
