/**
 * Generated Tool: usersTool_0733
 * Domain: Users
 * ID: 0733
 */
exports.usersTool_0733 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0733:', error);
    throw error;
  }
};
