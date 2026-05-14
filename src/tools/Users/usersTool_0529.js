/**
 * Generated Tool: usersTool_0529
 * Domain: Users
 * ID: 0529
 */
exports.usersTool_0529 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0529:', error);
    throw error;
  }
};
