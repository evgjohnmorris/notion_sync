/**
 * Generated Tool: usersTool_0198
 * Domain: Users
 * ID: 0198
 */
exports.usersTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0198:', error);
    throw error;
  }
};
