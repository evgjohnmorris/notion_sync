/**
 * Generated Tool: usersTool_0048
 * Domain: Users
 * ID: 0048
 */
exports.usersTool_0048 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0048:', error);
    throw error;
  }
};
