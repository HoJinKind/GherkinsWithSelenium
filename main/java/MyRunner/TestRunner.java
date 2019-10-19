package MyRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "/home/mikeho/Desktop/Grab internship application/grab appllication qns/CucumberSeleniumFramework/src/main/java/Features/login.feature", //the path of the feature files
			glue={"stepDefinitions"}, //the path of the step definition files
			monochrome = true, //display the console output in a proper readable format
			plugin = {"pretty","html:test-outout"},
			strict = true, //it will check if any step is not defined in step definition file
			dryRun = false //to check the mapping is proper between feature file and step def file
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)
	 
	public class TestRunner {
	 
	}
	
	//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
	//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest
	

