package tehtavat;

import java.util.stream.IntStream;

public class StreamFilterMapReduce {
	public static void main(String[] args) {
		// sum of the triples of even integers from 2 to 10
		System.out.printf("Sum of the triples of even integers from 2 to 10 is: %d%n",
				IntStream.rangeClosed(1, 10).filter(x -> x % 2 == 0).map(x -> x * 3).sum());
		//a. 10 kertaa
		//b.6 keraa
		// c 10 kertaa
		
	}
}
