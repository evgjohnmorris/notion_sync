/**
 * Generated Tool: usersTool_0902
 * Domain: Users
 * ID: 0902
 */
exports.usersTool_0902 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0902:', error);
    throw error;
  }
};
