/**
 * Generated Tool: usersTool_0969
 * Domain: Users
 * ID: 0969
 */
exports.usersTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0969:', error);
    throw error;
  }
};
