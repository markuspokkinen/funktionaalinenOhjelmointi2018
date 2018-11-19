package tehtavat;

import java.util.stream.Stream;
import java.util.List;
import java.util.stream.Collectors;

public class Teht3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Long val = Stream.iterate(1+(int) (Math.random() * ((6 - 1) + 1)), n -> 1+(int) (Math.random() * ((6 - 1) + 1))).limit(20)
				.filter(n -> n == 6)
				.collect(Collectors.counting());

		System.out.println(val);
	}

}
