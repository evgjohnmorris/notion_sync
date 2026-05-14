/**
 * Generated Tool: usersTool_0096
 * Domain: Users
 * ID: 0096
 */
exports.usersTool_0096 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0096:', error);
    throw error;
  }
};
