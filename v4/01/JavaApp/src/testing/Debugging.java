package testing;

import static org.junit.Assert.assertEquals;

import java.util.*;
import java.util.stream.Collectors;

import org.junit.Test;

public class Debugging {
	public static void main(String[] args) {
		List<Point> points = Arrays.asList(new Point(12, 2), new Point(2, 12));
		// points.stream().map(p -> p.getX()).forEach(System.out::println);
		List<Point> pointsmoved = Point.moveAllPointsRightBy(points, 10);
		System.out.println(points.toString());
		System.out.println(pointsmoved.toString());

	}

	

	private static class Point {
		private int x;
		private int y;

		private Point(int x, int y) {
			this.x = x;
			this.y = y;
		}
		public static List<Point> moveAllPointsRightBy(List<Point> points, int x) {
			return points.stream().map(p -> p.moveRightBy(x)).collect(Collectors.toList());
		}

		public int getX() {
			return x;
		}

		public void setX(int x) {
			this.x = x;
		}

		public Point moveRightBy(int x) {
			return new Point(this.x + x, this.y);
		}

		@Override
		public String toString() {
			return "Point [x=" + x + ", y=" + y + "]";
		}

	}

	@Test
	public void testmoveAllPointsRightBy() throws Exception {
		List<Point> points = Arrays.asList(new Point(5, 5), new Point(10, 5));
		List<Point> expectedPoints = Arrays.asList(new Point(15, 5), new Point(20, 5));
		List<Point> newPoints = Point.moveAllPointsRightBy(points, 10);
		assertEquals(expectedPoints, newPoints);
	}
}
