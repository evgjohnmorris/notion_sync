/**
 * Generated Tool: usersTool_0623
 * Domain: Users
 * ID: 0623
 */
exports.usersTool_0623 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0623:', error);
    throw error;
  }
};
