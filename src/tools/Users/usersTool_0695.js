/**
 * Generated Tool: usersTool_0695
 * Domain: Users
 * ID: 0695
 */
exports.usersTool_0695 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0695:', error);
    throw error;
  }
};
