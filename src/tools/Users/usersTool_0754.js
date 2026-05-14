/**
 * Generated Tool: usersTool_0754
 * Domain: Users
 * ID: 0754
 */
exports.usersTool_0754 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0754:', error);
    throw error;
  }
};
