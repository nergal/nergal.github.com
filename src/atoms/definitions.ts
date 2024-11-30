import { atom } from "jotai";

export const definitionsAtom = atom<Record<string, string>>({
	CodeIgniter:
		"An open-source software rapid development web framework, for use in building dynamic web sites with PHP",
	Yii2: "An open source, object-oriented, component-based MVC PHP web application framework",
	Yii: "An open source, object-oriented, component-based MVC PHP web application framework",
	Kohana: "A PHP5 HMVC framework",
	Zend: "An open source, object-oriented web application framework implemented in PHP 5",

	Dropwizard:
		"A Java framework for developing ops-friendly, high-performance, RESTful web services",
	"Android SDK": "The Android software development kit",
	Spring:
		"An application framework and inversion of control container for the Java platform",

	jQuery:
		"A cross-platform JavaScript library designed to simplify the client-side scripting of HTML",
	LMD: "Lazy Module Declaration specifies a mechanism for defining modules such that the module and its dependencies can be lazy loaded",
	Angular:
		"A TypeScript-based open-source front-end web application platform to address all of the parts of the developer's workflow while building complex web applications",
	AngularJS:
		"A complete JavaScript-based open-source front-end web application framework used to address many of the challenges encountered in developing single-page applications",
	Grunt:
		"A JavaScript Task Runner, a tool used to automatically perform frequently used tasks such as minification, compilation, unit testing, linting, etc",
	Backbone:
		"A JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm",
	RxJS: "A library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code",
	"@ngrx/store":
		"RxJS powered state management for Angular applications, inspired by Redux",
	React: "A JavaScript library for building user interfaces",
	"Redux-saga":
		"A library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures",
	Redux:
		"A predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",

	Django:
		"A free and open-source web framework, written in Python, which follows the model-view-template (MVT) architectural pattern",
	Flask: "A micro web framework written in Python",
	Hasura:
		"BaaS tool that provides developers with GraphQL APIs for Postgres applications",

	Jenkins: "An open source automation server written in Java",
	Docker:
		"An open source project that automates the deployment of Linux applications inside software containers",
	nginx: "Software to provide a web server",
	"AWS Lambda":
		"Serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you",
	Gitlab:
		"A web-based Git repository manager with wiki and issue tracking features",
	Artifactory: "An universal Artifact Repository Manager",
	Terraform:
		"Allows users to define a datacenter infrastructure in a high-level configuration language, from which it can create an execution plan to build the infrastructure in a service provider such as AWS",
	pm2: "Production process manager for Node.js applications with a built-in load balancer",
	forever: "Simple CLI tool for ensuring that a given script runs continuously",
	RPM: "Package management system widely used in Linux distributions",

	Redmine:
		"A free and open source, web-based project management and issue tracking tool",
	Phing: "A PHP project build system or build tool based on ​Apache Ant",
	Gitosis:
		"A tool which provides access control and remote management for hosted Git repositories",

	PostgreSQL: "An object-relational database (ORDBMS)",
	SQLite:
		"A relational database management system (RDBMS) contained in a C programming library",
	MSSQL:
		"A relational database management system (RDBMS) developed by Microsoft",
	MySQL: "An open-source relational database management system (RDBMS)",

	".NET":
		"A software framework developed by Microsoft that runs primarily on Microsoft Windows",
	JavaScript:
		"A high-level, dynamic, untyped, and interpreted programming language",
	NodeJS:
		"An open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications",
	Python:
		"A widely used high-level, general-purpose, interpreted, dynamic programming language",
	PHP: "A server-side scripting language designed primarily for web development but also used as a general-purpose programming language",
	Java: "A general-purpose computer programming language that is concurrent, class-based, object-oriented and specifically designed to have as few implementation dependencies as possible",
	Gradle:
		"Build automation system that builds upon the concepts of Apache Ant and Apache Maven and introduces a Groovy-based domain-specific language",

	"Flux architecture":
		"An architecture for creating data layers in JavaScript applications based on CQRS",
});
