# Herramientas de MCP servers disponibles para usar:

🟢 sequential-thinking - Ready (1 tool)
Tools: - sequentialthinking

🟢 think-tool - Ready (4 tools)
Tools: - clear_thoughts - get_thought_stats - get_thoughts - think

🟢 brave-search - Ready (2 tools)
Tools: - brave_local_search - brave_web_search

🟢 read-website-fast - Ready (1 tool)
Tools: - read_website

🟢 context7 - Ready (2 tools)
Tools: - get-library-docs - resolve-library-id

🟢 shadcn - Ready (7 tools)
Tools: - get_add_command_for_items - get_audit_checklist - get_item_examples_from_registries - get_project_registries - list_items_in_registries - search_items_in_registries - view_items_in_registries

🟢 github - Ready (106 tools, 2 prompts)
Tools: - add_comment_to_pending_review - add_issue_comment - add_project_item - add_sub_issue - assign_copilot_to_issue - cancel_workflow_run - create_and_submit_pull_request_review - create_branch - create_gist - create_issue - create_or_update_file - create_pending_pull_request_review - create_pull_request - create_pull_request_with_copilot - create_repository - delete_file - delete_pending_pull_request_review - delete_project_item - delete_workflow_run_logs - dismiss_notification - download_workflow_run_artifact - fork_repository - get_code_scanning_alert - get_commit - get_copilot_space - get_dependabot_alert - get_discussion - get_discussion_comments - get_file_contents - get_global_security_advisory - get_issue - get_issue_comments - get_job_logs - get_latest_release - get_me - get_notification_details - get_project - get_project_field - get_project_item - get_pull_request - get_pull_request_diff - get_pull_request_files - get_pull_request_review_comments - get_pull_request_reviews - get_pull_request_status - get_release_by_tag - get_secret_scanning_alert - get_tag - get_team_members - get_teams - get_workflow_run - get_workflow_run_logs - get_workflow_run_usage - list_branches - list_code_scanning_alerts - list_commits - list_copilot_spaces - list_dependabot_alerts - list_discussion_categories - list_discussions - list_gists - list_global_security_advisories - list_issue_types - list_issues - list_notifications - list_org_repository_security_advisories - list_project_fields - list_project_items - list_projects - list_pull_requests - list_releases - list_repository_security_advisories - list_secret_scanning_alerts - list_starred_repositories - list_sub_issues - list_tags - list_workflow_jobs - list_workflow_run_artifacts - list_workflow_runs - list_workflows - manage_notification_subscription - manage_repository_notification_subscription - mark_all_notifications_read - merge_pull_request - push_files - remove_sub_issue - reprioritize_sub_issue - request_copilo... [truncated]

    Prompts:
    - AssignCodingAgent
    - IssueToFixWorkflow

🟢 chrome-devtools - Ready (26 tools)
Tools: - click - close_page - drag - emulate_cpu - emulate_network - evaluate_script - fill - fill_form - get_network_request - handle_dialog - hover - list_console_messages - list_network_requests - list_pages - navigate_page - navigate_page_history - new_page - performance_analyze_insight - performance_start_trace - performance_stop_trace - resize_page - select_page - take_screenshot - take_snapshot - upload_file - wait_for

🟢 Framelink Figma MCP - Ready (2 tools)
Tools: - download_figma_images - get_figma_data

🟢 fast-filesystem - Ready (25 tools)
Tools: - fast_batch_file_operations - fast_compress_files - fast_copy_file - fast_create_directory - fast_delete_file - fast_edit_block - fast_edit_blocks - fast_edit_multiple_blocks - fast_extract_archive - fast_extract_lines - fast_find_large_files - fast_get_directory_tree - fast_get_disk_usage - fast_get_file_info - fast_large_write_file - fast_list_allowed_directories - fast_list_directory - fast_move_file - fast_read_file - fast_read_multiple_files - fast_safe_edit - fast_search_code - fast_search_files - fast_sync_directories - fast_write_file

🟢 TestSprite - Ready (6 tools)
Tools: - testsprite_bootstrap_tests - testsprite_generate_backend_test_plan - testsprite_generate_code_and_execute - testsprite_generate_code_summary - testsprite_generate_frontend_test_plan - testsprite_generate_standardized_prd

🟢 stripe - Ready (22 tools)
Tools: - cancel_subscription - create_coupon - create_customer - create_invoice - create_invoice_item - create_payment_link - create_price - create_product - create_refund - finalize_invoice - list_coupons - list_customers - list_disputes - list_invoices - list_payment_intents - list_prices - list_products - list_subscriptions - retrieve_balance - search_stripe_documentation - update_dispute - update_subscription

🟢 globalping-mcp-server - Ready (Herramienta externa)
Tools: - globalping_network_command (ej. ping, traceroute, dig)

🟢 globalping - Ready (11 tools)
Tools:

- authStatus
- compareLocations
- dns
- getMeasurement
- help
- http
- limits
- locations
- mtr
- ping

---

Configured MCP servers:

🟢 sequential-thinking - Ready (1 tool)
Tools:

- sequentialthinking
  A detailed tool for dynamic and reflective problem-solving through thoughts.
  This tool helps analyze problems through a flexible thinking process that can adapt and evolve.
  Each thought can build on, question, or revise previous insights as understanding deepens.

  When to use this tool:
  - Breaking down complex problems into steps
  - Planning and design with room for revision
  - Analysis that might need course correction
  - Problems where the full scope might not be clear initially
  - Problems that require a multi-step solution
  - Tasks that need to maintain context over multiple steps
  - Situations where irrelevant information needs to be filtered out

  Key features:
  - You can adjust total_thoughts up or down as you progress
  - You can question or revise previous thoughts
  - You can add more thoughts even after reaching what seemed like the end
  - You can express uncertainty and explore alternative approaches
  - Not every thought needs to build linearly - you can branch or backtrack
  - Generates a solution hypothesis
  - Verifies the hypothesis based on the Chain of Thought steps
  - Repeats the process until satisfied
  - Provides a correct answer

  Parameters explained:
  - thought: Your current thinking step, which can include:
  * Regular analytical steps
  * Revisions of previous thoughts
  * Questions about previous decisions
  * Realizations about needing more analysis
  * Changes in approach
  * Hypothesis generation
  * Hypothesis verification
  - next_thought_needed: True if you need more thinking, even if at what seemed like the end
  - thought_number: Current number in sequence (can go beyond initial total if needed)
  - total_thoughts: Current estimate of thoughts needed (can be adjusted up/down)
  - is_revision: A boolean indicating if this thought revises previous thinking
  - revises_thought: If is_revision is true, which thought number is being reconsidered
  - branch_from_thought: If branching, which thought number is the branching point
  - branch_id: Identifier for the current branch (if any)
  - needs_more_thoughts: If reaching end but realizing more thoughts needed

  You should:
  1. Start with an initial estimate of needed thoughts, but be ready to adjust
  2. Feel free to question or revise previous thoughts
  3. Don't hesitate to add more thoughts if needed, even at the "end"
  4. Express uncertainty when present
  5. Mark thoughts that revise previous thinking or branch into new paths
  6. Ignore information that is irrelevant to the current step
  7. Generate a solution hypothesis when appropriate
  8. Verify the hypothesis based on the Chain of Thought steps
  9. Repeat the process until satisfied with the solution
  10. Provide a single, ideally correct answer as the final output
  11. Only set next_thought_needed to false when truly done and a satisfactory answer is reached

🟢 think-tool - Ready (4 tools)
Tools:

- clear_thoughts
  Clear all thoughts recorded in the current session. Use this to start fresh if the thinking process needs to be reset.
- get_thought_stats
  Get statistics about the thoughts recorded in the current session to analyze your thinking process.
- get_thoughts
  Retrieve all thoughts recorded in the current session to review your reasoning process.
- think
  Use this tool to think about something. It will not obtain new information or change anything, but just append the thought to the log. Use it when complex reasoning or cache memory is needed, especially
  during long chains of tool calls, policy adherence scenarios, or sequential decision making.

🟢 brave-search - Ready (2 tools)
Tools:

- brave_local_search
  Searches for local businesses and places using Brave's Local Search API. Best for queries related to physical locations, businesses, restaurants, services, etc. Returns detailed information including:
  - Business names and addresses
  - Ratings and review counts
  - Phone numbers and opening hours
    Use this when the query implies 'near me' or mentions specific locations. Automatically falls back to web search if no local results are found.
- brave_web_search
  Performs a web search using the Brave Search API, ideal for general queries, news, articles, and online content. Use this for broad information gathering, recent events, or when you need diverse web sources.
  Supports pagination, content filtering, and freshness controls. Maximum 20 results per request, with offset for pagination.

🟢 read-website-fast - Ready (1 tool)
Tools:

- read_website
  Fast, token-efficient web content extraction - ideal for reading documentation, analyzing content, and gathering information from websites. Converts to clean Markdown while preserving links and structure.

🟢 context7 - Ready (2 tools)
Tools:

- get-library-docs
  Fetches up-to-date documentation for a library. You must call 'resolve-library-id' first to obtain the exact Context7-compatible library ID required to use this tool, UNLESS the user explicitly provides a
  library ID in the format '/org/project' or '/org/project/version' in their query.
- resolve-library-id
  Resolves a package/product name to a Context7-compatible library ID and returns a list of matching libraries.

  You MUST call this function before 'get-library-docs' to obtain a valid Context7-compatible library ID UNLESS the user explicitly provides a library ID in the format '/org/project' or '/org/project/version'
  in their query.

  Selection Process:
  1. Analyze the query to understand what library/package the user is looking for
  2. Return the most relevant match based on:
  - Name similarity to the query (exact matches prioritized)
  - Description relevance to the query's intent
  - Documentation coverage (prioritize libraries with higher Code Snippet counts)
  - Trust score (consider libraries with scores of 7-10 more authoritative)

  Response Format:
  - Return the selected library ID in a clearly marked section
  - Provide a brief explanation for why this library was chosen
  - If multiple good matches exist, acknowledge this but proceed with the most relevant one
  - If no good matches exist, clearly state this and suggest query refinements

  For ambiguous queries, request clarification before proceeding with a best-guess match.

🟢 shadcn - Ready (7 tools)
Tools:

- get_add_command_for_items
  Get the shadcn CLI add command for specific items in a registry. This is useful for adding one or more components to your project.
- get_audit_checklist
  After creating new components or generating new code files, use this tool for a quick checklist to verify that everything is working as expected. Make sure to run the tool after all required steps have been
  completed.
- get_item_examples_from_registries
  Find usage examples and demos with their complete code. Search for patterns like 'accordion-demo', 'button example', 'card-demo', etc. Returns full implementation code with dependencies.
- get_project_registries
  Get configured registry names from components.json - Returns error if no components.json exists (use init_project to create one)
- list_items_in_registries
  List items from registries (requires components.json - use init_project if missing)
- search_items_in_registries
  Search for components in registries using fuzzy matching (requires components.json). After finding an item, use get_item_examples_from_registries to see usage examples.
- view_items_in_registries
  View detailed information about specific registry items including the name, description, type and files content. For usage examples, use get_item_examples_from_registries instead.

🟢 github - Ready (49 tools, 2 prompts)
Tools:

- add_comment_to_pending_review
  Add review comment to the requester's latest pending pull request review. A pending review needs to already exist to call this (check with the user if not sure).
- add_issue_comment
  Add a comment to a specific issue in a GitHub repository.
- add_sub_issue
  Add a sub-issue to a parent issue in a GitHub repository.
- assign_copilot_to_issue
  Assign Copilot to a specific issue in a GitHub repository.

  This tool can help with the following outcomes:
  - a Pull Request created with source code changes to resolve the issue

  More information can be found at:
  - https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/about-assigning-tasks-to-copilot

- create_and_submit_pull_request_review
  Create and submit a review for a pull request without review comments.
- create_branch
  Create a new branch in a GitHub repository
- create_issue
  Create a new issue in a GitHub repository.
- create_or_update_file
  Create or update a single file in a GitHub repository. If updating, you must provide the SHA of the file you want to update. Use this tool to create or update a file in a GitHub repository remotely; do not
  use it for local file operations.
- create_pending_pull_request_review
  Create a pending review for a pull request. Call this first before attempting to add comments to a pending review, and ultimately submitting it. A pending pull request review means a pull request review, it
  is pending because you create it first and submit it later, and the PR author will not see it until it is submitted.
- create_pull_request
  Create a new pull request in a GitHub repository.
- create_repository
  Create a new GitHub repository in your account or specified organization
- delete_file
  Delete a file from a GitHub repository
- delete_pending_pull_request_review
  Delete the requester's latest pending pull request review. Use this after the user decides not to submit a pending review, if you don't know if they already created one then check first.
- fork_repository
  Fork a GitHub repository to your account or specified organization
- get_commit
  Get details for a commit from a GitHub repository
- get_file_contents
  Get the contents of a file or directory from a GitHub repository
- get_issue
  Get details of a specific issue in a GitHub repository.
- get_issue_comments
  Get comments for a specific issue in a GitHub repository.
- get_label
  Get a specific label from a repository.
- get_latest_release
  Get the latest release in a GitHub repository
- get_me
  Get details of the authenticated GitHub user. Use this when a request is about the user's own profile for GitHub. Or when information is missing to build other tool calls.
- get_release_by_tag
  Get a specific release by its tag name in a GitHub repository
- get_tag
  Get details about a specific git tag in a GitHub repository
- get_team_members
  Get member usernames of a specific team in an organization. Limited to organizations accessible with current credentials
- get_teams
  Get details of the teams the user is a member of. Limited to organizations accessible with current credentials
- list_branches
  List branches in a GitHub repository
- list_commits
  Get list of commits of a branch in a GitHub repository. Returns at least 30 results per page by default, but can return more if specified using the perPage parameter (up to 100).
- list_issue_types
  List supported issue types for repository owner (organization).
- list_issues
  List issues in a GitHub repository. For pagination, use the 'endCursor' from the previous response's 'pageInfo' in the 'after' parameter.
- list_label
  List labels from a repository or an issue
- list_pull_requests
  List pull requests in a GitHub repository. If the user specifies an author, then DO NOT use this tool and use the search_pull_requests tool instead.
- list_releases
  List releases in a GitHub repository
- list_sub_issues
  List sub-issues for a specific issue in a GitHub repository.
- list_tags
  List git tags in a GitHub repository
- merge_pull_request
  Merge a pull request in a GitHub repository.
- pull_request_read
  Get information on a specific pull request in GitHub repository.
- push_files
  Push multiple files to a GitHub repository in a single commit
- remove_sub_issue
  Remove a sub-issue from a parent issue in a GitHub repository.
- reprioritize_sub_issue
  Reprioritize a sub-issue to a different position in the parent issue's sub-issue list.
- request_copilot_review
  Request a GitHub Copilot code review for a pull request. Use this for automated feedback on pull requests, usually before requesting a human reviewer.
- search_code
  Fast and precise code search across ALL GitHub repositories using GitHub's native search engine. Best for finding exact symbols, functions, classes, or specific code patterns.
- search_issues
  Search for issues in GitHub repositories using issues search syntax already scoped to is:issue
- search_pull_requests
  Search for pull requests in GitHub repositories using issues search syntax already scoped to is:pr
- search_repositories
  Find GitHub repositories by name, description, readme, topics, or other metadata. Perfect for discovering projects, finding examples, or locating specific repositories across GitHub.
- search_users
  Find GitHub users by username, real name, or other profile information. Useful for locating developers, contributors, or team members.
- submit_pending_pull_request_review
  Submit the requester's latest pending pull request review, normally this is a final step after creating a pending review, adding comments first, unless you know that the user already did the first two steps,
  you should check before calling this.
- update_issue
  Update an existing issue in a GitHub repository.
- update_pull_request
  Update an existing pull request in a GitHub repository.
- update_pull_request_branch
  Update the branch of a pull request with the latest changes from the base branch.
  Prompts:
- AssignCodingAgent
  Assign GitHub Coding Agent to multiple tasks in a GitHub repository.
- IssueToFixWorkflow
  Create an issue for a problem and then generate a pull request to fix it

🟢 chrome-devtools - Ready (26 tools)
Tools:

- click
  Clicks on the provided element
- close_page
  Closes the page by its index. The last open page cannot be closed.
- drag
  Drag an element onto another element
- emulate_cpu
  Emulates CPU throttling by slowing down the selected page's execution.
- emulate_network
  Emulates network conditions such as throttling or offline mode on the selected page.
- evaluate_script
  Evaluate a JavaScript function inside the currently selected page. Returns the response as JSON
  so returned values have to JSON-serializable.
- fill
  Type text into a input, text area or select an option from a <select> element.
- fill_form
  Fill out multiple form elements at once
- get_network_request
  Gets a network request by URL. You can get all requests by calling list_network_requests.
- handle_dialog
  If a browser dialog was opened, use this command to handle it
- hover
  Hover over the provided element
- list_console_messages
  List all console messages for the currently selected page since the last navigation.
- list_network_requests
  List all requests for the currently selected page since the last navigation.
- list_pages
  Get a list of pages open in the browser.
- navigate_page
  Navigates the currently selected page to a URL.
- navigate_page_history
  Navigates the currently selected page.
- new_page
  Creates a new page
- performance_analyze_insight
  Provides more detailed information on a specific Performance Insight that was highlighted in the results of a trace recording.
- performance_start_trace
  Starts a performance trace recording on the selected page. This can be used to look for performance problems and insights to improve the performance of the page. It will also report Core Web Vital (CWV)
  scores for the page.
- performance_stop_trace
  Stops the active performance trace recording on the selected page.
- resize_page
  Resizes the selected page's window so that the page has specified dimension
- select_page
  Select a page as a context for future tool calls.
- take_screenshot
  Take a screenshot of the page or element.
- take_snapshot
  Take a text snapshot of the currently selected page. The snapshot lists page elements along with a unique
  identifier (uid). Always use the latest snapshot. Prefer taking a snapshot over taking a screenshot.
- upload_file
  Upload a file through a provided element.
- wait_for
  Wait for the specified text to appear on the selected page.

🟢 Framelink Figma MCP - Ready (2 tools)
Tools:

- download_figma_images
  Download SVG and PNG images used in a Figma file based on the IDs of image or icon nodes
- get_figma_data
  Get comprehensive Figma file data including layout, content, visuals, and component information

🟢 fast-filesystem - Ready (25 tools)
Tools:

- fast_batch_file_operations
  Performs batch operations on multiple files
- fast_compress_files
  Compresses files or directories
- fast_copy_file
  Copies a file or directory
- fast_create_directory
  Creates a directory
- fast_delete_file
  Deletes a file or directory
- fast_edit_block
  Precise block editing: safely replace exact matches (desktop-commander style)
- fast_edit_blocks
  Processes multiple precise block edits at once (array of fast_edit_block)
- fast_edit_multiple_blocks
  Edits multiple parts of a file at once
- fast_extract_archive
  Extracts an archive file
- fast_extract_lines
  Extracts specific lines from a file
- fast_find_large_files
  Finds large files
- fast_get_directory_tree
  Gets the directory tree structure
- fast_get_disk_usage
  Gets disk usage information
- fast_get_file_info
  Gets detailed information about a file or directory
- fast_large_write_file
  Reliably writes large files (with streaming, retry, backup, and verification features)
- fast_list_allowed_directories
  Lists the allowed directories
- fast_list_directory
  Lists the contents of a directory (with auto-chunking and pagination support)
- fast_move_file
  Moves or renames a file or directory
- fast_read_file
  Reads a file (with auto-chunking support)
- fast_read_multiple_files
  Reads the content of multiple files simultaneously (supports sequential reading)
- fast_safe_edit
  Safe smart editing: Detects risks and provides interactive confirmation
- fast_search_code
  Searches for code (ripgrep-style) - provides auto-chunking, line numbers, and context
- fast_search_files
  Searches for files (by name/content) - supports auto-chunking, regex, context, and line numbers
- fast_sync_directories
  Synchronizes two directories
- fast_write_file
  Writes or modifies a file (provides emoji guidelines)

🟢 TestSprite - Ready (6 tools)
Tools:

- testsprite_bootstrap_tests
  Bootstrap Testsprite needs to be initialized before running any testsprite tool. You need to determine the localPort by reviewing the project code.
- testsprite_generate_backend_test_plan
  Generate a backend test plan with Testsprite.
- testsprite_generate_code_and_execute
  Run node command to generate and execute tests, AI assistant analyzes the test results and saves a markdown report.
- testsprite_generate_code_summary
  Analyze the project repository and summarize the codebase.
- testsprite_generate_frontend_test_plan
  Generate test plan for frontend test.
- testsprite_generate_standardized_prd
  Generate a structured standard PRD.

🟢 stripe - Ready (22 tools)
Tools:

- cancel_subscription
  This tool will cancel a subscription in Stripe.

  It takes the following arguments:
  - subscription (str, required): The ID of the subscription to cancel.

- create_coupon
  This tool will create a coupon in Stripe.

  It takes several arguments:
  - name (str): The name of the coupon.

  Only use one of percent_off or amount_off, not both:
  - percent_off (number, optional): The percentage discount to apply (between 0 and 100).
  - amount_off (number, optional): The amount to subtract from an invoice (in cents).

  Optional arguments for duration. Use if specific duration is desired, otherwise default to 'once'.
  - duration (str, optional): How long the discount will last ('once', 'repeating', or 'forever'). Defaults to 'once'.
  - duration_in_months (number, optional): The number of months the discount will last if duration is repeating.

- create_customer
  This tool will create a customer in Stripe.

  It takes two arguments:
  - name (str): The name of the customer.
  - email (str, optional): The email of the customer.

- create_invoice
  This tool will create an invoice in Stripe.

  It takes two arguments:
  - customer (str): The ID of the customer to create the invoice for.

  - days_until_due (int, optional): The number of days until the invoice is due.

- create_invoice_item
  This tool will create an invoice item in Stripe.

  It takes three arguments'}:
  - customer (str): The ID of the customer to create the invoice item for.

  - price (str): The ID of the price to create the invoice item for.
  - invoice (str): The ID of the invoice to create the invoice item for.

- create_payment_link
  This tool will create a payment link in Stripe.

  It takes two arguments:
  - price (str): The ID of the price to create the payment link for.
  - quantity (int): The quantity of the product to include in the payment link.
  - redirect_url (str, optional): The URL to redirect to after the payment is completed.

- create_price
  This tool will create a price in Stripe. If a product has not already been specified, a product should be created first.

  It takes three arguments:
  - product (str): The ID of the product to create the price for.
  - unit_amount (int): The unit amount of the price in cents.
  - currency (str): The currency of the price.

- create_product
  This tool will create a product in Stripe.

  It takes two arguments:
  - name (str): The name of the product.
  - description (str, optional): The description of the product.

- create_refund
  This tool will refund a payment intent in Stripe.

  It takes three arguments:
  - payment_intent (str): The ID of the payment intent to refund.
  - amount (int, optional): The amount to refund in cents.
  - reason (str, optional): The reason for the refund.

- finalize_invoice
  This tool will finalize an invoice in Stripe.

  It takes one argument:
  - invoice (str): The ID of the invoice to finalize.

- list_coupons
  This tool will fetch a list of Coupons from Stripe.

  It takes one optional argument:
  - limit (int, optional): The number of coupons to return.

- list_customers
  This tool will fetch a list of Customers from Stripe.

  It takes two arguments:
  - limit (int, optional): The number of customers to return.
  - email (str, optional): A case-sensitive filter on the list based on the customer's email field.

- list_disputes
  This tool will fetch a list of disputes in Stripe.

  It takes the following arguments:
  - charge (string, optional): Only return disputes associated to the charge specified by this charge ID.
  - payment_intent (string, optional): Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.

- list_invoices
  This tool will fetch a list of Invoices from Stripe.

  It takes two arguments:
  - customer (str, optional): The ID of the customer to list invoices for.

  - limit (int, optional): The number of invoices to return.

- list_payment_intents
  This tool will list payment intents in Stripe.

  It takes two arguments:
  - customer (str, optional): The ID of the customer to list payment intents for.

  - limit (int, optional): The number of payment intents to return.

- list_prices
  This tool will fetch a list of Prices from Stripe.

  It takes two arguments.
  - product (str, optional): The ID of the product to list prices for.
  - limit (int, optional): The number of prices to return.

- list_products
  This tool will fetch a list of Products from Stripe.

  It takes one optional argument:
  - limit (int, optional): The number of products to return.

- list_subscriptions
  This tool will list all subscriptions in Stripe.

  It takes four arguments:
  - customer (str, optional): The ID of the customer to list subscriptions for.

  - price (str, optional): The ID of the price to list subscriptions for.
  - status (str, optional): The status of the subscriptions to list.
  - limit (int, optional): The number of subscriptions to return.

- retrieve_balance
  This tool will retrieve the balance from Stripe. It takes no input.
- search_stripe_documentation
  This tool will take in a user question about integrating with Stripe in their application, then search and retrieve relevant Stripe documentation to answer the question.

  It takes two arguments:
  - question (str): The user question to search an answer for in the Stripe documentation.
  - language (str, optional): The programming language to search for in the the documentation.

- update_dispute
  When you receive a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help resolve the dispute in your favor. This tool helps.

  It takes the following arguments:
  - dispute (string): The ID of the dispute to update
  - evidence (object, optional): Evidence to upload for the dispute.
    - cancellation_policy_disclosure (string)
    - cancellation_rebuttal (string)
    - duplicate_charge_explanation (string)
    - uncategorized_text (string, optional): Any additional evidence or statements.
  - submit (boolean, optional): Whether to immediately submit evidence to the bank. If false, evidence is staged on the dispute.

- update_subscription
  This tool will update an existing subscription in Stripe. If changing an existing subscription item, the existing subscription item has to be set to deleted and the new one has to be added.

  It takes the following arguments:
  - subscription (str, required): The ID of the subscription to update.
  - proration_behavior (str, optional): Determines how to handle prorations when the subscription items change. Options: 'create_prorations', 'none', 'always_invoice', 'none_implicit'.
  - items (array, optional): A list of subscription items to update, add, or remove. Each item can have the following properties:
    - id (str, optional): The ID of the subscription item to modify.
    - price (str, optional): The ID of the price to switch to.
    - quantity (int, optional): The quantity of the plan to subscribe to.
    - deleted (bool, optional): Whether to delete this item.

🟢 open-aware - Ready (3 tools)
Tools:

- ask
  Delivers quick, focused answers to coding questions by retrieving the most relevant snippets from your indexed repositories and synthesizing a concise explanation.
  Built for LLM agents, it uses semantic search and light reasoning (no multi-step navigation) to return evidence-backed responses with essential code excerpts and file paths, ideal for fast Q&A.
- deep_research
  Performs deep, agentic, multi-step research across selected repositories to answer complex coding questions.
  Chains semantic search, file navigation, and file reading to synthesize evidence-backed explanations with relevant code excerpts and paths.
  It goes beyond snippet retrieval to map relationships across files and components for true codebase understanding.
  This tool acts as a sub-agent. Send queries as if instructing another agent.
- get_context
  Retrieves contextually relevant code snippets based on semantic similarity to the input query.

  ## Purpose

  Use this endpoint to find code examples, implementation patterns, or technical documentation that
  semantically matches a programming query. The system performs vector similarity search across indexed
  code repositories to return the most relevant snippets.

  ## When to use
  - When seeking code implementation examples for specific tasks or patterns
  - When researching how certain functionality is implemented across specific repositories
  - When needing contextual information about programming concepts in specific repositories
  - When assembling reference material for coding tasks

  ## Parameters
  - `query`: String describing the coding concept, pattern or implementation you're searching for.
    More specific queries yield better results. Example: "async file upload handling in FastAPI"

  - `similarity_top_k`: Integer specifying the maximum number of results to return, ranked by
    relevance score. If omitted, system default limits apply. For comprehensive searches,
    values between 40-60 are recommended.

  - `tags_ids`: Optional list of strings representing tag identifiers to filter results by repository tags.

  - `repositories`: Optional list of strings specifying repository identifiers to narrow the search scope.
    For GitHub, use the format `<org_id>/<repo_id>`.
    For Bitbucket Data Center, use `/projects/<namespace_id>/repos/<repo_id>`.

  - `language`: Optional list of programming languages to filter the search results by language.

  - `max_results`: Optional integer specifying the maximum number of results to return after reranking.

  - `filtering_extra_instructions`: Optional string providing additional instructions for filtering the results.

  ## Filtering behavior
  - You may provide either `tags_ids`, `repositories`, or both.
  - If both are provided, results will include matches from either source (logical OR).
  - If neither is provided, the search is performed across all indexed repositories.

  ## Response format

  Returns ContextRetrieverResponse object.

  ## Usage examples
  1. Find FastAPI authentication implementations:

  ```json
     POST /context/retrieve with body:
     {
       "query": "fastapi oauth2 password authentication",
       "similarity_top_k": 40
     }
  ```

  2. Search for error handling patterns in specific repositories:

  ```json
      POST /context/retrieve
      {
        "query": "python exception handling best practices",
        "similarity_top_k": 40,
        "repositories": ["org123/api-utils"],
        "language": ["python"]
      }
  ```

  ## Notes
  - Results are ordered by semantic relevance to the query
  - For best results, use specific technical terminology in queries
  - When known, use `tags_ids`, `repositories`, and `language` to narrow the search scope for more focused results.

🔴 blender (from blender-mcp) - Disconnected

🟢 securityServer (from gemini-cli-security) - Ready (1 tool)
Tools:

- find_line_numbers
  Finds the line numbers of a code snippet in a file.

🔴 mongodb (from mongodb) - Disconnected

🟢 postman (from postman) - Ready (38 tools)
Tools:

- createCollection
  Creates a collection using the [Postman Collection v2.1.0 schema
  format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

  **Note:**

  If you do not include the \`workspace\` query parameter, the system creates the collection in the
  oldest personal Internal workspace you own.

- createCollectionRequest
  Creates a request in a collection. For a complete list of properties, refer to the **Request**
  entry in the [Postman Collection Format
  documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

  **Note:**

  It is recommended that you pass the \`name\` property in the request body. If you do not, the
  system uses a null value. As a result, this creates a request with a blank name.

- createCollectionResponse
  Creates a request response in a collection. For a complete list of request body properties, refer
  to the **Response** entry in the [Postman Collection Format
  documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

  **Note:**

  It is recommended that you pass the \`name\` property in the request body. If you do not, the
  system uses a null value. As a result, this creates a response with a blank name.

- createEnvironment
  Creates an environment.

  **Note:**
  - The request body size cannot exceed the maximum allowed size of 30MB.
  - If you receive an HTTP \`411 Length Required\` error response, manually pass the
    \`Content-Length\` header and its value in the request header.
  - If you do not include the \`workspace\` query parameter, the system creates the environment in
    the oldest personal Internal workspace you own.

- createMock
  Creates a mock server in a collection.
  - Pass the collection UID (ownerId-collectionId), not the bare collection ID.
  - If you only have a \`collectionId\`, resolve the UID first:
    1. Prefer GET \`/collections/{collectionId}\` and read \`uid\`, or
    2. Construct \`{ownerId}-{collectionId}\` using ownerId from GET \`/me\`:
    - For team-owned collections: \`ownerId = me.teamId\`
    - For personal collections: \`ownerId = me.user.id\`
  - Use the \`workspace\` query to place the mock in a specific workspace. Prefer explicit workspace
    scoping.

- createSpec
  Creates an API specification in Postman's [Spec
  Hub](https://learning.postman.com/docs/design-apis/specifications/overview/). Specifications can be
  single or multi-file.

  **Note:**
  - Postman supports OpenAPI 3.0 and AsyncAPI 2.0 specifications.
  - If the file path contains a \`/\` (forward slash) character, then a folder is created. For
    example, if the path is the \`components/schemas.json\` value, then a \`components\` folder is
    created with the \`schemas.json\` file inside.
  - Multi-file specifications can only have one root file.
  - Files cannot exceed a maximum of 10 MB in size.

- createSpecFile
  Creates an API specification file.

  **Note:**
  - If the file path contains a \`/\` (forward slash) character, then a folder is created. For
    example, if the path is the \`components/schemas.json\` value, then a \`components\` folder is
    created with the \`schemas.json\` file inside.
  - Creating a spec file assigns it the \`DEFAULT\` file type.
  - Multi-file specifications can only have one root file.
  - Files cannot exceed a maximum of 10 MB in size.

- createWorkspace
  Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspace
  s/creating-workspaces/).

  **Note:**
  - This endpoint returns a 403 \`Forbidden\` response if the user does not have permission to create
    workspaces. [Admins and Super Admins](https://learning.postman.com/docs/collaborating-in-postman/rol
    es-and-permissions/#team-roles) can configure workspace permissions to restrict users and/or user
    groups from creating workspaces or require approvals for the creation of team workspaces.
  - There are rate limits when publishing public workspaces.
  - Public team workspace names must be unique.

  ### Important

  We deprecated linking collections or environments between workspaces. We do not recommend that you
  do this.

  If you have a linked collection or environment, note the following:
  - The endpoint does not create a clone of a collection or environment.
  - Any changes you make to a linked collection or environment changes them in all workspaces.
  - If you delete a collection or environment linked between workspaces, the system deletes it in all
    the workspaces.

- duplicateCollection
  Creates a duplicate of the given collection in another workspace.

  Use the GET \`/collection-duplicate-tasks/{taskId}\` endpoint to get the duplication task's current
  status.

- generateCollection
  Creates a collection from the given API specification.
  The specification must already exist or be created before it can be used to generate a collection.
  The response contains a polling link to the task status.
- generateSpecFromCollection
  Generates an API specification for the given collection. The response contains a polling link to
  the task status.
- getAllSpecs
  Gets all API specifications in a workspace.
- getAuthenticatedUser
  Gets information about the authenticated user.
  - This endpoint provides “current user” context (\`user.id\`, \`username\`, \`teamId\`, roles).
  - When a user asks for “my …” (e.g., “my workspaces, my information, etc.”), call this first to
    resolve the user ID.
- getCollection
  Gets information about a collection. For a complete list of this endpoint's possible values, refer
  to the [Postman Collection Format
  documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
- getCollections
  The workspace ID query is required for this endpoint. If not provided, the LLM should ask the user
  to provide it.
- getEnvironment
  Gets information about an environment.
- getEnvironments
  Gets information about all of your
  [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).
- getGeneratedCollectionSpecs
  Gets the API specification generated for the given collection.
- getMock
  Gets information about a mock server.
  - Resource: Mock server entity. Response includes the associated \`collection\` UID and
    \`mockUrl\`.
  - Use the \`collection\` UID to navigate back to the source collection.
- getMocks
  Gets all active mock servers. By default, returns only mock servers you created across all
  workspaces.
  - Always pass either the \`workspace\` or \`teamId\` query to scope results. Prefer \`workspace\`
    when known.
  - If you need team-scoped results, set \`teamId\` from the current user: call GET \`/me\` and use
    \`me.teamId\`.
  - If both \`teamId\` and \`workspace\` are passed, only \`workspace\` is used.

- getSpec
  Gets information about an API specification.
- getSpecCollections
  Gets all of an API specification's generated collections.
- getSpecDefinition
  Gets the complete contents of an API specification's definition.
- getSpecFile
  Gets the contents of an API specification's file.
- getSpecFiles
  Gets all the files in an API specification.
- getStatusOfAnAsyncApiTask
  Gets the status of an asynchronous task.
- getTaggedEntities
  Gets Postman elements (entities) by a given tag. Tags enable you to organize and search
  [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-w
  orkspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-
  your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collecti
  ons/using-collections/#tagging-a-collection) that contain shared tags.

  **Note:**

  Tagging is available on Postman [**Enterprise** plans](https://www.postman.com/pricing/).

- getWorkspace
  Gets information about a workspace.

  **Note:**

  This endpoint's response contains the \`visibility\` field.
  [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-w
  orkspaces/#changing-workspace-visibility) determines who can access the workspace:
  - \`personal\` — Only you can access the workspace.
  - \`team\` — All team members can access the workspace.
  - \`private\` — Only invited team members can access the workspace ([**Professional** and
    **Enterprise** plans only](https://www.postman.com/pricing)).
  - \`public\` — Everyone can access the workspace.
  - \`partner\` — Only invited team members and [partners](https://learning.postman.com/docs/collabor
    ating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional**
    and **Enterprise** plans only](https://www.postman.com/pricing)).

  ### Important

  We have deprecated the \`name\` and \`uid\` responses in the following array of objects:
  - \`collections\`
  - \`environments\`
  - \`mocks\`
  - \`monitors\`
  - \`apis\`

- getWorkspaces
  Gets all workspaces you have access to.
  - For “my …” requests, first call GET \`/me\` and pass \`createdBy={me.user.id}\`.
  - This endpoint's response contains the visibility field. Visibility determines who can access the
    workspace:
    - \`personal\` — Only you can access the workspace.
    - \`team\` — All team members can access the workspace.
    - \`private\` — Only invited team members can access the workspace (Professional and Enterprise).
    - \`public\` — Everyone can access the workspace.
    - \`partner\` — Invited team members and partners (Professional and Enterprise).
  - For tools that require the workspace ID, and no workspace ID is provided, ask the user to provide
    the workspace ID. If the user does not provide the workspace ID, call this first with the createdBy
    parameter to use the first workspace.
  - Examples:
    - “List my workspaces” → GET \`/me\`, then GET \`/workspaces?createdBy={me.user.id}\`
    - “List my personal workspaces” → GET \`/me\`, then GET
      \`/workspaces?type=personal&createdBy={me.user.id}\`
    - “List all public workspaces” → GET \`/workspaces?type=public\`
- publishMock
  Publishes a mock server. Publishing a mock server sets its **Access Control** configuration setting
  to public.
- putCollection
  Replaces the contents of a collection using the [Postman Collection v2.1.0 schema
  format](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). Include the
  collection's ID values in the request body. If you do not, the endpoint removes the existing items
  and creates new items.

  To perform an update asynchronously, use the \`Prefer\` header with the \`respond-async\` value.
  When performing an async update, this endpoint returns a HTTP \`202 Accepted\` response.

  **Note:**
  - The maximum collection size this endpoint accepts cannot exceed 100 MB.
  - If you don't include the collection items' ID values from the request body, the endpoint
    **removes** the existing items and recreates the items with new ID values.
  - To copy another collection's contents to the given collection, remove all ID values before you
    pass it in this endpoint. If you do not, this endpoint returns an error. These values include the
    \`id\`, \`uid\`, and \`postman_id\` values.
  - For protocol profile behavior, refer to Postman's [Protocol Profile Behavior documentation](https
    ://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md).

- putEnvironment
  Replaces all the contents of an environment with the given information.

  **Note:**
  - The request body size cannot exceed the maximum allowed size of 30MB.
  - If you receive an HTTP \`411 Length Required\` error response, manually pass the
    \`Content-Length\` header and its value in the request header.

- syncCollectionWithSpec
  Syncs a collection generated from an API specification. This is an asynchronous endpoint that
  returns an HTTP \`202 Accepted\` response.

  **Note:**
  - This endpoint only supports the OpenAPI 3.0 specification type.
  - You can only sync collections generated from the given spec ID.

- syncSpecWithCollection
  Syncs an API specification linked to a collection. This is an asynchronous endpoint that returns an
  HTTP \`202 Accepted\` response.

  **Note:**
  - This endpoint only supports the OpenAPI 3.0 specification type.
  - You can only sync specs generated from the given collection ID.

- updateMock
  Updates a mock server.
  - Resource: Mock server entity associated with a collection UID.
  - Use this to change name, environment, privacy, or default server response.
- updateSpecFile
  Updates an API specification's file.

  **Note:**
  - This endpoint does not accept an empty request body. You must pass one of the accepted values.
  - This endpoint does not accept multiple request body properties in a single call. For example, you
    cannot pass both the \`content\` and \`type\` property at the same time.
  - Multi-file specifications can only have one root file.
  - When updating a file type to \`ROOT\`, the previous root file is updated to the \`DEFAULT\` file
    type.
  - Files cannot exceed a maximum of 10 MB in size.

- updateSpecProperties
  Updates an API specification's properties, such as its name.
- updateWorkspace
  Updates a workspace.

  **Note:**
  - There are rate limits when publishing public workspaces.
  - Public team workspace names must be unique.

  ### Important

  We deprecated linking collections or environments between workspaces. We do not recommend that you
  do this.

  If you have a linked collection or environment, note the following:
  - The endpoint does not create a clone of a collection or environment.
  - Any changes you make to a linked collection or environment changes them in all workspaces.
  - If you delete a collection or environment linked between workspaces, the system deletes it in all
    the workspaces.
