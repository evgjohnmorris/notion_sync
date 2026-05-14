/**
 * Generated Tool: usersTool_0993
 * Domain: Users
 * ID: 0993
 */
exports.usersTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0993:', error);
    throw error;
  }
};
