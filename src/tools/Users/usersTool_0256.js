/**
 * Generated Tool: usersTool_0256
 * Domain: Users
 * ID: 0256
 */
exports.usersTool_0256 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0256:', error);
    throw error;
  }
};
