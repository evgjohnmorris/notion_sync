/**
 * Generated Tool: usersTool_0834
 * Domain: Users
 * ID: 0834
 */
exports.usersTool_0834 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0834:', error);
    throw error;
  }
};
