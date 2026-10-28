
import org.coinor.opents.*;

public class Main 
{

    public static void main (String args[]) 
    {
        // Initialize our objects
        java.util.Random r = new java.util.Random( 12345 );
        double[][] customers = new double[20][2];
        for( int i = 0; i < 20; i++ )
            for( int j = 0; j < 2; j++ )
                customers[i][j] = r.nextDouble()*200;
        
        ObjectiveFunction objFunc = new MyObjectiveFunction( customers );
        Solution initialSolution  = new MySolution( customers );
        MoveManager   moveManager = new MyMoveManager();
        TabuList         tabuList = new SimpleTabuList( 7 ); // In OpenTS package
        
        // Create Tabu Search object
        TabuSearch tabuSearch = new SingleThreadedTabuSearch(
                initialSolution,
                moveManager,
                objFunc,
                tabuList,
                new BestEverAspirationCriteria(), // In OpenTS package
                false ); // maximizing = yes/no; false means minimizing
        
        // Start solving
        tabuSearch.setIterationsToGo( 100 );
        tabuSearch.startSolving();
        
        // Show solution
        MySolution best = (MySolution)tabuSearch.getBestSolution();
        System.out.println( "Best Solution:\n" + best );

        int[] tour = best.tour;
        for( int i = 0; i < tour.length; i++ )
            System.out.println( 
             customers[tour[i]][0] + "\t" + customers[tour[i]][1] );
    }   // end main

}   // end class Main
