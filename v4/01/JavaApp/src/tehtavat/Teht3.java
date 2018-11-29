package tehtavat;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import parallel.ParallelStreams;

public class Teht3 {
	List<Integer> taulukkoLista = new ArrayList<>();
	List<Integer> linkitettyLista = new LinkedList<>();
	
	public static void main(String[] args) {
		IntStream.rangeClosed(0,Integer.MAX_VALUE);
		taulukkoLista = Stream.iterate(0,n -> (int)((Math.random()*10)-1)).collect(Collectors.toList());
	}

	 public int hidasNelioSumma() {
	        return linkitettyLista.parallelStream()
	                                  .map(x -> x * x)
	                                  .reduce(0, (acc, x) -> acc + x);
	}

}