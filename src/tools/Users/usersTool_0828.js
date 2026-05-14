/**
 * Generated Tool: usersTool_0828
 * Domain: Users
 * ID: 0828
 */
exports.usersTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0828:', error);
    throw error;
  }
};
