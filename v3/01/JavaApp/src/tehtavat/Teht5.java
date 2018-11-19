package tehtavat;
import java.io.IOException;
import  java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Teht5 {
	public static void main(String[] args) throws IOException {
		Stream<String> lines = Files.lines(Paths.get("C:\\Users\\marku\\Source\\repos\\funktionaalinenOhjelmointi2018\\v3\\01\\JavaApp\\kalevala.txt"));
		Long numlines = lines.collect(Collectors.counting());
		System.out.println("rivien lukumäärä: "+numlines);
		
		lines = Files.lines(Paths.get("C:\\Users\\marku\\Source\\repos\\funktionaalinenOhjelmointi2018\\v3\\01\\JavaApp\\kalevala.txt"));
		int numletters = lines.map(li -> li.length()).reduce(0,(a,b) -> a+b);
		System.out.println("kirjaimien lukumäärä: "+numletters);
		
		
		lines = Files.lines(Paths.get("C:\\Users\\marku\\Source\\repos\\funktionaalinenOhjelmointi2018\\v3\\01\\JavaApp\\kalevala.txt"));
		Long numwords = lines.map(li -> li.split(" ")).collect(Collectors.counting());
		System.out.println("sanojen lukumäärä: "+numletters);
		
	}
	
}
