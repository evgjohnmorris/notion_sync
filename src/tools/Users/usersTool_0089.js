/**
 * Generated Tool: usersTool_0089
 * Domain: Users
 * ID: 0089
 */
exports.usersTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0089:', error);
    throw error;
  }
};
