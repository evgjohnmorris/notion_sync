/**
 * Generated Tool: usersTool_0765
 * Domain: Users
 * ID: 0765
 */
exports.usersTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0765:', error);
    throw error;
  }
};
