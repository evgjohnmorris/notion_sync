/**
 * Generated Tool: usersTool_0413
 * Domain: Users
 * ID: 0413
 */
exports.usersTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0413:', error);
    throw error;
  }
};
