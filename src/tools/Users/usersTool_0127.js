/**
 * Generated Tool: usersTool_0127
 * Domain: Users
 * ID: 0127
 */
exports.usersTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0127:', error);
    throw error;
  }
};
