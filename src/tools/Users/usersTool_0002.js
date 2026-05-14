/**
 * Generated Tool: usersTool_0002
 * Domain: Users
 * ID: 0002
 */
exports.usersTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0002:', error);
    throw error;
  }
};
