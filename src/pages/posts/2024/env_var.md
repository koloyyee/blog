---
layout: ../../../layouts/Markdown-Post-Layout.astro
title: "The world of Environment Variables."
description: "Wait.. where is .env?"
publishedAt : 2024-02-25
tags: ["java", "spring boot"]
---
# Environment Variables

## JavaScript !== Java.

Currently, I am learning Spring Boot by building, and I need to use some external API Keys, as a "Soy Dev" who spent most of the time with JavaScript, the only thing I know about environment variables is set through ".env" file, and in the world of Spring Boot we are talking about application.properties or application.yml, and that confused the hell out of me.

## So Where and How to Get and Set Environment Variables?

### Spring Boot

## Development

In the Spring Application, there are various ways to set up the environment variables.

#### Setting
1. Under the resources directory we will find the `application.properties` or `application.yml` file, we can set it up as follows:

```
# application.properties
secret.api-key=secret

# application.yml
secret:
	api-key: secret
```
#### Getting 
2. We can create a file called `EnvConfigProperties.java`
   **Note: api-key will convert to apiKey**

```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "secret")
public record EnvConfigurationProperties(String apiKey ) {
}

// To be injected into another file.
public class Controller {

	final private EnvConfigurationProperties properties;
	private String secretApiKey;

	public Controller(EnvConfigurationProperties properties) {
		this.properties = properties;
		this.secretApiKey = this.properties.apiKey();
	}
}

// In your main Spring Boot Application file it will look like this.
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(EnvConfigurationProperties.class) // <- Very important!!!
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}

```

3. Spring Boot magical Annotations - @Value()

```java
public class Controller {

	@Value("${secret.api-key}")
	private String secretApiKey;

	//... rest of the code
}
```

There is one of way to set it in the Java native way is to use `System.getenv("ANY_Env_Var_Name")`, however, it will require us to set it up in 2 ways, 1. IDE environment variable settings, 2. setup in Bash which will be extremely useful for production Linux server environment.

### IDE
#### Setting 
First, we talk about the IDE environment, I will only be talking about IDEA IntelliJ, you can set it up in the "Run Configuration > Environment variables", you can input `ANY_ENV_VAR_NAME=VAR_VALUE` and apply, then you are good to go. So what it does is similar to the next way of declaring in the command line.

### Bash

We can declare an Environment Variable with `export ANY_ENV_VAR_NAME=VAR_VALUE` we can use it because it is in the environment now, but here is a catch, when your terminal is closed everything is gone, so what to do? we can set it up in the "~/.bashrc" file, remember how to set up your CLI tools with export PATH=xxxxx, same thing.

`vi ~/.bashrc` go to the bottom or anywhere and input `export ANY_ENV_VAR_NAME=VAR_VALUE` hit `:wq` then once you left the `vim editor` enter `source ~/.bashrc` and there we go the `ANY_ENV_VAR_NAME` can be accessed anytime.

#### Getting

4. Takes to the last way to setup, `System.getenv("ANY_ENV_VAR_NAME")`, once you have set in the IDE Run Configuration,  `export ANY_ENV_VAR_NAME=VAR_VALUE` inside or outside of the `~/.bashrc` you will be able to access the environment variables, if not your Application will either no compile or return null.

## Production

### Spring boot
#### Setting
1. If your deployment site is about to be set up directly you can do it there
2. The same as mentioned, we can set up in the `~/.bashrc`, from here we can do this with our `application.properties` or `application.yml` file

#### Getting
```yml
# application.properties
secret.api-key=${ANY_ENV_VAR_NAME}

# application.yml
secret:
	api-key: ${ANY_ENV_VAR_NAME}
```

```java
@Value(${ANY_ENV_VAR_NAME})
@Value(${secret.api-key})
// or 
System.getenv("ANY_ENV_VAR_NAME")
```

#### "Optional" way

3. As mentioned in the video optional in the `application.properties` file, first we'll need to set up a `secret.properties` which WILL NOT be pushed to Github but to set up directly in the production environment.


I personally am not familiar with it so for more details please watch Dan Vega's video, scroll down and you will see it.

```java
# .properties
secret.api-key=optional:secret-key

```
Including the ConfigurationProperties they should all work.

### Video Tutorial by Dan Vega

Lastly I would like to share Dan's video on how to set up secret environment variable, here is his video if you prefer video reference
[![Dan Vega&#39;s Tutorial](http://img.youtube.com/vi/PmGLn3ua_lU/0.jpg)](https://www.youtube.com/watch?v=PmGLn3ua_lU)


If you find it useful send me a message on [X(Twitter) @KoLoyYee](https://twitter.com/KoLoyYee).


Thank you and good luck with your development!
