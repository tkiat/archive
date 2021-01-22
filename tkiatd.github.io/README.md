# Overall

# Front-End

# Back-End

TODO...

I did 2 implementation 1 first then changed to implementation 2

Implementation 1: Both backend and content on a single AWS EC2 instance
	Details:
		- CentOS
		- TODO
	Pros:
		- It's just a server so it can be easily migrated to another VPS platform

Implementation 2: Serverless AWS Lambda as backend and dynamodb as content storage
	Details:
		- TODO
	Pros:
		- My portfolio site will almost certainly have less traffic so it should fit AWS on-demand pricing model better.

- BUG: I have to manually push CodeCommit test trigger to make the sync work (AWS).
