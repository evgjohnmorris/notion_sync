/**
 * Generated Tool: usersTool_0714
 * Domain: Users
 * ID: 0714
 */
exports.usersTool_0714 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0714:', error);
    throw error;
  }
};
