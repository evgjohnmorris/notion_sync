/**
 * Generated Tool: usersTool_0669
 * Domain: Users
 * ID: 0669
 */
exports.usersTool_0669 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0669:', error);
    throw error;
  }
};
