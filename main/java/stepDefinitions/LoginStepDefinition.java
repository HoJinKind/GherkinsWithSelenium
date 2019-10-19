package stepDefinitions;

import Utils.Constants;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class LoginStepDefinition{

	 WebDriver driver;


	
	 @Given("^user is loggedin with username ([^\"]*) and password ([^\"]*)")
	 public void user_already_on_login_page(String username, String password){
	 System.setProperty("webdriver.chrome.driver","/usr/bin/chromedriver");
	 driver = new ChromeDriver();

	 WebDriverWait wait = new WebDriverWait(driver, 5);
	 driver.get("https://business.grab.com/login");
	 String title = driver.getTitle();
	 System.out.println(title);
	 Assert.assertEquals("Grab for Business", title);

	 driver.findElement(By.id("email")).sendKeys(username);
	 driver.findElement(By.id("password")).sendKeys(password);
	 driver.findElement(By.className(Constants.LOGIN_BUTTON_CLASSNAME)).click();

	 wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("Homepage__title___1OaxP")));

	 String url = driver.getCurrentUrl();
	 Assert.assertEquals("https://business.grab.com/", url);
	 }
	
	 @Then("^user navigates to employee page$")
	 public void user_navigates_to_employee_page() throws InterruptedException {
		 Thread.sleep(2000);

		 driver.findElement(By.xpath("//span[text()='Employees']")).click();

		 System.out.println(driver.getCurrentUrl());
		 String url = driver.getCurrentUrl();
		 Assert.assertEquals("https://business.grab.com/employees", url);
	 }
	 
//	 @Then("^user moves to new contact page$")
//	 public void user_moves_to_new_contact_page() {
//		driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.className("anticon anticon-contacts"))).build().perform();
//		driver.findElement(By.className("ant-btn LoginForm__loginButton___3oKO3")).click();
//
//		}

	 @Then("^Close the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }
	
	
	

}
